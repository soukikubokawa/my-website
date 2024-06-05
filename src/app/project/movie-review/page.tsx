"use client"

import React, { useEffect, useState } from 'react';
import Topbar from '../../components/Topbar';
import Image from 'next/image';
import aboutPic from '../../images/gray.webp';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa6";
// import { useAppContext } from '@/context/AppContext';

const MovieReview = () => {
    // const { selectedProject } = useAppContext();

  return (
    <div className=''>
      <Topbar />
      <div className='flex justify-center'>
        <div className='flex items-center mt-5 bg-orange-500 rounded-xl' style={{width: "700px"}}>
          <div className='w-2/5'>
            <h1 className='text-4xl text-center font-bold'>Movie Review-App</h1>          
            <p className='mt-4 mx-4'>xxxxxxxxxx</p>
          </div>
          <div className='w-3/5'>
            <Image className='object-cover rounded-xl h-80' src={aboutPic} alt='' />
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-cyan-50 mt-5 rounded-2xl' style={{width: "1000px"}}>
            <div className='m-auto' style={{width: "700px"}}>
                <div>
                <h1 className='text-4xl text-left font-bold mt-5 m-auto'>Movie Review-App</h1>
                    <div className='flex mt-3'>
                        <p className='text-left'>A virtual therapy chatbot that allows you to express and organize your feelings through chatting, 
                        built using Next.js, TypeScript, Tailwindcss, Supabase, and OpenAI API.</p>
                    </div>
                    <div>
                        <span className='border-2 rounded py-1 px-2 border-orange-400 mr-3'>Node.js</span>
                        <span className='border-2 rounded py-1 px-2 border-orange-400 mr-3'>React.js</span>
                        <span className='border-2 rounded py-1 px-2 border-orange-400 mr-3'>MongoDB</span>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-3xl font-bold mb-3'>Feature</h1>
                        <li className='mb-2 text-left'>A virtual therapy chatbot that allows you to express and organize your feelings through chatting, 
                        built using Next.js, TypeScript, Tailwindcss, Supabase, and OpenAI API.</li>
                        <li className='mb-2 text-left'>A virtual therapy chatbot that allows you to express and organize your feelings through chatting, 
                        built using Next.js, TypeScript, Tailwindcss, Supabase, and OpenAI API.</li>
                    </div>
                    <div className='flex justify-center mb-5'>
                      <Image className='object-cover' style={{width: "400px", height: "230px"}} src={aboutPic} alt='' />
                    </div>
                    <div className='flex justify-center'>
                      <Image className='object-cover' style={{width: "400px", height: "230px"}} src={aboutPic} alt='' />
                    </div>
                    <div className='my-5'>
                      <h1 className='text-3xl font-bold mb-3'>Links</h1>
                      <Link className='flex items-center text-xl text-orange-500 no-underline' href={""}>
                        <FaGithub />
                        <span className='ml-1'>GitHub</span>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MovieReview