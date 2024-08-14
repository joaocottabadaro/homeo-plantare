import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import ActiveSectionContext from './context/activeSectionContext'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Homeoplantare',
  description: 'Sustentabilidade com Homeoplantare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>{

        <ActiveSectionContext>{children}</ActiveSectionContext>}</body>
    </html>
  )
}
