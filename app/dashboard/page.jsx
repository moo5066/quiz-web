"use client";
// Fix: Import useState from 'react' to use the hook
import  { useState } from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TfiCup } from "react-icons/tfi";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import Link from 'next/link';




// Fix: Capitalize the component name (React convention)
const Page = () => {
  const [activeTab, setActiveTab] = useState('availableQuizzes');
  const [selectedCategory, setSelectedCategory] = useState('All Subjects');
  return (
    <div className='min-h-screen bg-gray-50'>
    <div className='text-black w-full h-16 mx-auto  border-b border-gray-200 shadow-sm backdrop-blur-lg fixed top-0 left-0 z-10 bg-white/80'>
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
    </div>

      <div className='pt-24 max-w-7xl mx-auto px-5 py-10 '>
        <div className='mb-6'>
        <h1 className='font-bold text-2xl text-black'>Student Dashboard</h1> 
        <p className='text-gray-400'>Take quizzes and track your progress</p>
        </div>
<div className='flex flex-col justify-center items-center gap-6  sm:flex-row sm:justify-between max-w-full'>
        {/* Fix: Reduced padding to p-4 because p-12 (3rem) exceeds h-20 (5rem) height */}
        <div className='w-full sm:flex-1 h-20 border flex justify-between items-center gap-5  p-4 rounded-lg shadow-sm border-gray-300 bg-white text-black'>
            <div className='flex flex-col'>
                <p className='text-gray-600'>Quizzes Taken</p>
                <h1 className='font-bold text-3xl'>0</h1>
            </div>
            <div className='bg-blue-300 p-2 rounded-full text-white'>
            <IoMdCheckmarkCircleOutline size={30} className='text-blue-800'/>
</div>
</div>

        {/* Fix: Reduced padding to p-4 */}
        <div className='w-full sm:flex-1 h-20 border flex justify-between items-center gap-5 p-4 rounded-lg shadow-sm border-gray-300 bg-white text-black'>
            <div  >
                <p className='text-gray-600'>Total Score</p>
                <h1 className='font-bold text-3xl'>0</h1>
            </div>
            <div className='bg-yellow-300 p-2 rounded-full text-white'>
            <TfiCup size={30} className='text-yellow-800'/>
</div>
</div>

        {/* Fix: Reduced padding to p-4 */}
        <div className='w-full sm:flex-1 h-20 border flex justify-between items-center  gap-5 p-4 rounded-lg shadow-sm border-gray-300 bg-white text-black'>
            <div className='flex flex-col'>
                <p className='text-gray-600 w-full'>Available Quizzes</p>
                <h1 className='font-bold text-3xl'>5</h1>
            </div>
            <div className='bg-green-300 p-3 rounded-full'>
            <FaBookOpen size={30} className='text-blue-600'/>
            </div>
</div>

        {/* Fix: Reduced padding to p-4 */}
        <div className='w-full sm:flex-1 h-20 border flex justify-between items-center  gap-5 p-4 rounded-lg shadow-sm border-gray-300 bg-white text-black'>
            <div className='flex flex-col'>
                <p className='text-gray-600'>Subjects</p>
                <h1 className='font-bold text-3xl'>5</h1>
            </div>
            <div className='bg-purple-300 p-2 rounded-full text-white'>
            <MdOutlineWatchLater size={30} className='text-purple-800'/>
</div>
</div>


        
      </div>

      {/* Fix: Replaced flawed tab structure with a functional and accessible one using buttons. */}
      {/* Each tab button updates the activeTab state on click. */}
      {/* The active tab receives a 'bg-white' style as requested. */}
      {/* Also removed invalid 'w-90' and 'animate-pulse' classes. */}
      <div className='w-full max-w-md mx-auto rounded-full bg-gray-100 m-10 p-1 flex items-center justify-around space-x-1'>
        <Link href="#" onClick={() => setActiveTab('availableQuizzes')} className={`w-1/3 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeTab === 'availableQuizzes' ? 'bg-white text-black shadow' : 'text-gray-600 hover:bg-gray-200'}`}>
          Available Quizzes
        </Link>
        <Link href="#" onClick={() => setActiveTab('myHistory')} className={`w-1/3 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeTab === 'myHistory' ? 'bg-white text-black shadow' : 'text-gray-600 hover:bg-gray-200'}`}>
          My History
        </Link>
        <Link href="#" onClick={() => setActiveTab('leaderboard')} className={`w-1/3 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeTab === 'leaderboard' ? 'bg-white text-black shadow' : 'text-gray-600 hover:bg-gray-200'}`}>
          Leaderboard
        </Link>

        </div> 

<div className='text-black flex flex-col w-full h-auto p-5 sm:py-10 sm:px-15 border border-gray-200 rounded-lg'>
  <div>
    <h1 className='font-semibold text-xl'>Select Category</h1>
    <p className='text-gray-500'>Filter quizzes by subject</p>
  </div>
  
  <div className='max-w-7xl pt-5 flex flex-wrap gap-3'>
    
    <Link href="/All-Subjects" onClick={()=>setSelectedCategory("All Subjects")} className={`border border-gray-300 rounded-lg p-1 ${selectedCategory === 'All Subjects' ? 'bg-black text-white' : 'bg-white text-black' } `}>All Subjects</Link>
    <Link href="/Programming" onClick={()=>setSelectedCategory("Programming")} className={`border border-gray-300 rounded-lg p-1 ${selectedCategory === 'Programming' ? 'bg-black text-white' : 'bg-white text-black' } `}>Programming </Link>
    <Link href="/math" onClick={()=>setSelectedCategory("Mathematics")} className={`border border-gray-300 rounded-lg p-1 ${selectedCategory === 'Mathematics' ? 'bg-black text-white' : 'bg-white text-black' } `}>Mathematics</Link>
    <Link href="/sceince" onClick={()=>setSelectedCategory("Science")} className={`border border-gray-300 rounded-lg p-1 ${selectedCategory === 'Science' ? 'bg-black text-white' : 'bg-white text-black' } `} >Science</Link>
    <Link href="/history" onClick={()=>setSelectedCategory("History")} className={`border border-gray-300 rounded-lg p-1 ${selectedCategory === 'History' ? 'bg-black text-white' : 'bg-white text-black' } `}>History</Link>
    <Link href="/general-knowladge" onClick={()=>setSelectedCategory("General Knowledge")} className={`border border-gray-300 rounded-lg p-1 ${selectedCategory === 'General Knowledge' ? 'bg-black text-white' : 'bg-white text-black' } `}>General Knowledge</Link>
      

  </div>
</div>

    </div>
    </div>
  )
}

export default Page
