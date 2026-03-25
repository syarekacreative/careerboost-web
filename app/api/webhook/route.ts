// app/api/webhook/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // 1. Log data untuk kau monitor kat Vercel Dashboard
    console.log("Terima Webhook dari BCL:", data);

    // 2. Filter hanya untuk payment yang BERJAYA (status === 'paid')
    if (data.status === "paid" || data.payment_status === "paid") {
      const userEmail = data.email;
      const amount = data.amount;
      const packageName = data.collection_name;

      // Kat sini kau boleh buat side-task lain kalau nak, contoh:
      // - Simpan dalam Supabase Database untuk rekod jualan
      // - Update total sales kat dashboard kau
      
      console.log(`✅ Payment Berjaya: ${userEmail} beli ${packageName} (RM${amount})`);
    }

    // WAJIB: Bagi respon 200 kat BCL supaya dia tahu webhook dah selamat sampai
    return NextResponse.json({ received: true }, { status: 200 });

  } catch (err) {
    console.error("❌ Webhook Error:", err);
    return NextResponse.json({ error: "Invalid JSON or Server Error" }, { status: 400 });
  }
}