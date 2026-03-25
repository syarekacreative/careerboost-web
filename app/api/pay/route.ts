import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, name, amount, packageName } = await req.json();

    // 1. Format data untuk Billplz
    const body = new URLSearchParams({
      collection_id: process.env.BILLPLZ_COLLECTION_ID!,
      email: email,
      name: name,
      amount: (amount * 100).toString(), // Billplz guna sen (RM23 = 2300)
      callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhook`,
      redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`,
      description: `CareerBoost.my - ${packageName}`
    });

    // 2. Panggil API Billplz
    const auth = Buffer.from(`${process.env.BILLPLZ_API_KEY}:`).toString('base64');
    
    const response = await fetch('https://www.billplz.com/api/v3/bills', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
      },
      body: body
    });

    const bill = await response.json();

    if (bill.url) {
      // Pulangkan URL ke Frontend untuk redirect
      return NextResponse.json({ url: bill.url });
    } else {
      console.error("Billplz Error:", bill);
      return NextResponse.json({ error: 'Gagal generate bil' }, { status: 400 });
    }

  } catch (err) {
    console.error('Pay Route Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}