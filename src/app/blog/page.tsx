"use client";

import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import { Timestamp, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../../firebase';
import Image from 'next/image'
import Link from 'next/link';

const Blog = () => {
  const [blogs, setBlogs] = useState<{id:string, title: string, image: string, createdAt: Timestamp}[]>([]);

  const xxx = () => {
    return import("../images/about-prof.jpeg");
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsCollectionRef = collection(db, "blogs");
      const q = query(blogsCollectionRef, orderBy("createdAt", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const blogs = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          image: doc.data().image,
          createdAt: doc.data().createdAt,
        }));
        setBlogs(blogs);
        console.log(blogs);
      });
      
      return () => {
        unsubscribe();
    };
    };

    fetchBlogs();
  }, []);

  return (
    <div className='bg-image bg-repeat bg-cover'>
      <Topbar />
      <div className='flex justify-center'>
        <div className='flex items-center mt-5 bg-orange-500 rounded-xl' style={{width: "700px"}}>
          <div className='w-2/5'>
            <h1 className='text-6xl text-center font-bold'>BLOG</h1>          
            <p className='mt-4 mx-4'>I&apos;m sharing what I am thinking and learning. Please check it out!</p>
          </div>
          <div className='w-3/5'>
            <Image className='object-cover rounded-xl h-72' src={"/images/blog.jpeg"} width={450} height={300} alt='' />
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-cyan-50 mt-5 rounded-2xl' style={{width: "1000px"}}>
          {blogs.map((blog) => (
            <>
              <div className='flex justify-center'>
                <div className='flex my-5' style={{width: "800px"}}>
                  <div className='w-1/2'>
                    <Image className='object-cover h-64 border-2' src={`/images/${blog.image}`} width={400} height={300} alt="" />
                  </div>
                  <div className='w-1/2 flex items-center'>
                    <div>
                    <Link href={{pathname: "/blog/detail", query: {id: blog.id, title: blog.title, image: blog.image, createdAt: blog.createdAt.toDate().toLocaleDateString()}}} className='no-underline'>
                      <div className='text-3xl ml-5 text-black hover:underline'>{blog.title}</div>
                    </Link>
                      <div className='text-xl mt-3 ml-5 text-orange-500'>{blog.createdAt.toDate().toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog