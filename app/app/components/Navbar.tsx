'use client';
import Link from 'next/link'

import React from 'react'
import Home from '../AboutMe/page'

const Navbar = () => {
  return (
    <>
    <ul className='flex  h-16 p-5 justify-end grid-cols-3 text-center  mb-7 font-serif text-black'>
        <div className='flex w-70 mr-6  justify-between '>
       <li className=' w-13 h-7 rounded-b-xl hover:bg-gray-500 transition-all duration-300 hover:scale-110'> <Link href="/AboutMe">About</Link></li> 
       <li className='w-25 h-7 rounded-b-xl hover:bg-gray-500 transition-all duration-300 hover:scale-110'> <Link href="/Achivements">Achivements</Link></li> 
       <li className='w-16 h-7 rounded-b-xl hover:bg-gray-500 transition-all duration-300 hover:scale-110'> <Link href="/Projects">Projects</Link></li> 
       <li className='w-11 h-7 rounded-b-xl hover:bg-gray-500 transition-all duration-300 hover:scale-110'> <Link href="/Skill">Skill</Link></li> 
        </div>
    </ul>
    </>
  )
}

export default Navbar