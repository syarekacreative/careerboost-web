// app/api/webhook/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase (Guna service_role key supaya tak sangkut RLS)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Log untuk monitor kat Vercel Logs
    console.log("Terima Webhook dari BCL:", data);

    // Filter hanya untuk payment yang BERJAYA
    if (data.status === "paid" || data.payment_status === "paid") {
      const userEmail = data.email;
      const amount = data.amount;
      const packageName = data.collection_name;
      const customerName = data.first_name || "Pembeli";
      const paymentId = data.id; // ID unik dari bcl.my

      // SIMPAN KE SUPABASE
      const { error } = await supabase
        .from('orders') // Pastikan table 'orders' dah wujud kat Supabase
        .insert([
          {
            email: userEmail,
            customer_name: customerName,
            package_name: packageName,
            amount: parseFloat(amount),
            status: 'paid',
            payment_id: paymentId,
          }
        ]);

      if (error) {
        console.error("❌ Gagal simpan ke Supabase:", error.message);
      } else {
        console.log(`✅ Rekod jualan disimpan: ${userEmail} (RM${amount})`);
      }
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (err) {
    console.error("❌ Webhook Error:", err);
    return NextResponse.json({ error: "Invalid JSON or Server Error" }, { status: 400 });
  }
}