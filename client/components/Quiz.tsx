import React, { useEffect, useState } from 'react'
import { fetchQuestions } from '../apis/questionsApi'
import Question from '../../models/question'
import { useAppDispatch, useAppSelector } from '../hooks'

function Quiz() {
  const dispatch = useAppDispatch()
  const questions = useAppSelector((state) => state.questions)

  useEffect(() => {
    dispatch(fetchQuestions())
  }, [])
  // async function refetchQuestion() {}

  // const handleAnswer = (answer: boolean, id: number) => {
  //   if (answer === questions[id - 1].answer) {
  //     refetchQuestion() // Fetch a new question
  //   } else {
  //     // Handle game over logic here
  //     // Show game over component or reset the game state
  //   }
  // }

  return (
    <>
      <div>
        {questions.map((question) => (
          <>
            <p>{question.question}</p>
            <p>{question.answer}</p>
          </>
        ))}
      </div>
      {/* <div>
        <h2>{question.question}</h2>
        <button onClick={() => handleAnswer(true, question.id)}>True</button>
        <button onClick={() => handleAnswer(false, question.id)}>False</button>
      </div> */}
    </>
  )
}

export default Quiz
