"use client"

import React, { useEffect, useState } from 'react';
import Topbar from '../components/Topbar';
import Image from 'next/image';
import homePic from '../images/home-prof.jpeg';
import realsnsPic from '../images/realsns.png';
import chatgptPic from '../images/chatgpt.png';
import { FaGithub, FaRegFilePdf } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DocumentData, collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../../firebase';
// import { useAppContext } from '@/context/AppContext';

const Home = () => {
  const router = useRouter();
  // const { setSelectedProject } = useAppContext();
  const [projects, setProjects] = useState<{id: string, project: DocumentData}[]>([]);

  const changePage = (pid: string) => {
    // setSelectedProject(pid);
    router.push("/project");
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollectionRef = collection(db, "projects");
      const q = query(projectsCollectionRef, orderBy("name"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const projects = snapshot.docs.map((doc) => ({
          id: doc.id,
          project: doc.data(),
        }));
        setProjects(projects);
        console.log(projects);
      });
      
      return () => {
        unsubscribe();
    };
    };

    fetchProjects();
  }, []);

  return (
    <div className='bg-image bg-repeat bg-cover'>
      <Topbar />
      <div className='flex justify-center mt-5 pt-3 bg-hero'>
        <div className='flex items-center rounded-xl' style={{width: "800px"}}>
          <div className='w-2/3'>
            <h1 className='text-4xl'><span className='text-slate-500'>Hi! I am </span>Souki Kubokawa,</h1>
            <h1 className='text-4xl text-orange-500'>a Frontend developer,</h1>
            <h3 className='text-2xl text-orange-300'>also handle Backend :) </h3>
            <p className='mt-4 pr-5'>Skilled in JavaScript, React, HTML5, CSS3, Java, and Python.</p>
            <p className='pr-5'>I am a developer who is passionate and eager about building in JavaScript (including React), Java, and Python. Ping me if you are interested!</p>

            <div className='flex'>
              <div className='mr-3'>
                <Link href={"https://github.com/soukikubokawa"}>
                  <FaGithub className='size-7 text-slate-500 hover:text-black duration-150' />
                </Link>
              </div>
              <div className='mx-3'>
                <Link href={"https://www.linkedin.com/in/soukikubokawa/"}>
                  <FaLinkedin className='size-7 text-slate-500 hover:text-blue-500 duration-150' />
                </Link>
              </div>
              {/* <div className='mx-3'>
                <Link href={''}>
                  <FaRegFilePdf className='size-7 text-slate-500 hover:text-red-500 duration-150' />
                </Link>
              </div> */}
            </div>
            
          </div>
          <div className='w-1/2 flex'>
            <div>
              <Image className='object-contain rounded-xl' src={homePic} alt='' />
            </div>
            <div className='fuwafuwa flex absolute items-center ml-52' style={{width: "230px"}}>
              <div className='flex text-xl font-bold text-center py-1 px-2 bg-orange-500 border-2 border-orange-500 rounded-full'>Looking for a job! Here is my resume.</div>
              <span className=""></span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-cyan-50 mt-5 rounded-2xl' style={{width: "1000px"}}>
          <h1 className='text-4xl text-center mt-5'>My Projects</h1>
          {/* {projects.map((project) => (
            <>
              <div className='flex justify-center'>
                <div className='flex my-5' style={{width: "800px"}}>
                  <div className='w-1/2'>
                    <Image className='object-contain' src={portfolioPic} alt='' />
                  </div>
                  <div className='w-1/2 mt-3'>
                    <h1 className='text-3xl text-center'>{project.project.name}</h1>
                    <h2 className='text-xl text-center'>{project.project.language}</h2>
                    <p className='mt-3 mx-5 text-left'>{project.project.text}</p>
                    <button onClick={() => changePage(project.id)} className='mx-5 py-3 px-5 rounded-lg border-orange-500 border-3 text-orange-500 hover:bg-orange-500 hover:text-white duration:150'>Find Out More</button>
                  </div>
                </div>
              </div>
            </>
          ))} */}

          <div className='flex justify-center'>
            <div className='flex my-5' style={{width: "800px"}}>
              <div className='w-1/2'>
                <Image className='object-contain border border-black' src={realsnsPic} alt='' />
              </div>
              <div className='w-1/2 mt-3'>
                <h1 className='text-3xl mx-5'>Real SNS-App</h1>
                <h2 className='text-base mx-5'>Node.js×Express/ React/ MongoDB</h2>
                <p className='mt-3 mx-5 text-left text-slate-500'>You can sign up and sign in, post and even like someone&apos;s posts.
                  In addition, you can search for users and follow them - just like on Facebook or X (Twitter).</p>
                <Link href={"/project/real-sns"}>
                  <button className='mx-5 py-3 px-5 rounded-lg border-orange-500 border-3 text-orange-500 hover:bg-orange-500 hover:text-white duration:150'>Find Out More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='flex my-5' style={{width: "800px"}}>
              <div className='w-1/2'>
                <Image className='object-contain border border-black' src={chatgptPic} alt='' />
              </div>
              <div className='w-1/2 mt-3'>
                <h1 className='text-3xl mx-5'>Chat GPT-App</h1>
                <h2 className='text-base mx-5'>Next.js/ React/ TypeScript/ Firebase/ Tailwind CSS</h2>
                <p className='mt-3 mx-5 text-left text-slate-500'>When you ask a question in a chat room, you receive a live reply via the OPEN AI (GPT-3.5 Turbo) API.
                  This app uses Firebase to manage logged-in users and the corresponding chat room for that user.</p>
                <Link href={"/project/chat-gpt"}>
                  <button className='mx-5 py-3 px-5 rounded-lg border-orange-500 border-3 text-orange-500 hover:bg-orange-500 hover:text-white duration:150'>Find Out More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='flex my-5' style={{width: "800px"}}>
              <div className='w-1/2'>
                <Image className='object-contain border border-black bg-gray-500 h-52' src={""} alt='' />
              </div>
              <div className='w-1/2 mt-3'>
                <h1 className='text-3xl mx-5'>Coming soon</h1>
                <h2 className='text-base mx-5'></h2>
                <p className='mt-3 mx-5 text-left text-slate-500'>I am in the middle of developing an app.</p>
                {/* <Link href={"/project/chat-gpt"}>
                  <button disabled className='mx-5 py-3 px-5 rounded-lg border-orange-500 border-3 text-orange-500 hover:bg-orange-500 hover:text-white duration:150'>Find Out More</button>
                </Link> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home