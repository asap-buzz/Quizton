import React from 'react'
import questions from '../Questions'

export default function Navbar({ name, handleRestart, currentQuestion }) {
  return (
    <nav className="navbar">

      <h2 className="logo">Quizton</h2>

      <p className="question-count">
        Question {currentQuestion + 1} / {questions.length}
      </p>

      <p className="player-name">
        👤 {name}
      </p>

      <button className="reset-button" onClick={handleRestart}>
        Reset
      </button>

    </nav>
  )
}