"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Download, Plus, Trash2, ArrowLeft, PlusCircle } from "lucide-react"
import Link from "next/link"

// --- TYPESCRIPT INTERFACES ---
interface WorkExperience {
  id: number;
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
}

interface Education {
  id: number;
  degree: string;
  school: string;
  location: string;
  period: string;
  details: string;
  achievements: string[];
}

export default function ResumeBuilder() {
  const [data, setData] = useState({
    fullName: "AHMAD SAFUAN",
    phone: "012-345 6789",
    email: "ahmadsafuan@emel.com",
    location: "Sabak Bernam, Selangor, Malaysia",
    summary: "Adaptive Marketing Professional with 4 years of experience specializing in high-conversion short-form content for TikTok, Instagram, Facebook, and YouTube. Proficient in Adobe Premiere Pro and CapCut, with a deep understanding of video pacing and storytelling designed to drive audience engagement. Beyond creative production, I possess a functional foundation in Digital Advertising (FB/IG Ads) and Landing Page optimization through managing independent projects. I offer a unique blend of creative execution and technical curiosity, with a proven ability to manage limited budgets to achieve marketing objectives. Currently seeking to leverage my expertise in Digital Marketing to deliver end-to-end campaign success, from creative ideation to performance tracking.",
    experience: [
      { 
        id: 1, 
        company: "ABC DE", 
        location: "Bandar Baru Bangi, Selangor", 
        role: "Creative Editor", 
        period: "Apr 2021 - Oct 2025", 
        bullets: [
          "Produced a minimum of 25 creative assets per month (social media graphics, posters, video ads) for each campaign, resulting in 75+ deliverables across a 3-month campaign.",
          "Edited short-form ads and promotional videos for fundraising and awareness campaigns, achieving average CTR 3–4%.",
          "Produced social media reels and storytelling content optimized for Facebook, Instagram and YouTube.",
          "Enhanced video output with motion graphics, text overlays, transitions and audio syncing.",
          "Applied A/B testing and CTR analysis to video workflows, improving engagement and conversion outcomes.",
          "Prepared campaign performance reports with actionable insights to improve ad creatives and audience targeting.",
          "Collaborated with cross-functional teams to align creative output with marketing funnels, customer journeys, and campaign strategies.",
          "In charge of website and graphic design responsibilities, ensuring consistent branding across digital assets."
        ] 
      }
    ] as WorkExperience[],
    education: [
      { 
        id: 1, 
        degree: "Bachelor Degree", 
        school: "University", 
        location: "Kajang, Selangor", 
        period: "Jul 2018 - Feb 2022", 
        details: "CGPA 3.61",
        achievements: [
          "Dean’s List Award, Semester 4–7",
          "2nd Place, Final Year Project Competition",
          "Active in student associations and clubs, holding multiple leadership positions"
        ]
      }
    ] as Education[],
    skills: [
      "CapCut, Adobe Premiere Pro, After Effects",
      "Video Editing & Motion Graphics",
      "Short-form Content (TikTok, IG Reels, FB, YouTube)",
      "Storytelling & Video Pacing",
      "Graphic Design Integration (Photoshop, Illustrator)",
      "A/B Testing & CTR Analysis",
      "Social Media Content Optimization",
      "Trend Awareness in Digital Content"
    ],
    references: { 
      name: "Your Supervisor", 
      title: "Supervisor", 
      dept: "Media and Marketing Department",
      company: "Company", 
      phone: "+6012-345-6789" 
    }
  })

  // --- HELPER FUNCTIONS ---
  const addExperience = () => {
    setData({
      ...data,
      experience: [...data.experience, { id: Date.now(), company: "", location: "", role: "", period: "", bullets: [""] }]
    })
  }

  const updateExp = (id: number, field: keyof WorkExperience, value: string) => {
    setData({
      ...data,
      experience: data.experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp)
    })
  }

  const addExpBullet = (expId: number) => {
    setData({
      ...data,
      experience: data.experience.map(exp => exp.id === expId ? { ...exp, bullets: [...exp.bullets, ""] } : exp)
    })
  }

  const updateExpBullet = (expId: number, bulletIndex: number, value: string) => {
    setData({
      ...data,
      experience: data.experience.map(exp => {
        if (exp.id === expId) {
          const newBullets = [...exp.bullets];
          newBullets[bulletIndex] = value;
          return { ...exp, bullets: newBullets };
        }
        return exp;
      })
    })
  }

  const handlePrint = () => window.print()

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-black">
      <nav className="bg-white border-b px-6 py-3 flex justify-between items-center sticky top-0 z-50 print:hidden">
        <div className="flex items-center gap-4">
          <Link href="/"><Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4 mr-2" /> Back</Button></Link>
          <h1 className="font-bold text-lg tracking-tight">CareerBoost <span className="text-blue-600 font-black">Builder</span></h1>
        </div>
        <Button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 shadow-md">
          <Download className="w-4 h-4 mr-2" /> GENERATE PDF
        </Button>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR EDITOR */}
        <aside className="w-[450px] bg-white border-r overflow-y-auto p-6 space-y-8 print:hidden">
          <section className="space-y-3">
            <h3 className="text-[11px] font-bold text-blue-600 uppercase tracking-widest border-b pb-1">Personal Info</h3>
            <Input value={data.fullName} onChange={e => setData({...data, fullName: e.target.value.toUpperCase()})} placeholder="Nama Penuh" />
            <div className="grid grid-cols-2 gap-2">
                <Input value={data.email} onChange={e => setData({...data, email: e.target.value})} placeholder="Email" />
                <Input value={data.phone} onChange={e => setData({...data, phone: e.target.value})} placeholder="Telefon" />
            </div>
            <Textarea value={data.summary} onChange={e => setData({...data, summary: e.target.value})} placeholder="Summary..." rows={6} className="text-sm" />
          </section>

          <section className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
                <h3 className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Work Experience</h3>
                <Button onClick={addExperience} variant="outline" size="sm" className="h-7 text-[10px]"><Plus className="w-3 h-3 mr-1"/> ADD JOB</Button>
            </div>
            {data.experience.map((exp) => (
              <div key={exp.id} className="p-4 border rounded-lg bg-slate-50 space-y-3 relative group">
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 h-6 w-6 text-red-500" onClick={() => setData({...data, experience: data.experience.filter(e => e.id !== exp.id)})}><Trash2 className="w-3 h-3"/></Button>
                <Input className="font-bold text-sm h-9" value={exp.company} onChange={e => updateExp(exp.id, 'company', e.target.value)} placeholder="Company" />
                <Input className="text-sm h-9" value={exp.role} onChange={e => updateExp(exp.id, 'role', e.target.value)} placeholder="Position" />
                <div className="grid grid-cols-2 gap-2">
                    <Input className="h-8 text-xs" value={exp.period} onChange={e => updateExp(exp.id, 'period', e.target.value)} placeholder="Period" />
                    <Input className="h-8 text-xs" value={exp.location} onChange={e => updateExp(exp.id, 'location', e.target.value)} placeholder="Location" />
                </div>
                <div className="space-y-2 pt-2 border-t">
                    {exp.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex gap-2">
                            <Input className="text-xs h-8" value={bullet} onChange={e => updateExpBullet(exp.id, bIdx, e.target.value)} placeholder="Bullet detail..." />
                        </div>
                    ))}
                    <Button onClick={() => addExpBullet(exp.id)} variant="ghost" size="sm" className="w-full h-7 text-[10px] border-dashed border-2"><PlusCircle className="w-3 h-3 mr-1"/> ADD BULLET</Button>
                </div>
              </div>
            ))}
          </section>
        </aside>

        {/* PREVIEW CANVAS */}
        <main className="flex-1 bg-slate-400 overflow-y-auto p-12 flex justify-center print:p-0 print:bg-white">
          <div id="resume-preview" className="resume-container bg-white w-[210mm] min-h-[297mm] p-[18mm] shadow-2xl print:shadow-none print:w-full">
            
            {/* Header [cite: 43-45] */}
            <div className="text-center mb-5">
              <h1 className="text-[22pt] font-bold tracking-tight mb-1">{data.fullName}</h1>
              <div className="contact-info text-gray-800">
                <span>{data.phone}</span> | <span className="text-blue-600 underline underline-offset-2 decoration-1">{data.email}</span>
              </div>
              <p className="contact-info text-gray-500 mt-0.5">{data.location}</p>
            </div>

            {/* Summary [cite: 46-49] */}
            <div className="mb-6 content-text text-justify">
              <p>{data.summary}</p>
            </div>

            {/* Work Experiences [cite: 50-60] */}
            <div className="mb-6 section-block">
              <h2 className="headline-text uppercase italic">Work Experiences</h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-5 experience-item break-inside-avoid">
                  <div className="flex justify-between font-bold content-text text-black">
                    <span>{exp.company} <span className="font-normal text-gray-500">- {exp.location}</span></span>
                    <span className="font-medium text-[9.5pt]">{exp.period}</span>
                  </div>
                  <p className="italic content-text mb-1 text-black">{exp.role}</p>
                  <ul className="list-disc ml-5 content-text space-y-1 text-black">
                    {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education [cite: 61-66] */}
            <div className="mb-6 section-block">
              <h2 className="headline-text uppercase italic">Education Level</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="break-inside-avoid content-text text-black">
                    <div className="flex justify-between font-bold">
                        <span>{edu.degree} <span className="font-normal text-gray-500">- {edu.location}</span></span>
                        <span className="font-medium text-[9.5pt]">{edu.period}</span>
                    </div>
                    <p className="italic mb-1">{edu.school}, CGPA {edu.details.split(' ').pop()}</p>
                    <ul className="list-disc ml-5 space-y-0.5">
                      {edu.achievements.map((ach, idx) => <li key={idx}>{ach}</li>)}
                    </ul>
                </div>
              ))}
            </div>

            {/* Skills [cite: 67-75] */}
            <div className="mb-6 section-block">
              <h2 className="headline-text uppercase italic">Skills, Achievements, & Other Experience</h2>
              <ul className="list-disc ml-5 content-text space-y-1 text-black">
                {data.skills.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>

            {/* References [cite: 76-77] */}
            <div className="section-block">
              <h2 className="headline-text uppercase italic">References</h2>
              <div className="content-text space-y-0.5 text-black">
                <p className="font-bold">{data.references.name}</p>
                <p>{data.references.title}</p>
                <p>{data.references.dept}</p>
                <p>{data.references.company}</p>
                <p>{data.references.phone}</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx global>{`
        .resume-container {
          font-family: Arial, Helvetica, sans-serif !important;
          line-height: 1.08 !important; /* Spacing 1.08 */
        }

        .content-text, .contact-info {
          font-size: 10pt !important;
          color: #000000;
        }

        .headline-text {
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 12pt !important;
          font-weight: bold !important;
          border-bottom: 1px solid #000;
          padding-bottom: 1px;
          margin-bottom: 8px;
        }

        .section-block, .experience-item {
          page-break-inside: avoid;
          break-inside: avoid;
        }

        @media print {
          @page { size: A4; margin: 0; }
          nav, aside { display: none !important; }
          main { padding: 0 !important; background: white !important; overflow: visible !important; }
          #resume-preview { 
            width: 210mm; 
            min-height: 297mm; 
            padding: 15mm; 
            margin: 0; 
            box-shadow: none;
            border: none;
          }
        }
      `}</style>
    </div>
  )
}