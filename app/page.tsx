"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"

const painPoints = [
  {
    icon: FileX,
    title: "Format Tidak Mesra ATS",
    description:
      "Resume anda mungkin hebat di mata manusia, tetapi sistem ATS (Applicant Tracking System) tidak dapat membacanya dengan betul.",
  },
  {
    icon: MessageSquareOff,
    title: "Tiada Impak & Data",
    description:
      "Ayat kerja nampak biasa dan generic. Tiada nombor, tiada pencapaian konkrit yang boleh memukau HR.",
  },
  {
    icon: UserX,
    title: "Gagal Menjawab Interview",
    description:
      "Walaupun dipanggil interview, ramai gagal kerana tidak tahu struktur jawapan yang HR ingin dengar.",
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
    title: "Modul Resume Mesra ATS",
    description:
      "Panduan lengkap format resume yang boleh dibaca oleh sistem ATS dan menarik perhatian HR.",
  },
  {
    icon: Bot,
    title: "Tulis Data Resume Guna AI",
    description:
      "Workbook interaktif untuk menghasilkan ayat pencapaian yang berimpak menggunakan AI.",
  },
  {
    icon: MessageCircle,
    title: "Formula Interview Profesional",
    description:
      "Teknik dan struktur jawapan interview yang digemari oleh recruiter Malaysia.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function CareerBoostLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-navy">
                CareerBoost<span className="text-gold">.my</span>
              </span>
            </a>

            <div className="hidden md:block">
              <Button
                asChild
                className="bg-gold hover:bg-gold-hover text-navy font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <a href="#pricing">Beli Sekarang</a>
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-navy"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden pb-4"
            >
              <Button
                asChild
                className="w-full bg-gold hover:bg-gold-hover text-navy font-semibold py-3 rounded-lg"
              >
                <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>
                  Beli Sekarang
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23001f3f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-full text-navy text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Panduan Lengkap Kerjaya</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight text-balance">
                Bina Resume Yang Melepasi Tapisan Robot{" "}
                <span className="text-gold">&</span> Memikat Hati HR.
              </h1>

              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
                Gunakan panduan praktikal yang dibina berdasarkan kriteria sebenar recruiter
                di Malaysia. Ringkas, padat, dan terbukti berkesan.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-hover text-navy font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <a href="#pricing">
                    Lihat Pakej Career Boost
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start"
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FileCheck className="w-5 h-5 text-gold" />
                  <span className="text-sm">Template Siap Guna</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Award className="w-5 h-5 text-gold" />
                  <span className="text-sm">Terbukti Berkesan</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md">
                <motion.div
                  initial={{ rotate: -6, scale: 0.95 }}
                  animate={{ rotate: -6, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute inset-0 bg-navy/10 rounded-2xl transform -rotate-6 translate-x-4 translate-y-4"
                />

                <motion.div
                  initial={{ rotate: -3, scale: 0.97 }}
                  animate={{ rotate: -3, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute inset-0 bg-navy/20 rounded-2xl transform -rotate-3 translate-x-2 translate-y-2"
                />

                <motion.div
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-navy rounded-2xl shadow-2xl overflow-hidden"
                >
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
                        <FileCheck className="w-6 h-6 text-navy" />
                      </div>
                      <div>
                        <p className="text-gold font-semibold text-sm">E-Book</p>
                        <p className="text-white/70 text-xs">PDF Format</p>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      Career Boost Bundle
                    </h3>

                    <p className="text-white/80 text-sm mb-6">
                      Panduan lengkap resume ATS + Interview
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-white/90">
                        <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-gold" />
                        </div>
                        <span className="text-sm">Modul Resume Mesra ATS</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/90">
                        <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-gold" />
                        </div>
                        <span className="text-sm">Workbook AI Resume</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/90">
                        <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-gold" />
                        </div>
                        <span className="text-sm">Formula Interview</span>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">Harga Pakej</span>
                        <span className="text-gold text-2xl font-bold">RM33</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
              Kenapa <span className="text-gold">75% Resume</span> Gagal Di Peringkat Awal?
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
              Ini adalah masalah utama yang dihadapi oleh pencari kerja di Malaysia
            </p>
          </motion.div>

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
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <point.icon className="w-7 h-7 text-gold" />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {point.title}
                </h3>

                <p className="text-white/70 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Preview Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy text-balance">
              Apa Yang Anda Akan Dapat
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Tiga komponen utama untuk transformasi kerjaya anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {contents.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border hover:border-gold/20"
              >
                <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <content.icon className="w-8 h-8 text-gold" />
                </div>

                <h3 className="text-xl font-semibold text-navy mb-3">{content.title}</h3>

                <p className="text-muted-foreground leading-relaxed">{content.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy text-balance">
              Pilih Pakej Yang Sesuai
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
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
                  tier.popular
                    ? "bg-gradient-to-b from-gold via-gold/50 to-gold/20"
                    : "bg-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 bg-gold text-navy px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`h-full rounded-xl p-6 md:p-8 ${
                    tier.popular ? "bg-navy" : "bg-card"
                  }`}
                >
                  <div className="text-center mb-6">
                    <h3
                      className={`text-xl md:text-2xl font-bold mb-2 ${
                        tier.popular ? "text-white" : "text-navy"
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={`text-sm ${
                        tier.popular ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      {tier.description}
                    </p>
                  </div>

                  <div className="text-center mb-8">
                    <span
                      className={`text-5xl md:text-6xl font-bold ${
                        tier.popular ? "text-gold" : "text-navy"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`text-sm ml-2 ${
                        tier.popular ? "text-white/60" : "text-muted-foreground"
                      }`}
                    >
                      sekali bayar
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            tier.popular ? "bg-gold/20" : "bg-gold/10"
                          }`}
                        >
                          <Check className="w-3 h-3 text-gold" />
                        </div>
                        <span
                          className={`text-sm ${
                            tier.popular ? "text-white/90" : "text-foreground"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-6 text-base font-semibold rounded-xl transition-all duration-300 ${
                      tier.popular
                        ? "bg-gold hover:bg-gold-hover text-navy shadow-lg hover:shadow-xl"
                        : "bg-navy hover:bg-navy/90 text-white"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-navy rounded-3xl p-8 md:p-12 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gold/10 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 md:w-10 md:h-10 text-gold" />
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gold/10 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-gold" />
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gold/10 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 md:w-10 md:h-10 text-gold" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Input dari Pengamal HR Malaysia
                </h3>
                <p className="text-white/80 text-lg max-w-2xl">
                  Kami memastikan modul ini relevan dengan kehendak industri masa kini. Dibina
                  berdasarkan pengalaman dan feedback sebenar dari profesional HR di Malaysia.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <a href="#" className="mb-6">
              <span className="text-2xl font-bold text-white">
                CareerBoost<span className="text-gold">.my</span>
              </span>
            </a>

            <div className="flex items-center gap-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-gold transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-gold transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white group-hover:text-gold transition-colors" />
              </a>
            </div>

            <p className="text-white/60 text-sm mb-6 max-w-md">
              Digital download link will be sent to your email immediately after payment.
            </p>

            <div className="w-full max-w-xs h-px bg-white/10 mb-6" />

            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} CareerBoost.my. All rights reserved. (MA0284447-K)
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}
