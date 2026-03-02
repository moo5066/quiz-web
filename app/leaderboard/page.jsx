import React from 'react'
import { GiTrophyCup } from "react-icons/gi";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';
const page = () => {
  return (
      <div className='text-black mt-100'>
                        <Link href="/dashboard" className='absolute left-0 top-0 p-5 text-black'><IoMdArrowRoundBack size={20}/></Link>

      <div className='bg-white border border-gray-200 shadow-sm w-[90%] h-110 mx-auto rounded-lg '>
<div className='m-5 flex gap-2 items-center'>
<GiTrophyCup size={20} className='text-yellow-500'/>
    <h1 className='font-semibold text-lg'>Global Leaderboard</h1>
</div>
      </div>
    </div>
  )
}

export default page
