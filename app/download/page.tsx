// app/download/page.tsx
"use client";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Download, ArrowLeft, FileText } from "lucide-react"; // install lucide-react kalau belum

export default function DownloadPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  if (!email) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#fafafa] p-6 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-sm">
          <p className="text-gray-500 mb-6 text-sm italic">Sila gunakan pautan khas yang dihantar ke emel anda selepas pembelian.</p>
          <a href="/" className="inline-flex items-center text-sm font-medium text-black hover:gap-2 transition-all">
            <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Laman Utama
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-6 font-sans">
      {/* Background Decor - Geometric sikit */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-50 blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-50 blur-[120px]" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-10 text-center">
          
          {/* Icon Success */}
          <div className="mb-6 flex justify-center">
            <div className="bg-green-50 p-3 rounded-full">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
            Pembelian Disahkan
          </h1>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Terima kasih! Kit kerjaya anda sedia untuk dimuat turun. Fail telah dikunci khas untuk emel: <br/>
            <span className="text-black font-semibold lowercase">{email}</span>
          </p>

          {/* Download Card Section */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-dashed border-gray-200">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-1">
              File Ready
            </p>
            <p className="text-sm font-medium text-gray-700">Career Boost Digital Pack</p>
          </div>

          {/* Action Button */}
          <a 
            href={`/api/download?email=${email}`}
            className="group relative flex items-center justify-center w-full bg-black text-white font-medium py-4 px-6 rounded-xl hover:bg-gray-900 transition-all active:scale-[0.98] shadow-lg shadow-black/5"
          >
            <Download className="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform" />
            Muat Turun Sekarang
          </a>

          <p className="mt-8 text-[10px] text-gray-300 uppercase tracking-[0.2em] font-medium">
            careerboost.my &bull; 2026
          </p>
        </div>

        {/* Support Link */}
        <p className="text-center mt-6 text-sm text-gray-400">
          Menghadapi masalah? <a href="https://wa.me/yournumber" className="text-gray-600 underline underline-offset-4 hover:text-black">Hubungi Support</a>
        </p>
      </div>
    </div>
  );
}