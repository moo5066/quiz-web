// // /Users/mohamedabdulkadirabdulahi/Desktop/Quiz-web/quiz-web/app/general-knowladge/world-geography/page.jsx

// "use client";
// import React, { useState, useEffect, useCallback } from 'react';
// import { MdOutlineWatchLater } from "react-icons/md";
// import Link from 'next/link';

// const quizData = [
//   {
//     question: 'What is the capital of Australia?',
//     options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
//     answer: 'Canberra',
//   },
//   {
//     question: 'Which continent is known as the "Dark Continent"?',
//     options: ['Asia', 'South America', 'Africa', 'Australia'],
//     answer: 'Africa',
//   },
//   {
//     question: 'Which is the smallest country in the world?',
//     options: ['Vatican City', 'Monaco', 'Nauru', 'San Marino'],
//     answer: 'Vatican City',
//   },
//   {
//     question: 'Mount Everest is located in which mountain range?',
//     options: ['Andes', 'Rockies', 'Alps', 'Himalayas'],
//     answer: 'Himalayas',
//   },
//   {
//     question: 'Which ocean is the largest?',
//     options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
//     answer: 'Pacific Ocean',
//   },
// ];

// const Page = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [score, setScore] = useState(0);
//   const [showResults, setShowResults] = useState(false);
//   const [seconds, setSeconds] = useState(30);

//   // Memoize handleNext so it can be used in useEffect dependency array
//   const handleNext = useCallback(() => {
//     setSelectedAnswer(null);
//     setSeconds(30);
//     if (currentQuestionIndex < quizData.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     } else {
//       setShowResults(true);
//     }
//   }, [currentQuestionIndex]);

//   useEffect(() => {
//     if (seconds > 0 && !showResults) {
//       const timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
//       return () => clearInterval(timer);
//     } else if (seconds === 0 && !showResults) {
//       handleNext();
//     }
//   }, [seconds, showResults, handleNext]);

//   const handleAnswerClick = (option) => {
//     setSelectedAnswer(option);
//     if (option === quizData[currentQuestionIndex].answer) {
//       setScore(score + 1);
//     }
//   };

//   const restartQuiz = () => {
//     setCurrentQuestionIndex(0);
//     setSelectedAnswer(null);
//     setScore(0);
//     setShowResults(false);
//     setSeconds(30);
//   };

//   if (showResults) {
//     return (
//       <div className='text-black bg-indigo-50 h-screen w-screen flex flex-col justify-center items-center'>
//         <h1 className='text-3xl font-bold mb-4'>Quiz Completed!</h1>
//         <p className='text-xl mb-4'>Your score: {score} out of {quizData.length}</p>
//         <div className='flex gap-4'>
//              <button onClick={restartQuiz} className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>
//             Restart Quiz
//             </button>
//             <Link href="/general-knowladge" className='bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800'>
//             Back to Topics
//             </Link>
//         </div>
//       </div>
//     );
//   }

//   const currentQuestion = quizData[currentQuestionIndex];
//   const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;

//   return (
//     <div className='text-black h-screen flex flex-col'>
//       <div className='p-10 w-[90%] sm:w-[70%] mx-auto mt-20 bg-indigo-50 rounded-lg shadow-md'>
//         <div className='flex justify-between items-center pt-10'>
//           <div>
//             <h1 className='font-bold text-xl'>World Geography Quiz</h1>
//             <p className='text-gray-500'>Question {currentQuestionIndex + 1} of {quizData.length}</p>
//           </div>
//           <div className='bg-white text-black p-2 rounded-lg h-10 w-20 text-center flex justify-around items-center'>
//             <MdOutlineWatchLater size={20} className='text-blue-500' />
//             <div className={seconds <= 10 ? 'text-red-500 font-bold text-lg' : 'text-black font-bold text-lg'}>
//               {seconds}s
//             </div>
//           </div>
//         </div>

//         <div className="w-full bg-gray-200 rounded-full h-2.5 my-4">
//           <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
//         </div>

