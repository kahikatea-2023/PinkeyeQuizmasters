import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchQuestions } from '../slices/questionsSlice'
import GameOver from './GameOver'

function Quiz() {
  const dispatch = useAppDispatch()
  const questions = useAppSelector((state) => state.questions)
  const randomNum = Math.floor(Math.random() * 20) + 1
  const [currentQuestionId, setCurrentQuestionId] = useState(randomNum)
  const [isRight, setIsRight] = useState('right')

  useEffect(() => {
    dispatch(fetchQuestions())
  }, [])

  const currentQuestion = questions.find(
    (question) => question.id === currentQuestionId
  )

  function handleAnswer(answer: string) {
    if (answer === currentQuestion?.answer) {
      setIsRight('right')
      setCurrentQuestionId(currentQuestionId + 1)
    } else {
      setIsRight('wrong')
    }
  }
  if (!currentQuestion) {
    return null
  }

  return (
    <>
      {isRight === 'right' ? (
        <>
          <div className="quiz-section">
            <div className="question">
              <p>{currentQuestion.question}</p>
            </div>
          </div>

          <div className="buttons">
            <button className="left" onClick={() => handleAnswer('true')}>
              True
            </button>
            <button className="right" onClick={() => handleAnswer('false')}>
              False
            </button>
          </div>
        </>
      ) : (
        <GameOver />
      )}
    </>
  )
}

export default Quiz
