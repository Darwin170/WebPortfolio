import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Navbar from "../components/Navbar";
import UsersPage from "./page";
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


export default function Achivements({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
     <Navbar/>
     
        <div className="h-auto w-auto font-black font-mono pt-5">
            <img className="group relative float-right h-100 w-100 mr-40  transition-all duration-300 hover:scale-110 rounded-4xl" src="Achivements.gif" alt="profile"/>
           <div className="text-3xl text-black font-bold justify-start p-2 ml-6">
                <h1>Academic Achivements</h1>
           </div>
         
                <h1 className="text-2xl ml-15 "> Dean's Lister</h1>
                    <ul className="flex list-disc ml-8  w-200">
                        <div className="ml-19 w-80 border-b-2">
                        <li>1st Honor Dean's Lister 1st Term</li>   
                            <p>National University - BSIT-MWA</p>
                            <p>2022-2023</p>
                        <li>2nd Honor Dean's Lister 2nd Term</li>
                            <p>National University - BSIT-MWA</p>
                            <p>2022-2023</p>
                        <li>2nd Honor Dean's Lister 1st Term</li>
                            <p>National University - BSIT-MWA</p>
                            <p>2023-2024</p>
                        <li >1st Honor Dean's Lister 2nd Term</li>
                            <p>National University - BSIT-MWA</p>
                            <p>2023-2024</p>
                        </div>     
                        <div className="border-l-2 pl-10 border-b-2">
                         <li >1st Honor Dean's Lister 1st Term</li>
                            <p>National University - BSIT-MWA</p>
                            <p>2024-2025</p>
                        </div>
                    </ul>
                        

            </div>
       

     {children}
     </body>
    </html>
  );
}
