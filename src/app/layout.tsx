import { Inter, Orbitron, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900']
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata = {
  title: 'TinDev Studios - Practical Software Solutions',
  description: 'We build practical, innovative software products designed to make life easier and more productive.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}