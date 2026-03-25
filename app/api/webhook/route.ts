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
    
    // DEBUG: Supaya kau nampak kat log kalau dia masuk sampai sini
    console.log("Processing Webhook for event:", payload.event);

    // Ikut log kau: data utama duduk dalam payload.data.main_data
    const bclData = payload.data;
    const mainData = bclData?.main_data;

    // Check is_paid === 1 (berdasarkan log kau)
    if (mainData && mainData.is_paid === 1) {
      console.log("Payment verified (is_paid: 1). Inserting to Supabase...");

      const { error } = await supabase
        .from('orders')
        .insert([
          {
            email: mainData.payer_email,
            customer_name: mainData.payer_name || "Buyer",
            package_name: bclData.form_title || "Career Boost Product",
            amount: parseFloat(mainData.amount),
            status: 'paid',
            payment_id: mainData.id,
          }
        ]);

      if (error) {
        console.error("❌ Supabase Error Detail:", error.message);
      } else {
        console.log(`✅ BERJAYA! Data ${mainData.payer_email} dah masuk Supabase.`);
      }
    } else {
      console.log("⚠️ Payment skipped: is_paid bukan 1 atau data tak cukup.");
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (err) {
    console.error("❌ Webhook Crash:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}