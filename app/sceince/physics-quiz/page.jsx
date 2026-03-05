"use client";
import React, { useState, useEffect } from 'react';
import { MdOutlineWatchLater } from "react-icons/md";
import Link from 'next/link';

// Mock data for the quiz
const quizData = [
  {
    question: "What is the unit of force?",
    options: ["Joule", "Newton", "Watt"],
    answer: "Newton"
  },
  {
    question: "What is the formula for kinetic energy?",
    options: ["E=mc²", "F=ma", "KE = 1/2 * mv²"],
    answer: "KE = 1/2 * mv²"
  },
  {
    question: "What does 'c' represent in the equation E=mc²?",
    options: ["Speed of sound", "Speed of light", "A constant"],
    answer: "Speed of light"
  },
  {
    question: "Which of Newton's laws is also known as the law of inertia?",
    options: ["First Law", "Second Law", "Third Law"],
    answer: "First Law"
  },
  {
    question: "What is the approximate acceleration due to gravity on Earth?",
    options: ["5.5 m/s²", "9.8 m/s²", "12.1 m/s²"],
    answer: "9.8 m/s²"
  }
];

const Page = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    // Timer logic
    if (seconds > 0 && !showResults) {
      const timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (seconds === 0 && !showResults) {
      // Auto-move to next question when timer runs out
      handleNext();
    }
  }, [seconds, showResults]);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === quizData[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setSeconds(30); // Reset timer for the next question
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
    setSeconds(30);
  };

  if (showResults) {
    return (
      <div className='text-black bg-indigo-50 h-screen w-screen flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold mb-4'>Quiz Completed!</h1>
        <p className='text-xl mb-4'>Your score: {score} out of {quizData.length}</p>
        <button onClick={restartQuiz} className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>
          Restart Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;

  return (
    <div className='text-black  h-screen flex flex-col  '>
      <div className='p-10 w-[70%] mx-auto mt-20 bg-indigo-50 rounded-lg shadow-md'>
        <div className='flex justify-between items-center pt-10'>
          <div>
            <h1 className='font-bold text-xl'>Physics 101 Quiz</h1>
            <p className='text-gray-500'>Question {currentQuestionIndex + 1} of {quizData.length}</p>
          </div>
          <div className='bg-white text-black p-2 rounded-lg h-10 w-20 text-center flex justify-around items-center'>
            <MdOutlineWatchLater size={20} className='text-blue-500' />
            <div className={seconds <= 10 ? 'text-red-500 font-bold text-lg' : 'text-black font-bold text-lg'}>
              {seconds}s
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 my-4">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>

        <div className='mt-10'>
          <h2 className='text-2xl font-semibold mb-5'>{currentQuestion.question}</h2>
          <div className='flex flex-col gap-4'>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                disabled={selectedAnswer !== null}
                className={`p-4 text-left rounded-lg border ${
                  selectedAnswer === null
                    ? 'bg-white hover:bg-gray-100'
                    : option === currentQuestion.answer
                    ? 'bg-green-200 border-gray-500'
                    : option === selectedAnswer
                    ? 'bg-red-200 border-red-500'
                    : 'bg-white'
                } ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className='flex justify-end mt-8'>
          <Link href='#'
            onClick={handleNext}
            className='bg-black text-white font-bold py-2 px-8 rounded-lg hover:bg-gray-800'
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;