"use client";
import React, { useState, useEffect } from 'react'

const page = () => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [seconds]);

  return (
    <div>
      <div>
        <div>
          <div>
          <h1>JavaScript Basics</h1>
          <p>Question 1 of 5</p>
          </div>
          <div>
            <div className={seconds <= 10 ? 'text-red-500' : 'text-black'}>
              {seconds}s
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
