import request from 'superagent'

const rootUrl = '/api/v1/questions'

const questions = [
  { id: 1, question: 'Who am I?', answer: true },
  { id: 2, question: 'Octopus can live after being chopped.', answer: true },
  { id: 3, question: 'Quinn can fly.', answer: true },
]

export function fetchQuestions() {
  // return request.get(rootUrl).then((res) => {
  //   return res.body.questions
  // })
  return questions
}
