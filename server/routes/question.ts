import express from 'express'
const router = express.Router()

import * as db from '../db/questions'

router.get('/', async (req, res) => {
  try {
    const question = await db.getQuestions()
    console.log(question)

    res.json(question)
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
