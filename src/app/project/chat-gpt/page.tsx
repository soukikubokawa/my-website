"use client"

import React, { useEffect, useState } from 'react';
import Topbar from '../../components/Topbar';
import Image from 'next/image';
import chatgptPic from '../../images/chatgpt.png';
import loginPic from '../../images/login.png';
import homePic from '../../images/home-chatgpt.png';
import chatroomPic from '../../images/chatroom.png';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa6";
// import { useAppContext } from '@/context/AppContext';

const ChatGpt = () => {
    // const { selectedProject } = useAppContext();

  return (
    <div className='bg-image bg-repeat bg-cover'>
      <Topbar />
      <div className='flex justify-center'>
        <div className='flex items-center mt-5 bg-orange-500 rounded-xl' style={{width: "700px"}}>
          <div className='w-2/5'>
            <h1 className='text-4xl text-center font-bold'>Chat GPT-App</h1>          
            <p className='mt-4 mx-4'>Chatbo with OPEN AI API that get replies to your questions.
              It doesn&apos;t work because I haven&apos;t paid for it.</p>
          </div>
          <div className='w-3/5'>
            <Image className='object-cover rounded-xl' src={chatgptPic} alt='' />
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-cyan-50 mt-5 rounded-2xl' style={{width: "1000px"}}>
            <div className='m-auto' style={{width: "600px"}}>
                <div>
                <h1 className='text-4xl text-left font-bold mt-5 m-auto'>Chat GPT-App</h1>
                    <div className='flex mt-3'>
                        <p className='text-left text-lg text-slate-500'>When you ask a question in a chat room, you receive a live reply via the OPEN AI (GPT-3.5 Turbo) API.
                  This app uses Firebase to manage logged-in users and the corresponding chat room for that user.</p>
                    </div>
                    <div>
                        <span className='border-2 rounded py-1 px-2 border-orange-400 mr-3'>Next.js</span>
                        <span className='border-2 rounded py-1 px-2 border-orange-400 mr-3'>React</span>
                        <span className='border-2 rounded py-1 px-2 border-orange-400 mr-3'>TypeScript</span>
                        <span className='border-2 rounded py-1 px-2 border-orange-400 mr-3'>Firebase</span>
                        <span className='border-2 rounded py-1 px-2 border-orange-400 mr-3'>Tailwind CSS</span>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-3xl font-bold mb-3'>Feature</h1>
                        <div className='text-left text-lg text-slate-500'>
                          <li className='mb-2'>No transition to the main screen if you are not logged in, by useContext, createContext.</li>
                          <li className='mb-2'>Automatic scrolling when adding messages by using useRef.</li>
                        </div>
                    </div>
                    <div className='flex justify-center mb-5'>
                      <Image className='object-cover border border-black' style={{width: "400px", height: "250px"}} src={loginPic} alt='' />
                    </div>
                    <div className='flex justify-center mb-5'>
                      <Image className='object-cover border border-black' style={{width: "400px", height: "250px"}} src={homePic} alt='' />
                    </div>
                    <div className='flex justify-center mb-5'>
                      <Image className='object-cover border border-black' style={{width: "400px", height: "250px"}} src={chatroomPic} alt='' />
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

export default ChatGpt