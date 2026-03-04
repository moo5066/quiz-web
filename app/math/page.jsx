import React from 'react'
import { GiOpenBook } from "react-icons/gi";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';

const page = () => {
  return (
    <div className='text-black mt-100 mx-auto max-h-2'>
                <Link href="/dashboard" className='absolute left-0 top-0 p-5 text-black'><IoMdArrowRoundBack size={20}/></Link>

       <div className='border border-gray-300 w-[400px] h-60 sm:h-50 p-3  rounded-lg mx-5 '>
          <div className='flex justify-between space-x-10'>
              <GiOpenBook  size={40} className='bg-blue-200 p-2 text-blue-500 rounded-lg'/>
              <p className='border  flex justify-center items-center p-0.5 border-gray-300 rounded-lg text-sm'>30s/question</p>
          </div>
      
          <div className='py-4'>
              <h1 className='text-xl font-bold'>Algebra Basics</h1>
              <p className='text-gray-500'>Math</p>
          </div>
          <Link href="/math/math-quiz" className='py-2 block w-[90%]  mx-auto bg-black text-white p-1 text-center rounded-lg font-semibold' >Start Quiz</Link>
        </div>
    </div>
  )
}

export default page
