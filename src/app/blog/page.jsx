import CustomFooter from '@/components/CustomFooter'
import NavBar from '@/components/NavBar'
import React from 'react'
import { Marcellus, DM_Sans, Inter_Tight } from '@next/font/google'
import Image from 'next/image'


const marcellus = Marcellus({
    weight: '400',
    subsets: ['latin'],
})
const dm_sans = DM_Sans({
    subsets: ['latin'],
})
const inter = Inter_Tight({
    subsets: ['latin'],
})

const page = () => {
  return (
    <div className='flex flex-col min-h-screen justify-between bg-gradient-to-b from-white to-[#FEEFe8]'>
      <NavBar />
      <div className='flex flex-col justify-start items-center p-10'>
        <h1 className={`${marcellus.className} text-4xl md:text-6xl lg:text-6xl text-[#171717]`}>OUR <span className='text-orange-500'>BLOG</span></h1>
        </div>
      <CustomFooter />
    </div>
  )
}

export default page
