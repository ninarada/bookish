import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'
import NavBar from './_components/navigation/navbar'

const lora = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Glamify',
  description: 'Makeup Store',
}

const pages: Record<string, `/${string}`> = {
  home: "/",
  browse: "/browse",
  blogs: "/blogs",
  profile: "/profile",
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <NavBar pages={pages}/>
        {children}</body>
    </html>
  )
}
