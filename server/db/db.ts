import connection from './connection'
// import { Question } from '../../models/question'

export async function getQuestions(db = connection) {
  return await db('questions').select()
}

// export function checkAnswer(db = connection) {
//   return db('questions').select()
// }
