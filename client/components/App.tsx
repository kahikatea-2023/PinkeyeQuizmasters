import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchFruits } from '../slices/fruits'
import Questions from './Questions'
import GameOver from './GameOver'

function App() {
  return (
    <>
      <h1>?True or False?</h1>
      <Questions />
      <GameOver />
    </>
  )
}

export default App
