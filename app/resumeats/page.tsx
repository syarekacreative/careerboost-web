"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  ArrowRight,
  FileCheck,
  Award,
  Sparkles,
  FileX,
  MessageSquareOff,
  UserX,
  Check,
  FileText,
  Bot,
  MessageCircle,
  Shield,
  Users,
  Facebook,
  Instagram,
  Mail,
  Eye,
  Lock,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// --- DATA ASAL (STRICTLY MAINTAINED) ---
const painPoints = [
  {
    icon: FileX,
    title: "Format Tidak Mesra ATS",
    description: "Resume anda mungkin hebat di mata manusia, tetapi sistem ATS (Applicant Tracking System) tidak dapat membacanya dengan betul.",
  },
  {
    icon: MessageSquareOff,
    title: "Tiada Impak & Data",
    description: "Ayat kerja nampak biasa dan generic. Tiada nombor, tiada pencapaian konkrit yang boleh memukau HR.",
  },
  {
    icon: UserX,
    title: "Gagal Menjawab Interview",
    description: "Walaupun dipanggil interview, ramai gagal kerana tidak tahu struktur jawapan yang HR ingin dengar.",
  },
]

const tiers = [
  {
    name: "Pakej Basic",
    price: "RM23",
    description: "Untuk permulaan yang kukuh",
    features: [
      "Modul Resume Mesra ATS",
      "Template Resume/CV Google Docs",
      "Panduan format yang betul",
      "Contoh ayat profesional",
    ],
    popular: false,
    cta: "Dapatkan Pakej Basic",
  },
  {
    name: "Career Boost Bundle",
    price: "RM33",
    description: "Pakej lengkap untuk kejayaan",
    features: [
      "Semua dalam Pakej Basic",
      "Workbook Tulis Data Resume Guna AI",
      "Formula Interview Profesional",
      "Teknik jawab soalan sukar",
      "Contoh jawapan interview",
      "Bonus tips dari HR Malaysia",
    ],
    popular: true,
    cta: "Dapatkan Career Boost Bundle",
  },
]