//         <div className='mt-10'>
//           <h2 className='text-2xl font-semibold mb-5'>{currentQuestion.question}</h2>
//           <div className='flex flex-col gap-4'>
//             {currentQuestion.options.map((option) => (
//               <button
//                 key={option}
//                 onClick={() => handleAnswerClick(option)}
//                 disabled={selectedAnswer !== null}
//                 className={`p-4 text-left rounded-lg border ${
//                   selectedAnswer === null
//                     ? 'bg-white hover:bg-gray-100'
//                     : option === currentQuestion.answer
//                     ? 'bg-green-200 border-green-500'
//                     : option === selectedAnswer
//                     ? 'bg-red-200 border-red-500'
//                     : 'bg-white'
//                 } ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className='flex justify-end mt-8'>
//           <button
//             onClick={handleNext}
//             className='bg-black text-white font-bold py-2 px-8 rounded-lg hover:bg-gray-800'
//           >
//             {currentQuestionIndex === quizData.length - 1 ? 'Finish' : 'Next'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;



"use client";

import React, { useState, useEffect, useCallback } from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import Link from "next/link";

const quizData = [
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },
  {
    question: 'Which continent is known as the "Dark Continent"?',
    options: ["Asia", "South America", "Africa", "Australia"],
    answer: "Africa",
  },
  {
    question: "Which is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Nauru", "San Marino"],
    answer: "Vatican City",
  },
  {
    question: "Mount Everest is located in which mountain range?",
    options: ["Andes", "Rockies", "Alps", "Himalayas"],
    answer: "Himalayas",
  },
  {
    question: "Which ocean is the largest?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
];

const Page = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [seconds, setSeconds] = useState(30);

  // ✅ FIXED NEXT FUNCTION
  const handleNext = useCallback(() => {
    setSelectedAnswer(null);
    setSeconds(30);

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  }, [currentQuestionIndex]);

  // ✅ FIXED TIMER (No repeated intervals bug)
  useEffect(() => {
    if (showResults) return;

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) {
          handleNext();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showResults, handleNext]);

  // ✅ FIXED SCORE UPDATE
  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);

    if (option === quizData[currentQuestionIndex].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
    setSeconds(30);
  };

  // ✅ RESULTS SCREEN
  if (showResults) {
    return (
      <div className="bg-indigo-50 h-screen w-screen flex flex-col justify-center items-center text-black">
        <h1 className="text-3xl font-bold mb-4">Quiz Completed 🎉</h1>

        <p className="text-xl mb-4">
          Your score: {score} / {quizData.length}
        </p>

        <div className="flex gap-4">
          <button
            onClick={restartQuiz}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Restart
          </button>

          <Link
            href="/general-knowladge"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Back to Topics
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];
  const progress =
    ((currentQuestionIndex + 1) / quizData.length) * 100;

  return (
    <div className="text-black h-screen flex flex-col">
      <div className="p-10 w-[90%] sm:w-[70%] mx-auto mt-20 bg-indigo-50 rounded-lg shadow-md">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">
              World Geography Quiz
            </h1>
            <p className="text-gray-500">
              Question {currentQuestionIndex + 1} of {quizData.length}
            </p>
          </div>

          {/* TIMER */}
          <div className="bg-white p-2 rounded-lg w-20 flex justify-center items-center gap-2">
            <MdOutlineWatchLater className="text-blue-500" size={20} />

            <span
              className={
                seconds <= 10
                  ? "text-red-500 font-bold text-lg"
                  : "text-black font-bold text-lg"
              }
            >
              {seconds}s
            </span>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 my-4">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* QUESTION */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-5">
            {currentQuestion.question}
          </h2>

          <div className="flex flex-col gap-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
                disabled={selectedAnswer !== null}
                className={`p-4 text-left rounded-lg border ${
                  selectedAnswer === null
                    ? "bg-white hover:bg-gray-100"
                    : option === currentQuestion.answer
                    ? "bg-green-200 border-green-500"
                    : option === selectedAnswer
                    ? "bg-red-200 border-red-500"
                    : "bg-white"
                } ${
                  selectedAnswer !== null
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="flex justify-end mt-8">
          <button
            onClick={handleNext}
            className="bg-black text-white px-8 py-2 rounded-lg hover:bg-gray-800"
          >
            {currentQuestionIndex === quizData.length - 1
              ? "Finish"
              : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
