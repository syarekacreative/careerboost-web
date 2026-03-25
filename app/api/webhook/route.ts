import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// 1. Initialize Resend & Supabase (Guna Service Role untuk bypass RLS)
const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    // 2. Tangkap data dari BayarCash (bcl.my)
    const data = await req.json();
    console.log('BayarCash Webhook Received:', data);

    // BayarCash biasanya hantar 'email' atau 'customer_email' dan 'status'
    const email = data.email || data.customer_email;
    const isPaid = data.status === 'paid' || data.paid === true;

    if (!email) {
      return NextResponse.json({ error: 'No email found' }, { status: 400 });
    }

    if (isPaid) {
      // 3. Update status dalam Supabase
      // Kita guna upsert: kalau email belum ada, dia create. Kalau dah ada, dia update status.
      const { error: dbError } = await supabase
        .from('orders')
        .upsert({ 
          email: email, 
          status: 'paid', 
          is_paid: true,
          updated_at: new Date().toISOString()
        }, { onConflict: 'email' });

      if (dbError) throw new Error(`Database Error: ${dbError.message}`);

      // 4. Hantar emel akses ebook guna Resend
      const { error: mailError } = await resend.emails.send({
        from: 'CareerBoost <onboarding@resend.dev>', // Tukar ke domain kau kalau dah verify
        to: email,
        subject: '🚀 Akses Pantas: Ebook & Kit CareerBoost Kau!',
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2>Pembelian Berjaya! 🎉</h2>
            <p>Terima kasih kerana mendapatkan CareerBoost Kit. Kau boleh mula download akses kau di bawah:</p>
            <a href="https://careerboost.my/dashboard" style="background: black; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 10px;">
              Akses Dashboard
            </a>
            <p style="margin-top: 20px; font-size: 12px; color: #666;">
              Jika ada masalah, reply emel ni terus okay?
            </p>
          </div>
        `
      });

      if (mailError) console.error('Resend Error:', mailError);

      return NextResponse.json({ message: 'Success: Database updated & Email sent' }, { status: 200 });
    }

    return NextResponse.json({ message: 'Payment not paid yet' }, { status: 200 });

  } catch (err: any) {
    console.error('Webhook Process Error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}