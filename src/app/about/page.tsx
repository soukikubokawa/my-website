import React from 'react'
import Topbar from '../components/Topbar'
import Image from 'next/image'
import aboutPic from '../images/about-prof.jpeg'
import yakushimaPic from '../images/yakushima.jpg'
import halfmarathonPic from '../images/halfmarathon.jpeg'

const About = () => {
  return (
    <div className='bg-image bg-repeat bg-cover'>
      <Topbar />
      <div className='flex justify-center'>
        <div className='flex items-center mt-5 bg-orange-500 rounded-xl' style={{width: "700px"}}>
          <div className='w-2/5'>
            <h1 className='text-6xl text-center font-bold'>ABOUT</h1>          
            <p className='mt-4 mx-4'>I am going to share about myself. It would be great if you are interested in my personality!</p>
          </div>
          <div className='w-3/5'>
            <Image className='object-cover rounded-xl h-72' src={aboutPic} alt='' />
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-cyan-50 mt-5 rounded-2xl' style={{width: "1000px"}}>
          <h1 className='text-4xl text-left mt-5 m-auto' style={{width: "600px"}}>I love to try new things and to think and solve problems. 
            Let&apos;s talk about topics like...</h1>

          <div className='flex justify-center'>
            <div className='flex mt-5' style={{width: "800px"}}>
              <div className='mt-3 mx-5'>
                <h1 className='text-3xl'>💻 Software development</h1>
                <p className='mt-3 text-left text-lg text-slate-500'>I’m developing web apps using JavaScript and React. 
                  Especially I’ve been putting much effort into developing with React these days. 
                  I have development experiences using Java when I worked for a company
                  and private development experiences using Python. I keep brushing up my developing skills.</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='flex mt-5' style={{width: "800px"}}>
              <div className='mt-3 mx-5'>
                <h1 className='text-3xl'>💡 Thinking logically</h1>
                <p className='mt-3 text-left text-lg text-slate-500'>I majored in mathematics at university,
                  which gave me the ability to think about things logically and to focus on one thing patiently.</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='flex mt-5' style={{width: "800px"}}>
              <div className='flex mt-3 mx-5'>
                <div className='w-2/3 rounded'>
                  <h1 className='text-3xl'>🥋 Playing sports</h1>
                    <p className='mt-3 text-left text-lg text-slate-500'>I was a member of club activities from primary school all the way through to high school. 
                  Since coming to Vancouver, I have been running several times a week. 
                  I have run half marathons!</p>
                </div>
                  <Image className='ml-3 w-1/3 object-contain rounded w-48' src={halfmarathonPic} alt='' />
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='flex my-5' style={{width: "800px"}}>
              <div className='flex mt-3 mx-5'>
                <div className='w-2/3 rounded'>
                  <h1 className='text-3xl'>✈️ Traveling</h1>
                    <p className='mt-3 text-left text-lg text-slate-500'>Love to off to new places, especially nature.
                      I like to travel alone and spend time as I please.
                      For Japan, Yakushima and Shikoku are Awesome!!!</p>
                </div>
                  <Image className='ml-3 w-1/3 object-contain rounded w-48' src={yakushimaPic} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About