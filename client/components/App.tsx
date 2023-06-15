import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchFruits } from '../slices/questions'
import Quiz from './Quiz'
import GameOver from './GameOver'

function App() {
  return (
    <>
      <h1>?True or False?</h1>
      <Quiz />
      <GameOver />
    </>
  )
}

export default App
