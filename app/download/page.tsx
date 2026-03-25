"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react"; // Tambah ni
import { CheckCircle2, Download, ArrowLeft, FileText } from "lucide-react";

// 1. Buat component baru untuk isi content
function DownloadContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  if (!email) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#fafafa] p-6 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-sm">
          <p className="text-gray-500 mb-6 text-sm italic">Sila gunakan pautan khas yang dihantar ke emel anda.</p>
          <a href="/" className="inline-flex items-center text-sm font-medium text-black hover:gap-2 transition-all">
            <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-6 font-sans">
      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-10 text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-green-50 p-3 rounded-full">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">Pembelian Disahkan</h1>
          <p className="text-gray-500 text-sm mb-8">
            Fail telah dikunci untuk: <br/>
            <span className="text-black font-semibold lowercase">{email}</span>
          </p>
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-dashed border-gray-200">
            <FileText className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Career Boost Digital Pack</p>
          </div>
          <a href={`/api/download?email=${email}`} className="flex items-center justify-center w-full bg-black text-white font-medium py-4 px-6 rounded-xl hover:bg-gray-900 shadow-lg shadow-black/5">
            <Download className="w-5 h-5 mr-2" /> Muat Turun Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}

// 2. Main component yang export default - Balut dengan Suspense
export default function DownloadPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Sila tunggu sebentar...</div>}>
      <DownloadContent />
    </Suspense>
  );
}