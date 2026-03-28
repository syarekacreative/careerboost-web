"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Script from "next/script"
import {
  X,
  Check,
  FileX,
  ArrowRight,
  FileCheck,
  MessageSquareOff,
  UserX,
  ShieldCheck,
  TrendingUp,
  Globe,
  Zap,
  Coffee,
  Image,
  Sparkles,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Warna Biru Reference: #001e3c
// Warna Kuning Highlight DIUBAH KEPADA GOLD/MUSTARD: #d4af37

const caseStudies = [
  {
    title: "Pecah Siling Gaji (Entry Level)",
    problem: "Calon hantar resume merata, tapi nak lepas offer gaji RM2,500 pun punyalah payah walaupun skill dah ada.",
    cause: "Resume guna progress bar yang robot ATS tak boleh baca dan ayat kerja yang nampak 'biasa'.",
    result: "Lepas guna Format Mesra ATS, calon bukan sahaja dipanggil interview, malah berjaya dapat offer gaji RM3,500.",
    tag: "Gaji +RM1,000",
  },
  {
    title: "Lompat Ke Syarikat Antarabangsa",
    problem: "Junior Marketer dengan pengalaman 3 tahun rasa tersekat dengan pasaran lokal yang kompetitif.",
    cause: "Resume tidak menonjolkan data global seperti CTR atau A/B testing yang syarikat luar negara cari.",
    result: "Berjaya menarik perhatian syarikat di Singapore dan melompat terus ke peringkat antarabangsa.",
    tag: "Remote/Singapore",
  },
  {
    title: "Kenaikan Pangkat (Exec to Manager)",
    problem: "Dah lama jadi Executive, tapi resume nampak macam 'tukang buat kerja' sahaja, bukan seorang pemimpin.",
    cause: "Resume cuma senaraikan tugas harian, bukannya impak strategik pada perniagaan.",
    result: "Kuasai ayat kepimpinan & membuktikan kredibiliti. Naik pangkat ke jawatan Content Manager.",
    tag: "Career Jump",
  }
]

const diamonds = [
  {
    title: "Tiket 'Laluan Ekspres' Lepas Tapisan Robot",
    desc: "Bukan sekadar template, tapi sistem yang buatkan resume kau 'bercahaya' dalam sistem ATS. Robot takkan reject, malah akan letak nama kau kat senarai paling atas.",
    icon: Zap
  },
  {
    title: "Kuasa 'Menjual Diri' Bertaraf Antarabangsa",
    desc: "Formula tukar pengalaman kerja biasa jadi ayat yang nampak 'mahal'. Inilah kunci kenapa calon boleh lompat ke syarikat luar negara (Singapore).",
    icon: Globe
  },
  {
    title: "Kredibiliti 'High-Level' (Nampak Manager)",
    desc: "Ubah persepsi recruiter daripada 'tukang buat kerja' kepada seorang 'strategist'. Cara paling cepat untuk pecah siling gaji RM2,500.",
    icon: TrendingUp
  },
  {
    title: "Keyakinan 'Bulletproof' Masa Apply Kerja",
    desc: "Tiada lagi rasa ragu-ragu masa tekan Submit. Kau tahu resume kau dah 'ngam' dan hanya tunggu panggilan interview.",
    icon: ShieldCheck
  }
]

export default function CareerBoostLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [includeBump, setIncludeBump] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen font-sans bg-white text-slate-900 selection:bg-yellow-100 overflow-x-hidden">
      
      {/* 1. NAVIGATION - aligned to ref */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm border-b border-slate-100 py-3 shadow-sm" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <span className="text-xl md:text-2xl font-black text-[#001e3c] tracking-tighter">CareerBoost<span className="text-[#d4af37]">.my</span></span>
          <Button onClick={() => setShowCheckout(true)} className="bg-[#001e3c] hover:bg-[#05284d] text-white rounded-full px-5 md:px-7 font-bold text-xs md:text-sm shadow-md transition-all">
            Beli RM23
          </Button>
        </div>
      </header>

    {/* 2. HERO SECTION - Mobile Gap Optimized */}
<section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-white">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23001e3c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

  <div className="relative max-w-7xl mx-auto px-5 md:px-6 z-10 w-full">
    {/* Ganti gap-10 kepada gap-4 (untuk mobile) dan md:gap-16 (untuk desktop) */}
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 }
        }
      }}
      className="flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-16 lg:gap-20 items-center"
    >
      
      {/* 1. TEXT CONTENT */}
      <div className="text-center lg:text-left order-1">
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#001e3c]/5 rounded-full text-[#001e3c] text-[10px] md:text-sm font-bold uppercase mb-4 md:mb-6 shadow-sm border border-[#001e3c]/10"
        >
          <Sparkles className="w-3.5 h-3.5 md:w-4 h-4 text-[#d4af37]" />
          <span>Khas Untuk Content Professional di Malaysia</span>
        </motion.div>
        
        <motion.h1 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-[#001e3c] leading-[1.05] md:leading-[1] tracking-tighter"
        >
          Dah hantar resume kat 50 syarikat tapi <span className="text-[#d4af37] relative inline-block">satu pun tak sangkut?<span className="absolute bottom-1 left-0 w-full h-1 md:h-2 bg-[#d4af37]/20 rounded-full z-[-1]"></span></span>
        </motion.h1>
        
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="mt-4 md:mt-8 text-lg md:text-2xl text-slate-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
        >
          Masalah bukan pada <span className="text-[#001e3c] font-extrabold underline decoration-[#d4af37] decoration-4 underline-offset-2">skill</span> kau, tapi resume kau yang <strong className="text-[#001e3c] font-black uppercase tracking-wider underline decoration-dotted decoration-[#d4af37]">halimunan</strong> di mata robot ATS.
        </motion.p>
      </div>

      {/* 2. MOCKUP IMAGE - Rapatkan guna negative margin pada mobile */}
      <motion.div 
        variants={{ hidden: { opacity: 0, scale: 0.9, x: 20 }, visible: { opacity: 1, scale: 1, x: 0 } }}
        className="relative flex justify-center lg:justify-end w-full order-2 mt-[-20px] md:mt-0"
      >
        <div className="relative w-full max-w-[340px] sm:max-w-md">
          <img 
            src="/images/hero.png" 
            alt="Career Boost Bundle Mockup"
            className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 z-10 relative"
          />
          <div className="absolute inset-0 bg-[#d4af37]/10 rounded-full blur-3xl transform scale-75 opacity-50 z-0" />
        </div>
      </motion.div>

      {/* 3. FINAL BUTTON (CTA) */}
      <motion.div 
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="w-full flex justify-center lg:justify-start lg:col-start-1 lg:mt-[-30px] pb-4 order-3 mt-0"
      >
        <Button 
          onClick={() => setShowCheckout(true)} 
          className="bg-[#D4AF37] hover:bg-[#B8962E] text-[#001e3c] font-semibold text-base md:text-lg h-auto py-3.5 md:py-4 px-8 md:px-10 rounded-full shadow-md group transition-all hover:scale-105 active:scale-95 flex items-center gap-2 border-none"
        >
          Lihat Pakej Career Boost <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>

    </motion.div>
  </div>
</section>
  
      {/* 3. FAKTA UTAMA - BG BIRU GELAP (aligned to ref) */}
      <section className="py-20 md:py-28 px-6 relative z-10 bg-[#001e3c] text-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12 md:mb-16 max-w-3xl mx-auto">
            {/* 1. TUKAR KEPADA CAPITAL CASE */}
            <h2 className="text-3xl md:text-6xl font-black text-[#d4af37] mb-6 tracking-tight leading-tight">
              Kenapa 75% Resume Gagal di Peringkat Awal?
            </h2>
            <p className="text-slate-300 text-sm md:text-lg font-medium">Ini adalah masalah utama yang dihadapi oleh pencari kerja di Malaysia:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-left">
            {[ {icon: FileX, title: "Format Tidak Mesra ATS", description: "Resume anda mungkin hebat di mata manusia, tetapi sistem ATS tidak dapat membacanya dengan betul."},
               {icon: MessageSquareOff, title: "Tiada Impak & Data", description: "Ayat kerja nampak biasa dan generic. Tiada nombor, tiada pencapaian konkrit yang boleh memukau HR."},
               {icon: UserX, title: "Gagal Menjawab Interview", description: "Walaupun dipanggil interview, ramai gagal kerana tidak tahu struktur jawapan yang HR ingin dengar."}
            ].map((fact, i) => (
              <div key={i} className="bg-[#05284d] border border-slate-700/50 p-8 md:p-9 rounded-2xl md:rounded-3xl hover:border-[#d4af37]/50 transition-all">
                <div className="w-12 h-12 md:w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                  <fact.icon className="w-6 h-6 md:w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#d4af37] mb-4">{fact.title}</h3>
                <p className="text-slate-200 text-sm md:text-base leading-relaxed">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CASE STUDIES - BG WHITE */}
      <section className="py-20 md:py-28 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* 1. TUKAR KEPADA CAPITAL CASE */}
          <h2 className="text-3xl md:text-6xl font-black text-[#001e3c] mb-12 md:mb-20 text-center tracking-tight leading-tight max-w-4xl mx-auto">
            Ini Real Case Bagaimana Modul Ini <span className="text-[#d4af37] relative">Membantu Kerjaya Mereka<span className="absolute bottom-1 md:bottom-2 left-0 w-full h-1 md:h-2 bg-[#d4af37]/20 rounded-full"></span></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((caseS, i) => (
              // 2. WARNAKAN BIRU KAD & ADJUST LABEL
              <div key={i} className="bg-[#001e3c] border border-slate-800 p-7 md:p-9 rounded-[2rem] relative shadow-xl hover:scale-[1.02] transition-all overflow-hidden text-white">
                
                {/* ADJUST: Tag dialihkan dari top-right, ke bawah tajuk */}
                <h3 className="text-xl md:text-2xl font-black text-[#d4af37] mb-4 leading-tight tracking-tight underline decoration-[#d4af37]/40 underline-offset-8 relative z-10">{caseS.title}</h3>
                
                <div className="inline-block text-[10px] md:text-xs font-extrabold px-3 py-1 rounded-full uppercase bg-[#d4af37] text-[#001e3c] border border-slate-900 mb-6 relative z-10">
                  {caseS.tag}
                </div>

                {/* Tukar warna teks body kad kepada cerah */}
                <div className="space-y-4 text-sm md:text-base text-slate-300 leading-relaxed relative z-10">
                  <p><strong className="text-red-400 font-extrabold uppercase text-[10px] block mb-1">Masalah:</strong> {caseS.problem}</p>
                  <p><strong className="text-[#d4af37] font-extrabold uppercase text-[10px] block mb-1">Punca:</strong> {caseS.cause}</p>
                  <div className="bg-[#05284d] border border-slate-700/50 p-4 rounded-xl mt-4 relative z-10">
                    <p className="text-white font-bold"><strong className="font-black italic mr-1 text-[#d4af37]">Hasil:</strong> {caseS.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE CONNECTOR - BG Blue (Zebra Zebra!) */}
      <section className="py-16 md:py-24 px-6 text-center bg-[#001e3c] text-white">
        <div className="max-w-5xl mx-auto bg-[#05284d] border-2 md:border-4 border-[#d4af37] rounded-3xl md:rounded-[3rem] p-8 md:p-14 shadow-2xl md:rotate-[-1deg]">
          {/* 1. TUKAR KEPADA CAPITAL CASE */}
          <h2 className="text-2xl md:text-5xl font-black mb-4 tracking-tight text-[#d4af37] leading-tight">
            "Ini Kisah Benar. Kaedah Penulisan Resume Yang Dah Diuji Untuk Berada Di Skor Tertinggi Masa Penilaian Oleh Recruiter."
          </h2>
        </div>
      </section>

      {/* 6. THE DIAMONDS - BG WHITE (Wait, follow Zebrazebra! It's White after Blue) */}
      <section className="py-20 md:py-28 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            {/* 1. TUKAR KEPADA CAPITAL CASE */}
            <h2 className="text-3xl md:text-6xl font-black text-[#001e3c] mb-4 uppercase tracking-tighter leading-none">Apa Yang Anda Bakal <span className="text-[#d4af37]">Miliki?</span></h2>
            <p className="text-slate-600 text-sm md:text-lg font-medium">Bukan sekadar PDF, tapi tiket untuk 'level up' kerjaya kau.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {diamonds.map((d, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-5 md:gap-7 p-7 md:p-9 bg-slate-50 border border-slate-100 rounded-2xl md:rounded-3xl hover:border-[#001e3c]/20 transition-all">
                <div className="w-12 h-12 md:w-16 h-16 bg-[#001e3c] rounded-xl flex items-center justify-center shrink-0 border border-slate-700">
                  <d.icon className="w-6 h-6 md:w-8 h-8 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-extrabold text-[#001e3c] mb-2 tracking-tight">{d.title}</h3>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 md:mt-20 text-center flex flex-col items-center max-w-xl mx-auto border border-slate-200 p-8 md:p-10 rounded-2xl md:rounded-[3rem] bg-slate-50 shadow-inner">
            <p className="text-lg md:text-xl text-[#001e3c] mb-8 font-bold leading-relaxed">"Jangan biarkan resume yang 'sakit' halang kerjaya yang kau impikan. Ambil 'diamond' ni sekarang."</p>
            <Button onClick={() => setShowCheckout(true)} className="w-full md:w-auto bg-[#001e3c] hover:bg-[#05284d] text-white h-auto py-5 md:py-6 px-10 md:px-12 rounded-full text-lg md:text-xl font-bold uppercase tracking-tight shadow-lg">
              Saya Nak Level Up Resume
            </Button>
          </div>
        </div>
      </section>

      {/* 7. REALITY CHECK - BG BIRU GELAP (Zebra Zebra!) */}
      <section className="py-20 md:py-28 px-6 bg-[#001e3c] text-slate-100 border-y border-slate-700/50 relative">
         <div className="absolute top-0 w-full h-[500px] bg-slate-900/40 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-5xl font-black mb-10 md:mb-14 text-center leading-tight tracking-tighter uppercase">
            "Harga seunit modul ni? Cuma seharga <span className="text-[#d4af37] underline decoration-[#d4af37]/50 decoration-4 decoration-wavy">2 cawan Matcha Latte</span>."
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-16">
            <div className="bg-[#05284d] border border-slate-700/50 p-7 md:p-9 rounded-2xl flex flex-col items-center text-center opacity-70">
              <div className="w-12 h-12 md:w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mb-5">
                 <Coffee className="w-6 h-6 md:w-8 h-8 text-slate-400" />
              </div>
              <h4 className="text-lg md:text-2xl font-extrabold text-slate-100 mb-2">Matcha Latte</h4>
              <p className="text-xs md:text-base text-slate-300">Habis minum, habis nikmatnya.</p>
            </div>
            <div className="bg-[#05284d] border-2 border-[#d4af37]/40 p-7 md:p-9 rounded-2xl flex flex-col items-center text-center shadow-xl">
              <div className="w-12 h-12 md:w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mb-5 border border-yellow-400/20">
                 <TrendingUp className="w-6 h-6 md:w-8 h-8 text-[#d4af37]" />
              </div>
              <h4 className="text-lg md:text-2xl font-extrabold text-[#d4af37] mb-2">Modul Resume Mesra ATS</h4>
              <p className="text-xs md:text-base text-slate-100">Pelaburan yang bantu pecah siling gaji RM2,500 ke RM3,500.</p>
            </div>
          </div>
          <p className="text-center text-slate-200 leading-relaxed max-w-2xl mx-auto text-base md:text-lg font-medium bg-slate-950/40 p-6 rounded-2xl border border-slate-800">
            Cuba kau fikir: Bayangkan kau laburkan RM23 hari ini, dan bulan depan kau dapat offer kerja dengan kenaikan gaji RM1,000 sebulan. Itu adalah <strong className="text-[#d4af37] font-black text-lg md:text-xl">pulangan 43x ganda</strong>!
          </p>
        </div>
      </section>

     {/* 8. FINAL OFFER - Dark Premium Style */}
    <section className="py-20 md:py-32 px-5 bg-white">
     <div className="max-w-xl mx-auto relative group">
    
    {/* 1. MOST POPULAR BADGE */}
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
      <div className="bg-[#D4AF37] text-[#001e3c] px-6 py-2 rounded-full text-sm md:text-base font-bold flex items-center gap-2 shadow-lg border-2 border-[#D4AF37]">
        <Sparkles className="w-4 h-4" />
        Most Popular
      </div>
    </div>

    {/* 2. MAIN CARD */}
    <div className="bg-[#001e3c] rounded-[2.5rem] p-8 md:p-14 text-center border-[6px] border-[#D4AF37]/20 shadow-2xl relative overflow-hidden transition-all duration-500 group-hover:border-[#D4AF37]/40">
      
      {/* Content Header */}
      <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter uppercase">
        Career Boost Bundle
      </h2>
      <p className="text-white/60 text-sm md:text-lg mb-8 font-medium">
        Pakej lengkap untuk kejayaan
      </p>

      {/* Price Section */}
      <div className="mb-10">
        <span className="text-6xl md:text-8xl font-black text-[#D4AF37] tracking-tighter drop-shadow-sm">
          RM33
        </span>
      </div>

      {/* Features List (Rapat & Clean) */}
      <div className="space-y-4 mb-12 text-left max-w-[280px] md:max-w-xs mx-auto">
        {[
          "Semua dalam Pakej Basic",
          "Workbook Tulis Data Resume Guna AI",
          "Formula Interview Profesional",
          "Teknik jawab soalan sukar",
          "Contoh jawapan interview",
          "Bonus tips dari HR Malaysia"
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-4 text-white/90">
            <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" strokeWidth={3} />
            <span className="text-sm md:text-base font-semibold leading-snug">{item}</span>
          </div>
        ))}
      </div>

      {/* 3. CTA BUTTON (Pill Shaped Mustard) */}
      <Button 
        onClick={() => setShowCheckout(true)} 
        className="w-full bg-[#D4AF37] hover:bg-[#B8962E] text-[#001e3c] h-auto py-4 md:py-5 rounded-full text-lg md:text-xl font-bold shadow-xl transition-all hover:scale-105 active:scale-95 border-none"
      >
        Dapatkan Career Boost Bundle
      </Button>
      
    </div>

    {/* Subtle Glow Effect at the back */}
    <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[100px] rounded-full z-[-1] opacity-50" />
     </div>
    </section>

      {/* MODAL CHECKOUT */}
      <AnimatePresence>
        {showCheckout && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowCheckout(false)} className="absolute inset-0 bg-[#001e3c]/60 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white text-black w-full max-w-lg rounded-2xl md:rounded-[2rem] p-6 md:p-9 shadow-2xl overflow-y-auto max-h-[95vh] border border-slate-200">
              
              <button onClick={() => setShowCheckout(false)} className="absolute top-4 md:top-6 right-4 md:right-6 p-2 bg-slate-100 rounded-full text-slate-600"><X className="w-5 h-5"/></button>
              
              <div className="text-center mb-6 md:mb-8 pt-2">
                <h4 className="text-xl md:text-2xl font-extrabold text-[#001e3c] uppercase">Checkout</h4>
                <p className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-widest mt-2 border-t border-slate-100 pt-2 inline-block">Modul Resume ATS</p>
              </div>

              <div className={`border-2 border-dashed p-5 md:p-6 rounded-2xl mb-8 relative transition-all cursor-pointer ${includeBump ? 'bg-[#d4af37]/5 border-[#d4af37]/30 text-[#001e3c]' : 'bg-slate-50 border-slate-200 text-slate-950'}`} onClick={() => setIncludeBump(!includeBump)}>
                <div className="absolute -top-3 left-4 bg-[#d4af37] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">AI Add-on</div>
                <div className="flex gap-4">
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${includeBump ? 'bg-[#001e3c] border-[#001e3c]' : 'bg-white border-slate-200'}`}>
                    {includeBump && <Check className="w-4 h-4 text-[#d4af37]" strokeWidth={4} />}
                  </div>
                  <div>
                    <p className="font-bold text-sm md:text-base leading-snug mb-1 text-[#001e3c]">Nak AI siapkan ayat resume kau dalam 5 minit? (+RM10)</p>
                    <p className="text-[11px] md:text-xs text-slate-600 leading-relaxed">
                      Saya bagi Prompt Rahsia untuk tukar ayat biasa jadi 'World-Class' guna AI.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full bg-slate-50 rounded-xl overflow-hidden min-h-[400px] border border-slate-100 shadow-inner p-2 md:p-3">
                <div key={`${includeBump ? 'with-bump' : 'no-bump'}-${Date.now()}`} className="w-full">
                  <div id="bcl-payment-form" data-url={includeBump ? "https://syarekacreative.bcl.my/embed/form/careerboostbundle" : "https://syarekacreative.bcl.my/embed/form/careerboostasas"}></div>
                  <Script src={`https://bcl.my/js/bc-encrypted-payment-embed.js?v=${Date.now()}`} strategy="afterInteractive" />
                </div>
              </div>

              <p className="text-center text-[10px] text-slate-400 mt-6 flex items-center justify-center gap-2 font-bold uppercase py-3 border border-slate-100 bg-slate-50 rounded-full">
                <ShieldCheck className="w-4 h-4 text-green-600" /> Secure Payment Powered by BayarCash
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-16 text-center border-t border-slate-100 bg-[#001e3c] text-slate-100 px-6">
        <span className="text-xl font-extrabold text-white tracking-tighter mb-2 block">CareerBoost<span className="text-[#d4af37]">.my</span></span>
        <p className="text-slate-300 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">© {new Date().getFullYear()} • Built for content professionals • Zebra Edition</p>
      </footer>
    </main>
  )
}