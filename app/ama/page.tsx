"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Send, 
  ArrowLeft, 
  UserX,
  Sparkles,
  MessageSquareText,
  Clock,
  Zap,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast, Toaster } from "sonner"
import Link from "next/link"

// --- DUMMY DATA ---
const answeredQuestions = [
  {
    id: 1,
    question: "Bang, kalau resume saya ada gap setahun sebab jaga mak sakit, HR pandang rendah tak?",
    answer: "HR tak pandang rendah kalau kau jujur. Tulis 'Career Break - Caregiving'. Yang penting tunjuk kau tak 'stagnant' masa tu.",
    date: "2 jam lepas"
  },
  {
    id: 2,
    question: "Expectation gaji 3k untuk fresh grad kat KL ni melampau ke?",
    answer: "Tak melampau kalau portfolio kau solid. 3k tu standard baru untuk survive kat KL sekarang.",
    date: "5 jam lepas"
  },
  {
    id: 3,
    question: "Perlu ke letak gambar dalam resume tahun 2026 ni?",
    answer: "Tak perlu. Kebanyakan ATS lebih suka resume tanpa gambar untuk elak bias. Fokus pada content.",
    date: "1 hari lepas"
  },
  {
    id: 4,
    question: "Macam mana nak jawab 'Why should we hire you' tanpa nampak desperate?",
    answer: "Fokus pada problem dorang, bukan keperluan kau. Cerita macam mana skill kau boleh selesaikan pain points syarikat tu.",
    date: "2 hari lepas"
  }
]

export default function AMAPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [question, setQuestion] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return
    setIsSubmitting(true)
    
    // Simulating submission
    setTimeout(() => {
      toast.success("Soalan anon kau dah dihantar!", {
        style: { background: '#D4AF37', color: '#001f3f', fontWeight: '900' }
      })
      setQuestion("")
      setIsSubmitting(false)
    }, 1200)
  }

  return (
    <main className="min-h-screen bg-[#001f3f] font-sans text-white selection:bg-[#D4AF37]/30 pb-20">
      <Toaster position="top-center" richColors />

      {/* --- STICKY TOP TRIGGER BAR (Same as Landing) --- */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#D4AF37] py-2 px-4 shadow-md overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#001f3f] animate-pulse flex-shrink-0" />
          <p className="text-[9px] sm:text-xs font-black text-[#001f3f] uppercase tracking-tight sm:tracking-widest">
            OFFER BETA: RM33 UNTUK 20 SLOT SAHAJA (TINGGAL 7 SLOT LAGI!)
          </p>
          <Link href="/#pricing" className="text-[8px] sm:text-[10px] font-black text-white bg-[#001f3f] px-2 sm:px-4 py-1 rounded-full hover:scale-105 transition-all">
            GRAB NOW
          </Link>
        </div>
      </div>

      {/* --- NAVIGATION (Same as Landing) --- */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "top-0 bg-[#001f3f]/90 backdrop-blur-md shadow-md py-3 border-b border-white/5" 
            : "top-[36px] bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between font-bold">
          <Link href="/" className="text-xl sm:text-2xl text-white tracking-tight">
            CareerBoost<span className="text-[#D4AF37]">.my</span>
          </Link>
          
          <Button asChild className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#001f3f] px-4 sm:px-6 rounded-full text-xs sm:text-sm shadow-lg font-black">
             <Link href="/#pricing">Dapatkan Sekarang</Link>
          </Button>
        </div>
      </header>

      {/* --- HERO & INPUT FORM --- */}
      <section className="relative pt-48 pb-16 px-4">
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 text-white/60 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-white/10"
          >
            <Zap className="w-3 h-3 text-[#D4AF37] fill-current" />
            <span>Anonymous Career Engine</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">
            Ask Me <span className="text-[#D4AF37]">Anything.</span>
          </h1>
          <p className="text-white/40 font-bold mb-10 max-w-lg mx-auto">
            Tak perlu segan. Tanya soalan career kau secara anon, aku akan jawab dalam bentuk tiles untuk semua orang belajar.
          </p>

          <form onSubmit={handleSubmit} className="relative group max-w-xl mx-auto">
            <div className="relative bg-white/5 rounded-[2.5rem] p-4 border-2 border-white/10 focus-within:border-[#D4AF37] transition-all shadow-2xl backdrop-blur-sm">
              <textarea 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Tanya soalan rahsia kau kat sini..."
                className="w-full h-24 p-4 bg-transparent outline-none resize-none font-bold text-white placeholder:text-white/10"
                maxLength={280}
              />
              <div className="flex justify-end p-2 border-t border-white/5 pt-4">
                <Button 
                  disabled={isSubmitting || !question.trim()}
                  className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#001f3f] font-black px-10 py-7 rounded-2xl shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2"
                >
                  {isSubmitting ? "HANTAR..." : "HANTAR ANON"} <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* --- TILES GRID SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 mt-10 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <MessageSquareText className="w-6 h-6 text-[#D4AF37]" />
          <h2 className="text-2xl font-black uppercase tracking-tighter">Jawapan Terkini</h2>
          <div className="h-[1px] flex-grow bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {answeredQuestions.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col justify-between hover:translate-y-[-8px] transition-all duration-300"
            >
              {/* Numbering */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#D4AF37] text-[#001f3f] rounded-2xl flex items-center justify-center font-black text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                #{String(item.id).padStart(2, '0')}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <UserX className="w-4 h-4 text-slate-300" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Anonymous ask:</span>
                </div>
                
                <h3 className="text-xl font-black text-[#001f3f] leading-tight mb-8 min-h-[60px]">
                  "{item.question}"
                </h3>

                <div className="bg-slate-50 rounded-2xl p-5 border-l-4 border-[#001f3f] relative overflow-hidden">
                  <Sparkles className="absolute -right-1 -top-1 w-10 h-10 text-slate-200 opacity-50" />
                  <p className="text-sm font-bold text-slate-600 leading-relaxed italic relative z-10">
                    {item.answer}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest italic">
                  {item.date}
                </span>
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="mt-32 text-center py-10 opacity-30 border-t border-white/5">
        <p className="text-[10px] font-black uppercase tracking-[0.4em]">CareerBoost.my • Anonymous Engine</p>
      </footer>
    </main>
  )
}