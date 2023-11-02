import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KiraAnimeList',
  description: 'Website Anime versi Kiratoka',
}

export default function LoginLayout({ children }) {
  return (
    <html className='md:bg-black bg-gray-900 text-gray-300' lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      <footer>
        <Footer />
      </footer>
      </body>
    </html>
  )
}
