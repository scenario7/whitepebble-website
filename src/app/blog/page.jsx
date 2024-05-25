import CustomFooter from '@/components/CustomFooter'
import NavBar from '@/components/NavBar'
import React from 'react'
import { Marcellus, DM_Sans, Inter_Tight } from '@next/font/google'
import Image from 'next/image'
import BlogCard from '@/components/BlogCard'

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

const posts = [
    {
        title : 'Understanding digital trademarks',
        imageURL : 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date : '21st May, 2024',
        description : 'lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus',
        link : '/blog'
    },
    {
        title : 'Understanding digital trademarks',
        imageURL : 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date : '21st May, 2024',
        description : 'lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus',
        link : '/blog'
    },
    {
        title : 'Understanding digital trademarks',
        imageURL : 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date : '21st May, 2024',
        description : 'lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus',
        link : '/blog'
    },
    {
        title : 'Understanding digital trademarks',
        imageURL : 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date : '21st May, 2024',
        description : 'lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus',
        link : '/blog'
    },
    {
        title : 'Understanding digital trademarks',
        imageURL : 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date : '21st May, 2024',
        description : 'lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus',
        link : '/blog'
    },
    {
        title : 'Understanding digital trademarks',
        imageURL : 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date : '21st May, 2024',
        description : 'lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus',
        link : '/blog'
    },
    {
        title : 'Understanding digital trademarks',
        imageURL : 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date : '21st May, 2024',
        description : 'lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus',
        link : '/blog'
    }
]

const page = () => {
  return (
    <div className='flex flex-col min-h-screen justify-between bg-gradient-to-b from-white to-[#FEEFe8]'>
      <NavBar />
        <div className='flex flex-col justify-start items-center py-10'>
            <h1 className={`${marcellus.className} text-4xl md:text-6xl lg:text-6xl text-[#171717]`}>OUR <span className='text-orange-500'>BLOG</span></h1>
            <div className='flex flex-col py-20 items-center w-full px-4 md:px-10 lg:px-20'>
                <div className='flex flex-col md:flex-row gap-10 justify-center md:items-start lg:items-start items-center w-full px-14'>
                    <img className='md:w-1/4 h-72 w-72 lg:w-1/4 object-cover md:h-[300px] lg:h-[300px] outline outline-6 outline-black' src={posts[0].imageURL}/>
                    <div className={`${dm_sans.className} text-center md:text-left lg:text-left flex flex-col gap-5 md:items-start lg:items-start items-center justify-between`}>
                        <div className='flex flex-col items-center md:items-start lg:items-start gap-2 w-3/4'>
                            <div className='outline outline-1 outline-orange-500 bg-transparent text-orange-500 w-fit px-2 py-1 rounded-md'>LATEST</div>
                            <h1 className={`${dm_sans.className} text-[#171717] text-5xl font-semibold pt-5`}>{posts[0].title}</h1>
                            <h2 className='text-xl font-light text-[#808080]'>{posts[0].date}</h2>
                            <p className='text-xl font-light text-[#171717]'>{posts[0].description}</p>
                        </div>
                        <button className='bg-[#171717] text-orange-500 hover:bg-orange-500 hover:text-black transition-all ease-in-out py-2 px-3'>Read More <span className={`${inter.className}`}>-&gt;</span></button>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-20 w-full'>
                    {posts.map((post, index) => {
                        if (index > 0) {
                            return (
                                <BlogCard key={index} params={post} />
                            )
                        }
                    })}
                </div>
            </div>
        </div>
      <CustomFooter />
    </div>
  )
}

export default page
