// app/api/download/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase dengan SERVICE_ROLE_KEY untuk bypass RLS
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    // 1. Safety Check: Kalau email takde dalam URL
    if (!email) {
      return NextResponse.json({ error: "Email diperlukan" }, { status: 400 });
    }

    // 2. Semak rekod pembeli dalam table 'orders'
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("package_name, status")
      .eq("email", email)
      .eq("status", "paid") // Hanya yang dah bayar
      .single();

    if (orderError || !order) {
      console.error("Access Denied for:", email);
      return NextResponse.json(
        { error: "Akses ditolak. Sila pastikan anda telah membuat pembayaran." },
        { status: 403 }
      );
    }

    // 3. Logik Tentukan Fail (Mapping Pakej BCL -> File Supabase)
    // NOTA: Pastikan nama 'case' sebiji macam 'Form Title' kat Dashboard bcl.my
    let fileName = "";
    
    switch (order.package_name) {
      case "Career Boost Asas":
        fileName = "kit-asas.pdf";
        break;
      case "Career Boost Bundle":
        fileName = "career-boost-bundle.zip"; // Bundle dalam format .zip
        break;
      default:
        // Fallback kalau nama pakej tak match, bagi yang asas
        fileName = "kit-asas.pdf";
    }

 // --- KOD BARU UNTUK TENGOK ERROR SEBENAR ---
const { data: storageData, error: storageError } = await supabase
.storage
.from("ebooks")
.createSignedUrl(fileName, 60);

if (storageError || !storageData) {
// Log ni akan keluar kat terminal Cursor awak
console.error("DEBUG STORAGE ERROR:", storageError); 
console.log("CUBA DOWNLOAD FAIL:", fileName);

return NextResponse.json(
  { 
    error: "Gagal menjana pautan muat turun.",
    punca: storageError?.message || "Fail tak dijumpai dalam bucket" 
  }, 
  { status: 500 }
);
}

    // 5. Redirect terus ke link PDF/Zip tersebut
    // User takkan nampak link asal Supabase, cuma nampak file terus download
    return NextResponse.redirect(storageData.signedUrl);

  } catch (err) {
    console.error("Download API Crash:", err);
    return NextResponse.json(
      { error: "Ralat dalaman pelayan." },
      { status: 500 }
    );
  }
}