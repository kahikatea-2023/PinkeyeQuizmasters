import express from 'express'
const router = express.Router()

import * as db from '../db/db'

router.get('/', async (req, res) => {
  try {
    const questions = await db.getQuestions()

    res.json(questions)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// router.post('/', async (req, res) => {
//   try {
//     const id = req.body
//     await db.checkAnswer(id)
//     res.sendStatus(201)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ message: 'error in server' })
//   }
// })

export default router
