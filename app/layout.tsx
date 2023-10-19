import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import MainNav from './components/organisms/MainNav'
import Footer from './components/organisms/footer-logout'
import UdemyBusiness from './components/organisms/udemy-business';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav/>
        {children}
       {/* <UdemyBusiness/> */}
       <Footer/>
      </body>
    </html>
  )
}