const contents = [
  {
    icon: FileText,
    title: "Struktur & Format Standard",
    description: "Panduan menyusun maklumat mengikut hierarki yang betul supaya sistem ATS tidak keliru membaca data anda.",
  },
  {
    icon: Bot,
    title: "Keyword Optimization",
    description: "Cara mencari dan memasukkan kata kunci spesifik daripada iklan jawatan ke dalam resume secara organik.",
  },
  {
    icon: MessageCircle,
    title: "Teknik 'Bullet Points' Berimpak",
    description: "Formula menulis pencapaian menggunakan data dan nombor untuk melepasi saringan awal pihak HR.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function CareerBoostLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false) // State baru untuk loading

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openCheckout = (pkg: string) => {
    setSelectedPackage(pkg)
    setShowCheckout(true)
  }

  // --- FUNGSI PEMBAYARAN BILLPLZ ---
  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")

    // Tentukan harga ikut pakej (RM)
    const amount = selectedPackage === "Career Boost Bundle" ? 33 : 23

    try {
      const response = await fetch("/api/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          amount,
          packageName: selectedPackage,
        }),
      })

      const data = await response.json()

      if (data.url) {
        // Redirect ke Billplz
        window.location.href = data.url
      } else {
        alert("Gagal menjana pautan pembayaran. Sila cuba sebentar lagi.")
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert("Ralat sistem. Sila pastikan sambungan internet anda stabil.")
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen font-sans bg-white">
      {/* 1. NAVIGATION */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-[#001f3f]">
                CareerBoost<span className="text-[#D4AF37]">.my</span>
              </span>
            </a>
            <div className="hidden md:block">
              <Button 
                onClick={() => openCheckout("Career Boost Bundle")} 
                className="bg-[#D4AF37] hover:bg-[#B8962E] text-[#001f3f] font-semibold px-6 py-2 rounded-lg transition-all"
              >
                Beli Sekarang
              </Button>
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-[#001f3f]">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23001f3f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#001f3f]/5 rounded-full text-[#001f3f] text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Panduan Lengkap Kerjaya</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#001f3f] leading-tight">
                Bina Resume Yang Melepasi Tapisan Robot <span className="text-[#D4AF37]">&</span> Memikat Hati HR.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                Gunakan panduan praktikal yang dibina berdasarkan kriteria sebenar recruiter di Malaysia.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={() => openCheckout("Career Boost Bundle")} size="lg" className="bg-[#D4AF37] hover:bg-[#B8962E] text-[#001f3f] font-semibold text-lg px-8 py-6 rounded-xl shadow-lg group">
                  Lihat Pakej Career Boost <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-[#001f3f]/10 rounded-2xl transform -rotate-6 translate-x-4 translate-y-4" />
                <div className="relative bg-[#001f3f] rounded-2xl shadow-2xl overflow-hidden p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center"><FileCheck className="w-6 h-6 text-[#001f3f]" /></div>
                      <div><p className="text-[#D4AF37] font-semibold text-sm">E-Book</p><p className="text-white/70 text-xs">PDF Format</p></div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Career Boost Bundle</h3>
                    <p className="text-white/80 text-sm mb-6">Panduan lengkap resume ATS + Interview</p>
                    <div className="space-y-3">
                      {["Modul Resume Mesra ATS", "Workbook AI Resume", "Formula Interview"].map((f, i) => (
                        <div key={i} className="flex items-center gap-3 text-white/90">
                          <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center"><Check className="w-3 h-3 text-[#D4AF37]" /></div>
                          <span className="text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                      <span className="text-white/60 text-sm">Harga Pakej</span>
                      <span className="text-[#D4AF37] text-2xl font-bold">RM33</span>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PAIN POINTS */}
      <section className="py-20 md:py-28 bg-[#001f3f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Kenapa <span className="text-[#D4AF37]">75% Resume</span> Gagal Di Peringkat Awal?
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
              Ini adalah masalah utama yang dihadapi oleh pencari kerja di Malaysia
            </p>
          </div>

          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {painPoints.map((point, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#D4AF37]/30 transition-all"
              >
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6">
                  <point.icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-white/70 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. APA ANDA AKAN KUASAI */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001f3f]">Apa Yang Anda Akan Dapat</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {contents.map((content, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:border-[#D4AF37]/20">
                <div className="w-16 h-16 bg-[#001f3f] rounded-2xl flex items-center justify-center mb-6"><content.icon className="w-8 h-8 text-[#D4AF37]" /></div>
                <h3 className="text-xl font-semibold text-[#001f3f] mb-3">{content.title}</h3>
                <p className="text-gray-600 leading-relaxed">{content.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PREVIEW SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
           <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-6">Intai Apa Ada Di Dalam.</h2>
              <p className="text-gray-600 mb-8 text-lg">Bukan sekadar teks, tapi panduan visual langkah-demi-langkah.</p>
              <div className="flex items-center gap-3 font-bold text-[#001f3f]"><Eye className="text-[#D4AF37]" /> Preview 15+ Template Sedia Guna</div>
           </motion.div>
           <div className="bg-gray-100 aspect-[4/3] rounded-3xl border-2 border-dashed border-[#001f3f]/10 flex items-center justify-center text-[#001f3f]/20 font-bold italic">
             [ Romeo, Insert Product Preview Image Here ]
           </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001f3f]">
              Pilih Pakej Yang Sesuai
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Pelaburan kecil untuk masa depan kerjaya yang lebih cerah
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-1 ${
                  tier.popular ? "bg-gradient-to-b from-[#D4AF37] to-[#D4AF37]/20" : "bg-gray-200"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 bg-[#D4AF37] text-[#001f3f] px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`h-full rounded-xl p-6 md:p-8 ${tier.popular ? "bg-[#001f3f]" : "bg-white"}`}>
                  <div className="text-center mb-6">
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 ${tier.popular ? "text-white" : "text-[#001f3f]"}`}>
                      {tier.name}
                    </h3>
                    <p className={`text-sm ${tier.popular ? "text-white/70" : "text-gray-500"}`}>
                      {tier.description}
                    </p>
                  </div>

                  <div className="text-center mb-8">
                    <span className={`text-5xl md:text-6xl font-bold ${tier.popular ? "text-[#D4AF37]" : "text-[#001f3f]"}`}>
                      {tier.price}
                    </span>
                    <span className={`text-sm ml-2 ${tier.popular ? "text-white/60" : "text-gray-500"}`}>
                      sekali bayar
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${tier.popular ? "bg-[#D4AF37]/20" : "bg-[#D4AF37]/10"}`}>
                          <Check className="w-3 h-3 text-[#D4AF37]" />
                        </div>
                        <span className={`text-sm ${tier.popular ? "text-white/90" : "text-gray-700"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button onClick={() => openCheckout(tier.name)} className={`w-full py-6 font-semibold rounded-xl ${tier.popular ? "bg-[#D4AF37] hover:bg-[#B8962E] text-[#001f3f]" : "bg-[#001f3f] text-white"}`}>
                    {tier.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-[#001f3f] rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center"><Shield className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" /></div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center"><Users className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" /></div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center"><Award className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" /></div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Input dari Pengamal HR Malaysia</h3>
                <p className="text-white/80 text-lg max-w-2xl">Kami memastikan modul ini relevan dengan kehendak industri masa kini. Dibina berdasarkan pengalaman dan feedback sebenar dari profesional HR di Malaysia.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. CHECKOUT FORM */}
      <AnimatePresence>
        {showCheckout && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setShowCheckout(false)} 
              className="absolute inset-0 bg-[#001f3f]/90 backdrop-blur-md" 
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.95, opacity: 0, y: 20 }} 
              className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl"
            >
              <button onClick={() => setShowCheckout(false)} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full"><X className="w-6 h-6 text-[#001f3f]" /></button>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D4AF37]/10 rounded-full mb-4"><Lock className="text-[#D4AF37] w-6 h-6" /></div>
                <h4 className="text-3xl font-bold text-[#001f3f]">Lengkapkan Pembelian</h4>
                <p className="text-gray-500 mt-2">Pakej: <span className="text-[#001f3f] font-bold">{selectedPackage}</span></p>
              </div>
              
              <form className="space-y-6" onSubmit={handleCheckout}>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Nama Penuh</label>
                  <input 
                    name="name" 
                    type="text" 
                    required 
                    className="w-full border-b-2 border-gray-100 py-3 focus:border-[#D4AF37] outline-none text-[#001f3f] font-medium text-lg bg-transparent" 
                    placeholder="Romeo..." 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Utama</label>
                  <input 
                    name="email" 
                    type="email" 
                    required 
                    className="w-full border-b-2 border-gray-100 py-3 focus:border-[#D4AF37] outline-none text-[#001f3f] font-medium text-lg bg-transparent" 
                    placeholder="romeo@email.com" 
                  />
                </div>
                <Button 
                  disabled={isSubmitting}
                  className="w-full py-8 bg-[#001f3f] text-white text-xl font-bold rounded-2xl shadow-xl mt-6 hover:bg-[#002d5c] disabled:opacity-50"
                >
                  {isSubmitting ? "Sila Tunggu..." : "Bayar Sekarang"}
                </Button>
                <p className="text-center text-[10px] text-gray-400 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-3 h-3 text-green-500" /> Transaksi selamat melalui Billplz
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 8. FOOTER */}
      <footer className="bg-[#001f3f] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-2xl font-bold text-white mb-8 block">CareerBoost<span className="text-[#D4AF37]">.my</span></span>
            <div className="flex justify-center gap-4 mb-8">
               <Facebook className="text-white hover:text-[#D4AF37] cursor-pointer" />
               <Instagram className="text-white hover:text-[#D4AF37] cursor-pointer" />
               <Mail className="text-white hover:text-[#D4AF37] cursor-pointer" />
            </div>
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} CareerBoost.my. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}