import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';
import { Resend } from 'resend';

// Inisialisasi Supabase & Resend
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const data: any = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // 1. Verifikasi X-Signature (Keselamatan)
    const source = `amount${data.amount}billing_address${data.billing_address}billing_first_name${data.billing_first_name}billing_last_name${data.billing_last_name}callback_url${data.callback_url}description${data.description}due_at${data.due_at}email${data.email}id${data.id}mobile${data.mobile}name${data.name}paid${data.paid}paid_at${data.paid_at}state${data.state}url${data.url}`;
    
    const signature = crypto
      .createHmac('sha256', process.env.BILLPLZ_X_SIGNATURE!)
      .update(source)
      .digest('hex');

    if (signature !== data.x_signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // 2. Kemas kini status dalam Supabase jika bayaran berjaya
    if (data.paid === 'true') {
      // Tentukan tier berdasarkan description (Pastikan masa create bill, letak perkataan 'Combo' atau 'Basic')
      const isCombo = data.description.toLowerCase().includes('combo');
      const planType = isCombo ? 'combo' : 'basic';
      const productName = isCombo ? 'Career Boost Bundle (Combo)' : 'ATS Resume Module (Basic)';

      const { error } = await supabase
        .from('orders')
        .update({ 
          status: 'paid', 
          is_paid: true,
          plan_type: planType, // Pastikan kolum ni dah ada kat Supabase
          paid_at: data.paid_at 
        })
        .eq('billplz_id', data.id);

      if (error) throw error;

      // 3. Hantar Emel Automatik guna Resend
      await resend.emails.send({
        from: 'CareerBoost <hello@careerboost.my>',
        to: data.email,
        subject: `Akses ${productName} Anda 🚀`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e293b;">Terima Kasih Atas Pembelian!</h2>
            <p>Bayaran anda untuk <strong>${productName}</strong> telah berjaya.</p>
            <p>Sila klik butang di bawah untuk akses fail anda:</p>
            <div style="margin: 30px 0;">
              <a href="${process.env.NEXT_PUBLIC_BASE_URL}/track-order?email=${data.email}" 
                 style="background: #1e293b; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                 Muat Turun Ebook Sekarang
              </a>
            </div>
            <p style="font-size: 12px; color: #64748b;">
              Jika butang tidak berfungsi, buka link ini: ${process.env.NEXT_PUBLIC_BASE_URL}/track-order
            </p>
          </div>
        `,
      });

      console.log(`Berjaya: ${planType} plan untuk ${data.email}`);
    }

    return new Response('OK', { status: 200 });
  } catch (err) {
    console.error('Webhook Error:', err);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}