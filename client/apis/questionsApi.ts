import request from 'superagent'

const rootUrl = '/api/v1/questions'

// const questions = [
//   { id: 1, question: 'Who am I?', answer: true },
//   { id: 2, question: 'Octopus can live after being chopped.', answer: true },
//   { id: 3, question: 'Quinn can fly.', answer: true },
// ]

export async function getQuestions() {
  const res = await request.get(rootUrl)
  return res.body
}
