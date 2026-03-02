'use client'
import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import Link from 'next/link';

const Register = () => {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [show,setShow] = React.useState(false)
  return (
    <div className='max-w-md mx-auto mt-60 border-2 p-15  h-180 rounded-lg shadow-sm border-gray-200 bg-white text-black'>
      <div>
<div className='flex flex-col justify-center items-center'>
    <FaGraduationCap size={60 } className='bg-blue-700 text-white p-2 rounded-full transition-transform duration-150 hover:scale-105'/>
    <h1 className='text-3xl font-bold text-gray-800 '>Create Account</h1>
    <p className="text-gray-500">Register to start your learning journey</p>
</div>

<div>
    <div>
    <label htmlFor="fullName" className="block text-sm  text-black font-semibold">Full Name</label>
    <input type="text" placeholder='enter your name' id="fullName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" value={username} onChange={(e) => setUsername(e.target.value)}/>
    </div>

    <div className='mt-4'>
    <label htmlFor="email" className="block text-sm  text-black font-semibold">Email</label>
    <input type="email" placeholder='enter your email' id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>

    <div className='mt-4'>
    <label htmlFor="password"  className="block text-sm  text-black font-semibold">Password</label>
    <input type="password" placeholder='create your password' id="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>

<div>
    <label htmlFor="iamstudent" placeholder='enter your student' className='block text-sm  text-black font-semibold'>I am a</label>
    <select id="iamstudent" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500">
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
    </select>
</div>

<div className='pt-10'>
<Link onClick={(e) => {
  if (!username || !email || !password) {
    e.preventDefault()
    alert("Please fill in all fields");
  } else {
    setShow(!show);
  }
}} href="#" className='block w-full bg-black text-white text-center p-2 rounded-md font-bold transition-transform duration-300 hover:scale-105'>Create Account</Link>
</div>
<div className='pt-10'>
  <p>Already have an account?<Link  href="/"className='text-blue-600 text-center p-1'>Sing in here</Link></p>
</div>
</div>
      </div>
    </div>
  )
}

export default Register
