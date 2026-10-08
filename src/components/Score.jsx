import React from 'react'

export default function Score({ name, score, handleRestart }) {

  let category

  if (score >= 8) {
    category = "Great! 🎉"
  } else if (score >= 5) {
    category = "Good job! 👍"
  } else {
    category = "Keep practicing! 💪"
  }

  return (
    <div className="score-screen">

      <h1>Quiz Completed 🎉</h1>

      <p className="score-name">
        {name}, your score is
      </p>

      <h2 className="final-score">
        {score} / 10
      </h2>

      <p className="category">
        {category}
      </p>

      <button className="restart-button" onClick={handleRestart}>
        Try Again
      </button>

    </div>
  )
}