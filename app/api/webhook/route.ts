// app/api/webhook/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Client (Guna Service Role Key untuk bypass RLS)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Console log ni penting untuk kau check kat Vercel Logs nanti
    console.log("Data Webhook BCL Masuk:", data);

    // Filter payment yang statusnya 'paid'
    if (data.status === "paid" || data.payment_status === "paid") {
      
      // Ambil data dari BCL untuk simpan ke table 'orders'
      const { error } = await supabase
        .from('orders') 
        .insert([
          {
            email: data.email,
            customer_name: data.first_name || "Pembeli Career Boost",
            package_name: data.collection_name, // Contoh: "Career Boost Bundle"
            amount: parseFloat(data.amount),
            status: 'paid',
            payment_id: data.id, // ID unik transaksi dari BCL
          }
        ]);

      if (error) {
        console.error("❌ Supabase Error:", error.message);
      } else {
        console.log(`✅ Jualan Berjaya Direkod: ${data.email}`);
      }
    }

    // Bagitahu BCL yang kita dah terima data (Status 200)
    return NextResponse.json({ received: true }, { status: 200 });

  } catch (err) {
    console.error("❌ Webhook Crash:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}