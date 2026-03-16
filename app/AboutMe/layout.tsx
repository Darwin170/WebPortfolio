import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Welcome to my app',
  icons: {
   icon: '/darwin.jpg', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>

        <div className="h-auto w-auto font-mono p-6">
          <div className="group relative float-right h-120 w-100 mr-40 transition-all duration-300 hover:scale-110 rounded-4xl overflow-hidden z-0">
                <img 
                  src="nologo.jpg" 
                  alt="profile"
                  className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0" 
                />
                
                <img 
                  src="profile.jpg" 
                  alt="profile-hover"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-3000 group-hover:opacity-100" 
                />
              </div>

          <div className="text-5xl font-bold ml-20 pt-35 w-146 border-b-2 ">
            <h1> Hi! I'm Darwin Umengan</h1>
          </div>
          <div className="text-3xl pl-20 flex font-bold">
            <h2> Web Developer | Karate Practitioner</h2>
          </div>
          <div className="text-gray-800 ml-20 mt-7 w-150 font-bold ">
            <p>I am a BSIT student at National University specializing in Mobile and Web Application Development, 
              with a strong interest in building practical, user-focused systems.</p>

            <div className="flex p-2  space-x-10 ml-4 justify-center">
              <Link href="CV_Darwin_Umengan.pdf" download="CV_Darwin_Umengan.pdf">
              <button className=" h-10 w-30 mr-25 bg-red-400 rounded-4xl mt-1 hover:bg-red-300 text-black transition-all duration-300 hover:scale-110">Download CV</button>
              </Link>
              <button className="h-10 w-30  bg-blue-500 rounded-4xl mt-1 hover:bg-blue-300 text-black transition-all duration-300 hover:scale-110">Learn More</button>
              
            </div>
              <div className="flex mt-15 gap-5 transition-all duration-300 hover:-translate-y-1 hover:scale-110 ">
                  <SocialIcon className="transition-all duration-300 hover:scale-110" url="https://www.facebook.com/darwin.umengan.7"/>
                  <SocialIcon className="transition-all duration-300 hover:scale-110" url="https://www.instagram.com/itsss.dar/"/>
                  <SocialIcon className="transition-all duration-300 hover:scale-110" url="https://github.com/Darwin170"/>
              </div>
          </div>
        </div>

    
        {children}
      </body>
    </html>
  );
}
