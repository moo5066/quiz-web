'use client'
import React from 'react'
import Link from 'next/link'
import { FaGraduationCap } from "react-icons/fa";
import { useState } from 'react';

const Login = () => {
     const [show, setShow] =useState(false)
     const [username, setUsername] = useState('')
     const [password, setPassword] = useState('')
  return (
    <div className='text-black'>
     <div className='flex flex-col justify-center items-center mt-60 border  mx-auto p-15 w-[400px] h-180 rounded-lg shadow-sm border-gray-200 bg-white '>
<div className='flex flex-col justify-center items-center pb-10'>
  <FaGraduationCap className="text-white text-center bg-blue-700 p-2 rounded-full transition-transform duration-150 hover:scale-105" size={60} />
      <h1 className='text-3xl font-bold text-gray-800 mb-4'>Welcome back!</h1>
      <p className="text-gray-500 text-center">Enter your credentials to access your account.</p>
     </div>

     <input type="text" placeholder="Username" className="border border-gray-300 rounded px-2 py-2 mb-4 w-full" value={username} onChange={(e) => setUsername(e.target.value)}/>
     <input type="password" placeholder="Password" className="border border-gray-300 rounded px-2 py-2 mb-4 w-full" value={password} onChange={(e) => setPassword(e.target.value)}/>

     <Link href="/dashboard" onClick={(e) => {
       if (!username || !password) {
         e.preventDefault()
         alert("plz fill in the eamil ans password")
       } else {
         setShow(!show)
       }
     }} className={`block w-full text-center bg-black py-2 px-3 text-white rounded-lg font-bold transition-transform duration-300 hover:bg-gray-800 hover:scale-105 ${show ? 'bg-black' : 'bg-gray-800...'}`}>
Sing In
     </Link>
<div className='pb-3'>
     <p className='text-center border-b border-gray-300 pb-4 pt-3'> Don't have an account? <Link href="/register"className='text-blue-500'>Register here</Link></p>
     <p className='pt-2 text-center'>Demo Accounts (password:password123)</p>
</div>
     <div className='flex flex-col space-y-2 justify-center items-center pb-10'>
    <p className='w-full block text-center   font-semibold text-black border border-gray-200 p-2 rounded-sm hover:border-blue-300 '>Admin Demo</p>
    <p className='w-full block text-center   font-semibold text-black border border-gray-200 p-2 rounded-sm hover:border-blue-300 '>Teacher Demo</p>
    <p className='w-full block text-center  font-semibold text-black border border-gray-200 p-2 rounded-sm hover:border-blue-300 '>Student Demo</p>
   
     </div>
    </div>
    </div>
  )
}

export default Login
