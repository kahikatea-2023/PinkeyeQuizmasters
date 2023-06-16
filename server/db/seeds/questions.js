exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('questions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          id: 1,
          question: 'Hawaiian pizza comes from Canada.',
          answer: 'true',
          fact: 'It was created in 1962 by Sam Panopoulos at the Satellite Restaurant in Ontario, Canada.',
        },
        {
          id: 2,
          question:
            'Sea otters have a favorite rock they use to break open food.',
          answer: 'true',
          fact: 'They keep these treasures in the loose skin under their arms.',
        },
        {
          id: 3,
          question: 'The blue whale is the biggest animal to have ever lived.',
          answer: 'true',
          fact: 'That includes dinosaurs!',
        },
        {
          id: 4,
          question: 'South Africa has one capital.',
          answer: 'false',
          fact: 'It has three: Pretoria, Cape Town, and Bloemfontein.',
        },
        {
          id: 5,
          question:
            'Pinocchio was the first animated, full-color Walt Disney feature film.',
          answer: 'false',
          fact: 'It was Snow White and the Seven Dwarfs.',
        },
        {
          id: 6,
          question: 'Dr. Pepper is the oldest soft drink in America.',
          answer: 'true',
          fact: 'It was first sold in 1885 in a drug store in Waco, Texas.',
        },
        {
          id: 7,
          question: 'The letter “T” is the most common in the English Language',
          answer: 'false',
          fact: "it's the letter “E”.",
        },
        {
          id: 8,
          question: 'An astronaut has played golf on the moon.',
          answer: 'true',
          fact: 'Alan Shepard took time out of his space duties to hit the links, noting one of his shots “went for miles and miles.',
        },
        {
          id: 9,
          question:
            'Brazil is the only nation to have played in every World Cup finals tournament.',
          answer: 'true',
          fact: 'The soccer-crazed country has also won the most titles.',
        },
        {
          id: 10,
          question: 'Santa Claus has his own postal code.',
          answer: 'true',
          fact: 'In Canada the Postal Service has designated H0H 0H0 (ho ho ho) as the official postcode for letters to Santa. Volunteers have been helping Santa reply to the letters for over 30 years.',
        },
        {
          id: 11,
          question: 'The Earth is the closest planet to the Sun.',
          answer: 'false',
          fact: 'Mercury is the closest planet to the Sun.',
        },
        {
          id: 12,
          question: 'The Great Wall of China is visible from space.',
          answer: 'false',
          fact: 'The Great Wall of China is not easily visible from space without aid.',
        },
        {
          id: 13,
          question: 'The human brain is the largest organ.',
          answer: 'false',
          fact: 'The skin is the largest organ in the human body.',
        },
        {
          id: 14,
          question: 'All mammals lay eggs.',
          answer: 'false',
          fact: 'Mammals are characterized by giving live birth, not laying eggs.',
        },
        {
          id: 15,
          question: 'The currency of Japan is the Yuan.',
          answer: 'false',
          fact: 'The currency of Japan is the Yen.',
        },
        {
          id: 16,
          question: 'Mount Everest is the tallest mountain.',
          answer: 'true',
          fact: 'Mount Everest is the tallest mountain above sea level.',
        },
        {
          id: 17,
          question:
            "Oxygen is the most abundant element in the Earth's atmosphere.",
          answer: 'false',
          fact: "Nitrogen is the most abundant element in the Earth's atmosphere.",
        },
        {
          id: 18,
          question: 'Leonardo da Vinci painted the Mona Lisa.',
          answer: 'true',
          fact: 'Leonardo da Vinci is credited with painting the Mona Lisa.',
        },
        {
          id: 19,
          question: 'The Sahara Desert is the largest desert.',
          answer: 'true',
          fact: 'The Sahara Desert is the largest hot desert on Earth.',
        },
        {
          id: 20,
          question: 'The capital of Canada is Toronto.',
          answer: 'false',
          fact: 'The capital of Canada is Ottawa.',
        },
      ])
    })
}
