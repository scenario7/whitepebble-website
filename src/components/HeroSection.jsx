import React from 'react'
import { Marcellus, DM_Sans, Inter_Tight } from 'next/font/google'
import Image from 'next/image'


const marcellus = Marcellus({
    weight: '400',
    subsets: ['latin'],
  })
  const dm_sans = DM_Sans({
    weight: '400',
    subsets: ['latin'],
  })
  const inter = Inter_Tight({
    weight: '400',
    subsets: ['latin'],
  })

const HeroSection = () => {
  return (
    <div className={`${marcellus.className} pt-20 flex items-start justify-between gap-64 pl-10 bg-gradient-to-b from-[#ffffff] to-[#ffefe8]`}>
        <div className='flex flex-col gap-20'>
            <div>
            <h1 className='text-[#171717] text-8xl'>Legal protection for your business stars <span className='text-orange-500'>here</span>.</h1>
            <p className={`${dm_sans.className} text-[#808080] text-xl`}>At White Pebble Law LLP, we distinguish ourselves through our comprehensive expertise in both Corporate and Testamentary law, seamlessly integrating Intellectual Property management with Wills and Probate services to offer a unique, full-service legal solution. </p>
            </div>
            <div className='flex gap-10'>
            <button class="text-lg text-white hover:before:bg-redborder-orange-500 relative h-[50px] w-40 overflow-hidden border border-orange-500 bg-orange-500 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-orange-500 hover:shadow-[#FFEFE8] hover:before:left-0 hover:before:w-full"><span class="relative z-10">Contact Us</span></button>
            <button class="text-lg text-orange-500 hover:before:bg-redborder-orange-500 relative h-[50px] w-40 overflow-hidden border border-orange-500 bg-white text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-[#FFEFE8] hover:before:left-0 hover:before:w-full"><span class="relative z-10">Learn More</span></button>
             </div>         
        </div>
        <div className={`${inter.className} flex flex-col items-end`}>
        <button style={{'top':'-50%'}} class="px-2 mr-2 group relative min-h-[50px] w-40 overflow-hidden border border-orange-500 bg-black text-orange-500 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-orange-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-orange-500 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
        <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-orange-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-orange-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
        <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">Explore Services <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4 ml-2"> <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /> </svg> </span>
        </button>   
            <img src='https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-[80%] w-[80%] object-contain rounded-tl-2xl'/>
        </div>
    </div>
  )
}

export default HeroSection