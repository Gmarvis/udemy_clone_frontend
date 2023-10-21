import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import MainNav from './components/MainNav'
import UdemyBusiness from './components/organisms/udemy-business';
import BecomeInstructor from './components/organisms/become-instructor';
import FeatureCategory from './components/organisms/feature-category';
import FooterLandingPage from './components/organisms/footer-landingpage';
import LogiNav from './components/organisms/login-navbar';

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
        {/* <LogiNav /> */}
        {/* <MainNav/> */}
        {children}
       {/* <FeatureCategory/>
       <UdemyBusiness/>
       <BecomeInstructor/>
       <FooterLandingPage/> */}
      
      </body>
    </html>
  )
}
