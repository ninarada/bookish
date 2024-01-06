import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'
import NavBar from './_components/navigation/navbar'
import { Playfair_Display } from 'next/font/google'
import Footer from './_components/footer/footer'

const lora = Lora({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bookish',
  description: 'Book Tracker',
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
        {children}
        </body>
    </html>
  )
}
