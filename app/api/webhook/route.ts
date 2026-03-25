// app/api/webhook/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    console.log("BCL Webhook Received:", JSON.stringify(payload, null, 2));

    // Ikut logs kau: maklumat ada dalam payload.data.main_data
    const mainData = payload.data?.main_data;

    // Check status bayaran guna 'is_paid' (1 bermaksud sudah bayar)
    if (mainData && mainData.is_paid === 1) {
      
      const { error } = await supabase
        .from('orders')
        .insert([
          {
            email: mainData.payer_email,
            customer_name: mainData.payer_name || "Buyer",
            package_name: payload.data.form_title || "Career Boost Product",
            amount: parseFloat(mainData.amount),
            status: 'paid',
            payment_id: mainData.id, // '01kmjhqd84db5kjv1dq39pajwf'
          }
        ]);

      if (error) {
        console.error("❌ Supabase Error:", error.message);
      } else {
        console.log(`✅ Jualan Berjaya Direkod untuk: ${mainData.payer_email}`);
      }
    } else {
      console.log("⚠️ Webhook diterima tapi is_paid bukan 1 atau data tak lengkap.");
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (err) {
    console.error("❌ Webhook Crash:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}