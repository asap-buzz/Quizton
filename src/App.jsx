import { useState } from 'react'
import './App.css'
import StartScreen from './components/StartScreen'
import Quiz from './components/Quiz'
import Score from './components/Score'
import Navbar from './components/Navbar'

function App() {
  const [name, setName] = useState("")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selected , setSelected ] = useState("")
  const [score , setScore] = useState(0)
  const [quizStart,setQuizStart] = useState(false)
  const [quizFinished, setQuizFinished] = useState(false)
  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelected("")
      setScore(0)
      setQuizStart(true)
      setQuizFinished(false)
  }
  return (
    <>
   
    {!quizStart ? (
      <StartScreen
      name={name}
      setName={setName}
      setQuizStart={setQuizStart}/>
    ): quizFinished ? (
      <Score
      name={name}
       score={score}
       handleRestart={handleRestart}
      />
      
    ):(
      <>
      <Navbar 
    name={name}
    currentQuestion={currentQuestion}
    handleRestart={handleRestart}
    />
      <Quiz
      currentQuestion={currentQuestion}
      selected={selected}
      setSelected={setSelected}
      setCurrentQuestion={setCurrentQuestion}
      score={score}
      setScore={setScore}
      setQuizFinished={setQuizFinished}
      />
    </>  
    )}
    
    </>
    
  )
}

export default App
