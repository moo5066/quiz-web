import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TfiCup } from "react-icons/tfi";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";





const page = () => {
  return (
    <div className='text-black w-full h-16 mx-auto  border-b border-gray-200 shadow-sm backdrop-blur-lg fixed top-0 left-0 z-10 '>
      <nav className=' flex justify-around items-center  h-full px-4'>
        <div className='flex gap-2 items-center'>
        <div className='bg-blue-600 p-2 text-white rounded-lg'>
       <FaGraduationCap size={20}/>
       </div>
       <div className='block'>
       <h1 className='text-lg font-bold my-auto'>Quiz Master</h1>
       <p className='text-gray-400 text-md'>Interactive Learning Platform</p>
       </div>
       </div>

       <div className='flex gap-2 border p-1 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300 border-gray-300 shadow-sm'>
<LuLogOut size={20} className='font-bold'/>
<p>Logout</p>
       </div>
      </nav> 

      <div className='max-w-6xl mx-auto p-15 '>
        <div className='mb-6'>
        <h1 className='font-bold text-2xl'>Student Dashboard</h1> 
        <p className='text-gray-400'>Take quizzes and track your progress</p>
        </div>
<div className='flex flex-col justify-center items-center gap-6  sm:flex-row sm:justify-between items-center w-full'>
        <div className='w-full h-20 border flex justify-between items-center p-12 rounded-lg shadow-sm border-gray-300 bg-white text-black'>
            <div className='flex flex-col'>
                <p className='text-gray-600'>Quizzes Taken</p>
                <h1 className='font-bold text-3xl'>0</h1>
            </div>
            <div className='bg-blue-300 p-2 rounded-full text-white'>
            <IoMdCheckmarkCircleOutline size={30} className='text-blue-800'/>
</div>
</div>

        <div className='w-full h-20 border flex justify-between items-center p-12 rounded-lg shadow-sm border-gray-300 bg-white text-black'>
            <div  >
                <p className='text-gray-600'>Total Score</p>
                <h1 className='font-bold text-3xl'>0</h1>
            </div>
            <div className='bg-yellow-300 p-2 rounded-full text-white'>
            <TfiCup size={30} className='text-yellow-800'/>
</div>
</div>

        <div className='w-full h-20 border flex justify-between items-center p-12 rounded-lg shadow-sm border-gray-300 bg-white text-black'>
            <div className='flex flex-col'>
                <p className='text-gray-600'>Available Quizzes</p>
                <h1 className='font-bold text-3xl'>5</h1>
            </div>
            <div className='bg-green-300 p-3 rounded-full'>
            <FaBookOpen size={30} className='text-blue-600'/>
            </div>
</div>

        <div className='w-full h-20 border flex justify-between items-center p-12 rounded-lg shadow-sm border-gray-300 bg-white text-black'>
            <div className='flex flex-col'>
                <p className='text-gray-600'>Subjects</p>
                <h1 className='font-bold text-3xl'>5</h1>
            </div>
            <div className='bg-purple-300 p-2 rounded-full text-white'>
            <MdOutlineWatchLater size={30} className='text-purple-800'/>
</div>
</div>


        
      </div>
      </div>
    </div>
  )
}

export default page
