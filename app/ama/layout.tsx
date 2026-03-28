import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ask Me Anything - Career Engine | CareerBoost.my',
  description: 'Tanya soalan career kau secara anonymous. Aku jawab terus dalam bentuk tiles untuk semua orang belajar.',
  openGraph: {
    title: 'Ask Me Anything - Career Engine',
    description: 'Tanya soalan rahsia kau kat sini tanpa segan. 100% anonymous.',
    images: ['/og-ama.png'],
  },
}

export default function AMALayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}