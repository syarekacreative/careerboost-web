import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Paksa file ni jangan buat static build untuk elak error build Vercel
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    // Initialize Supabase kat dalam function
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const data = await req.json();
    console.log('BayarCash Webhook:', data);

    // Ambil email & status dari BayarCash
    const email = data.email || data.customer_email;
    const isPaid = data.status === 'paid' || data.paid === true;

    if (isPaid && email) {
      // Update status dalam Supabase supaya user boleh login/akses ebook
      const { error: dbError } = await supabase
        .from('orders')
        .upsert({ 
          email: email, 
          status: 'paid', 
          is_paid: true,
          updated_at: new Date().toISOString()
        }, { onConflict: 'email' });

      if (dbError) throw new Error(`Database Error: ${dbError.message}`);

      return NextResponse.json({ message: 'Supabase updated' }, { status: 200 });
    }

    return NextResponse.json({ message: 'Payment pending or no email' }, { status: 200 });

  } catch (err: any) {
    console.error('Webhook Error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}