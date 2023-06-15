import React, { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { fetchQuestions } from '../apis/questionsApi'

function Questions() {
  // Access the client
  // const queryClient = useQueryClient()

  // const { data: question, isLoading, isError, refetch } = useQuery('questions', fetchQuestions);

  const [question, setQuestion] = useState([] as Question[])

  async function refetchQuestion() {}

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  // if (isError) {
  //   return <div>Error fetching question</div>
  // }

  const handleAnswer = (answer: boolean, id: number) => {
    if (answer === questions[id - 1].answer) {
      refetchQuestion() // Fetch a new question
    } else {
      // Handle game over logic here
      // Show game over component or reset the game state
    }
  }

  return (
    <div>
      <h2>{question.question}</h2>
      <button onClick={() => handleAnswer(true, question.id)}>True</button>
      <button onClick={() => handleAnswer(false, question.id)}>False</button>
    </div>
  )
}

export default Questions
