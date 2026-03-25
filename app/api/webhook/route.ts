// app/api/webhook/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // 1. Check status payment dari BayarCash
    // Biasanya status 'paid' atau ikut documentation bcl.my
    if (data.status === "paid") {
      const userEmail = data.email;
      const packageName = data.collection_name; // Atau ikut field bcl bagi

      // 2. LOGIK KAU DI SINI:
      // - Hantar email guna Resend/Nodemailer berserta link E-book.
      // - Atau update database Supabase kau.
      
      console.log(`Payment success for ${userEmail} package ${packageName}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Webhook failed" }, { status: 400 });
  }
}