"use client";

import React, { useEffect, useState } from 'react'
import Topbar from '../../components/Topbar'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../../../firebase';

const Detail = () => {
  const searchParams = useSearchParams()
  const bid = searchParams.get('id');
  const btitle = searchParams.get('title');
  const bimage = searchParams.get('image');
  const bcreatedAt = searchParams.get('createdAt');
  const [content, setContent] = useState<{text: string}[]>([]);
  
  useEffect(() => {
    const fetchBlogs = async () => {
      if (bid) {
        const blogsCollectionRef = doc(db, "blogs", bid);
        const contentRef = collection(blogsCollectionRef, "content")
        const qContent = query(contentRef, orderBy("createdAt"));
        const unsubscribe = onSnapshot(qContent, (snapshot) => {
          const content = snapshot.docs.map((doc) => ({
            text: doc.data().text,
          }));
          setContent(content);
          console.log(content);
        });
        return () => {
          unsubscribe();
        };
      }
    };
    
    fetchBlogs();
  }, []);
  
  return (
    <div className='bg-image bg-repeat bg-cover'>
      <Topbar />
      <div className='flex justify-center'>
        <div className='flex items-center mt-5 bg-orange-500 rounded-xl' style={{width: "700px"}}>
          <div className='w-2/5'>
            <h1 className='text-3xl text-center font-bold font-serif px-2'>{btitle}</h1>          
          </div>
          <div className='w-3/5'>
            <Image className='object-cover rounded-xl h-80' src={`/images/${bimage}`} width={450} height={300} alt='' />
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-cyan-50 mt-5 rounded-2xl' style={{width: "1000px"}}>
            <div className='flex justify-center'>
            <div className='flex my-5' style={{width: "800px"}}>
                <div className='flex justify-center'>
                    <div className='mx-5'>
                      {content.map((con) => (
                        <>
                          <div className='text-3xl text-slate-500 font-serif'>{con.text}</div>
                          <br />
                        </>
                      ))}
                        <div className='text-xl mt-3 text-orange-500'>{bcreatedAt}</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Detail