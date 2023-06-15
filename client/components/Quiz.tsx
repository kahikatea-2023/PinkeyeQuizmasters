import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchQuestions } from '../slices/questionsSlice'
import GameOver from './GameOver'

function Quiz() {
  const dispatch = useAppDispatch()
  const questions = useAppSelector((state) => state.questions)
  const [currentQuestionId, setCurrentQuestionId] = useState(1)
  let isRight = 'right'

  useEffect(() => {
    dispatch(fetchQuestions())
  }, [])

  const currentQuestion = questions.find(
    (question) => question.id === currentQuestionId
  )

  function handleAnswer(answer: string) {
    if (answer === currentQuestion?.answer) {
      isRight = 'right'
      setCurrentQuestionId(currentQuestionId + 1)
    } else {
      isRight = 'wrong'
    }
    console.log('clicked', answer, isRight)
    console.log(currentQuestion?.answer)
  }
  if (!currentQuestion) {
    return null
  }

  return (
    <>
      {isRight === 'right' ? (
        <div>
          <p>{currentQuestion.question}</p>
        </div>
      ) : (
        <GameOver />
      )}
      <div>
        <button onClick={() => handleAnswer('true')}>True</button>
        <button onClick={() => handleAnswer('false')}>False</button>
      </div>
    </>
  )
}

export default Quiz
