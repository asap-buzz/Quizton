import React from 'react'
import questions from '../Questions'
export default function Quiz({currentQuestion,selected,setSelected,setCurrentQuestion,score,setScore,setQuizFinished}) {

    const question=questions[currentQuestion]
    const handleNext = () => {
      if( selected === question.answer){
        setScore (score+1)
      }
        if (currentQuestion === questions.length -1) {
            setQuizFinished(true)
        }

        else {
        setCurrentQuestion(currentQuestion +1)
        setSelected("")
        }
    }

  return (
    <div className="quiz-container">
      <h2>Quiz</h2>
    <h2>{question.question}</h2>  
    {question.options.map((option,index)=> (
        <button key={index}
        onClick={()=> setSelected(option)}
        className={selected === option ? "selected" : ""}>{ option }</button>
    ))}
    <button className="next-button" onClick = {handleNext}>
      {currentQuestion === questions.length -1 ? "Submit" : "Next"}

    </button>
    </div>
  )
}
