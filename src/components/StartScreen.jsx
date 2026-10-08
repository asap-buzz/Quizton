import React from 'react'
import { useState } from 'react'

export default function StartScreen({name,setName,setQuizStart}) {

   const handleQuizStart = () => {
     if (name === ("")) {
      alert ("Please enter your name to continue")
    } else {
      setQuizStart(true)
    }
  }
  return (
    <div className="start-screen">
      <h2> Quizton</h2>
     <h3> <p>Test your React knowledge by answering 10 multiple-choice questions. </p>
     </h3>
        <input type="text"  placeholder='Enter Your Name' 
        value={name}
        onChange={(e)=> setName(e.target.value)}
            />
        <button onClick={handleQuizStart}> Start Quiz</button>
        <p>Hello, {name} Good luck</p>

    </div>
  )
}
