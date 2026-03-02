import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';

const page = () => {
  return (
    <div className='text-black flex justify-center items-center'>
                <Link href="/dashboard" className='absolute left-0 top-0 p-5 text-black'><IoMdArrowRoundBack size={20}/></Link>

      <div className=' bg-white border border-gray-300 w-[80%] p-20 h-20 mt-100 rounded-lg'>
<h1 className='text-center font-semibold'>No quizzes available in this category...</h1>
      </div>
    </div>
  )
}

export default page
