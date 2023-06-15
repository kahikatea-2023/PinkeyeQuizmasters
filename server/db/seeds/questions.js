exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('questions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          id: 1,
          question: 'The Earth is the closest planet to the Sun.',
          answer: 'false',
          fact: 'Mercury is the closest planet to the Sun.',
        },
        {
          id: 2,
          question: 'The Great Wall of China is visible from space.',
          answer: 'false',
          fact: 'The Great Wall of China is not easily visible from space without aid.',
        },
        {
          id: 3,
          question: 'The human brain is the largest organ.',
          answer: 'false',
          fact: 'The skin is the largest organ in the human body.',
        },
        {
          id: 4,
          question: 'All mammals lay eggs.',
          answer: 'false',
          fact: 'Mammals are characterized by giving live birth, not laying eggs.',
        },
        {
          id: 5,
          question: 'The currency of Japan is the Yuan.',
          answer: 'false',
          fact: 'The currency of Japan is the Yen.',
        },
        {
          id: 6,
          question: 'Mount Everest is the tallest mountain.',
          answer: 'true',
          fact: 'Mount Everest is the tallest mountain above sea level.',
        },
        {
          id: 7,
          question:
            "Oxygen is the most abundant element in the Earth's atmosphere.",
          answer: 'false',
          fact: "Nitrogen is the most abundant element in the Earth's atmosphere.",
        },
        {
          id: 8,
          question: 'Leonardo da Vinci painted the Mona Lisa.',
          answer: 'true',
          fact: 'Leonardo da Vinci is credited with painting the Mona Lisa.',
        },
        {
          id: 9,
          question: 'The Sahara Desert is the largest desert.',
          answer: 'true',
          fact: 'The Sahara Desert is the largest hot desert on Earth.',
        },
        {
          id: 10,
          question: 'The capital of Canada is Toronto.',
          answer: 'false',
          fact: 'The capital of Canada is Ottawa.',
        },
      ])
    })
}
