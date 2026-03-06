"use client";
// Fix: Import useState from 'react' to use the hook
import  { useState, useEffect } from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TfiCup } from "react-icons/tfi";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation';




// Fix: Capitalize the component name (React convention)
const Page = () => {
  const pathname = usePathname();
  // The activeTab state is no longer needed for the tabs, as the active state is derived from the URL pathname.
  const [activeTab, setActiveTab] = useState('availableQuizzes');
  const [selectedCategory, setSelectedCategory] = useState('All Subjects');
  const [stats, setStats] = useState({
    quizzesTaken: 0,
    totalScore: 0,
    availableQuizzes: 0,
    subjects: 0,
  });

  useEffect(() => {
    // This is where you would fetch data from your API.
    // For demonstration, we're using a timeout to simulate a network request.
    const fetchDashboardData = async () => {
      // Example:
      // const response = await fetch('/api/dashboard-stats');
      // const data = await response.json();
      // setStats(data);

      // Using mock data for now.
      setTimeout(() => {
        setStats({ quizzesTaken: 12, totalScore: 1080, availableQuizzes: 5, subjects: 5 });
      }, 1000);
    };

    fetchDashboardData();
  }, []); // The empty dependency array ensures this effect runs only once on mount.

  const dashboardCards = [
    {
      title: 'Quizzes Taken',
      value: stats.quizzesTaken,
      Icon: IoMdCheckmarkCircleOutline,
      iconColor: 'text-blue-800',
      bgColor: 'bg-blue-300',
    },
    {
      title: 'Total Score',
      value: stats.totalScore,
      Icon: TfiCup,
      iconColor: 'text-yellow-800',
      bgColor: 'bg-yellow-300',
    },
    {
      title: 'Available Quizzes',
      value: stats.availableQuizzes,
      Icon: FaBookOpen,
      iconColor: 'text-green-800',
      bgColor: 'bg-green-300',
    },
    {
      title: 'Subjects',
      value: stats.subjects,
      Icon: MdOutlineWatchLater,
      iconColor: 'text-purple-800',
      bgColor: 'bg-purple-300',
    },
  ];

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
<Link href="/register"><LuLogOut size={20} className='font-bold'/></Link>
<p>Logout</p>
       </div>
      </nav> 
    </div>

      <div className='pt-24 max-w-7xl mx-auto px-5 py-10 '>
        <div className='mb-6'>
        <h1 className='font-bold text-2xl text-black'>Student Dashboard</h1> 
        <p className='text-gray-400'>Take quizzes and track your progress</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {dashboardCards.map((card) => (
            <div key={card.title} className='w-full h-20 border flex justify-between items-center gap-5 p-4 rounded-lg shadow-sm border-gray-300 bg-white text-black'>
              <div className='flex flex-col'>
                <p className='text-gray-600'>{card.title}</p>
                <h1 className='font-bold text-3xl'>{card.value}</h1>
              </div>
              <div className={`${card.bgColor} p-2 rounded-full text-white`}>
                <card.Icon size={30} className={card.iconColor} />
              </div>
            </div>
          ))}
        </div>

      {/* Fix: Replaced flawed tab structure with a functional and accessible one using buttons. */}
      {/* Each tab button updates the activeTab state on click. */}
      {/* The active tab receives a 'bg-white' style as requested. */}
      {/* Also removed invalid 'w-90' and 'animate-pulse' classes. */}
      <div className='w-full max-w-md mx-auto rounded-full bg-gray-100 m-10 p-1 flex items-center justify-around space-x-1'>
        {/* The `href` now points to the dashboard page. The active state is determined by the `pathname`. */}
        <Link href="/dashboard" className={`w-1/3 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${pathname === '/dashboard' ? 'bg-white text-black shadow' : 'text-gray-600 hover:bg-gray-200'}`}>
          Available Quizzes
        </Link>
        {/* The onClick handler is removed because navigation is handled by Next.js Link. */}
        <Link href="/my-history" className={`w-1/3 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${pathname === '/my-history' ? 'bg-white text-black shadow' : 'text-gray-600 hover:bg-gray-200'}`}>
          My History
        </Link>
        <Link href="/leaderboard" className={`w-1/3 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${pathname === '/leaderboard' ? 'bg-white text-black shadow' : 'text-gray-600 hover:bg-gray-200'}`}>
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
