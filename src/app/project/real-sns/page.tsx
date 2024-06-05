"use client"

import React, { useEffect, useState } from 'react';
import Topbar from '../../components/Topbar';
import Image from 'next/image';
import realsnsPic from '../../images/realsns.png';
import signupPic from '../../images/signup.png';
import homePic from '../../images/home.png';
import followPic from '../../images/follow.png';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa6";
// import { useAppContext } from '@/context/AppContext';

const RealSns = () => {
    // const { selectedProject } = useAppContext();

  return (
    <div className='bg-image bg-repeat bg-cover'>
      <Topbar />
      <div className='flex justify-center'>
        <div className='flex items-center mt-5 bg-orange-500 rounded-xl' style={{width: "700px"}}>
          <div className='w-2/5'>
            <h1 className='text-4xl text-center font-bold'>Real SNS-App</h1>          
            <p className='mt-4 mx-4'>Real social networking app, similar to Facebook or X (Twitter).
                         This is my first project after studying React.</p>
          </div>
          <div className='w-3/5'>
            <Image className='object-cover rounded-xl' src={realsnsPic} alt='' />
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-cyan-50 mt-5 rounded-2xl' style={{width: "1000px"}}>
            <div className='m-auto' style={{width: "600px"}}>
                <div>
                <h1 className='text-4xl text-left font-bold mt-5 m-auto'>Real SNS-App</h1>
                    <div className='flex mt-3'>
                        <p className='text-left text-lg text-slate-500'>You can sign up and sign in, post and even like someone&apos;s posts.
                 In addition, you can search for users and follow them - just like on Facebook or X (Twitter).</p>
                    </div>
                    <div>
                        <span className='border-2 rounded py-1 px-2 border-orange-400 mr-3'>Node.js×Express</span>
                        <span className='border-2 rounded py-1 px-2 border-orange-400 mr-3'>React</span>
                        <span className='border-2 rounded py-1 px-2 border-orange-400 mr-3'>MongoDB</span>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-3xl font-bold mb-3'>Feature</h1>
                        <div className='text-left text-lg text-slate-500'>
                          <li className='mb-2'>It is possible to post pictures.</li>
                          <li className='mb-2'>You can see the posts of the users you followed on your timeline.</li>
                          <li className='mb-2'>No transition to the main screen if you are not logged in, by useContext, createContext.</li>
                        </div>
                    </div>
                    <div className='flex justify-center mb-5'>
                      <video className='object-cover border border-black' style={{width: "400px", height: "250px"}} controls autoPlay>
                        <source src='/videos/realsns.mov' />
                      </video>
                    </div>
                    <div className='flex justify-center mb-5'>
                      <Image className='object-cover border border-black' style={{width: "400px", height: "250px"}} src={signupPic} alt='' />
                    </div>
                    <div className='flex justify-center mb-5'>
                      <Image className='object-cover border border-black' style={{width: "400px", height: "250px"}} src={homePic} alt='' />
                    </div>
                    <div className='flex justify-center'>
                      <Image className='object-cover border border-black' style={{width: "400px", height: "250px"}} src={followPic} alt='' />
                    </div>
                    <div className='my-5'>
                      <h1 className='text-3xl font-bold mb-3'>Links</h1>
                      <Link className='flex items-center text-xl text-orange-500 no-underline' href={"https://github.com/soukikubokawa/real-sns-project"}>
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

export default RealSns