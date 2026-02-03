import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Navbar from "../components/Navbar";
import UsersPage from "./page";
import ImageDissolve from "./pictureDisolve";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Welcome to my app',
  icons: {
   icon: '/darwin.jpg', 
  },
};

 
export default function Projects({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <Navbar/>
      <div className="h-auto w-auto font-mono p-6">
        <div className="float-right mr-25 pr-10">
        <ImageDissolve/>
        </div>
        <div className="flex font-bold text-3xl text-black ml-15 pt-10 pb-10">
            <h1> Projects </h1>
        </div>
      
        <ul className="flex list-disc ml-8  w-200">
         <div className="font-bold text-2xl list-disc ml-10 w-80">
          <li> Vaccibite</li>
          <li> Web Portfolio</li>
          <li> Lutong Mang Kanor</li>
          
         </div>

        </ul>

      </div>
     </body>
    </html>
  );
}
