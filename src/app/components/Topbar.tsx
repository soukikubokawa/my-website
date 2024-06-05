import React, { useEffect } from 'react'
import Link from 'next/link'

const Topbar = () => {
  return (
    <header className='flex justify-end pt-3 sticky top-3'>
      <div className='mr-5 border-b-2 w-16 flex justify-center rounded-lg bg-slate-50'>
        <Link href={"/home"}>
          <button className='text-lg p-1 hover:text-orange-500'>Home</button>
        </Link>
      </div>
      <div className='mr-5 border-b-2 w-16 flex justify-center rounded-lg bg-slate-50'>
        <Link href={"/about"}>
          <button className='text-lg p-1 hover:text-orange-500'>About</button>
        </Link>
      </div>
      <div className='mr-5 border-b-2 w-16 flex justify-center rounded-lg bg-slate-50'>
        <Link href={"/blog"}>
          <button className='text-lg p-1 hover:text-orange-500'>Blog</button>
        </Link>
      </div>
    </header>
  )
}

export default Topbar