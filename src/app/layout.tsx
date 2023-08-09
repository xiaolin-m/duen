import './globals.css'
import type { Metadata } from 'next'
import { Raleway, Abel } from 'next/font/google'
import NavBar from './components/navbar'
import Footer from './components/footer'

export const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})

export const abel = Abel({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-abel',
})

export const metadata: Metadata = {
  title: 'duen',
  description: 'davis undergraduate engineering network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${abel.variable} ${raleway.variable}`}>
        <div className="flex justify-center">
          <NavBar></NavBar>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}