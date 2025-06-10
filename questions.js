const questions = [
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "Quentin Tarantino",
      "James Cameron",
      "Christopher Nolan"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "Christopher Nolan",
      "James Cameron",
      "Bong Joon-ho"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "James Cameron",
      "Christopher Nolan",
      "Bong Joon-ho"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Quentin Tarantino",
      "Christopher Nolan",
      "David Fincher"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "Quentin Tarantino",
      "James Cameron",
      "David Fincher"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Jane Austen",
      "Harper Lee",
      "George Orwell"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "William Shakespeare",
      "Harper Lee"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "Harper Lee",
      "William Shakespeare"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "William Shakespeare",
      "Harper Lee",
      "George Orwell"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Jupiter",
      "Earth"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Venus",
      "Saturn"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Mars",
      "Earth",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Mars",
      "Jupiter",
      "Earth"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Mars",
      "Venus",
      "Jupiter"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Brazil",
      "France",
      "Spain"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Brazil",
      "Spain",
      "Germany"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Brazil",
      "Italy",
      "Spain"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Germany",
      "Italy",
      "Spain"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "France",
      "Brazil",
      "Italy"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Saturn",
      "Venus"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Saturn"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Saturn",
      "Mars",
      "Earth"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Venus",
      "Jupiter",
      "Saturn"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Earth",
      "Venus",
      "Jupiter"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Jupiter",
      "Venus",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Mars"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Jupiter",
      "Mars",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Jupiter",
      "Venus",
      "Saturn"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Saturn",
      "Mars",
      "Venus"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Saturn"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Earth",
      "Jupiter",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Mars",
      "Venus",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Jupiter",
      "Mars"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Harper Lee",
      "Paulo Coelho",
      "George Orwell"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Harper Lee",
      "George Orwell",
      "William Shakespeare"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "George Orwell",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "Harper Lee",
      "William Shakespeare"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "Quentin Tarantino",
      "Christopher Nolan",
      "David Fincher"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "Christopher Nolan",
      "James Cameron",
      "Bong Joon-ho"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "James Cameron",
      "David Fincher",
      "Bong Joon-ho"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Christopher Nolan",
      "Quentin Tarantino",
      "James Cameron"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "David Fincher",
      "Christopher Nolan",
      "Quentin Tarantino"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Paulo Coelho",
      "George Orwell",
      "William Shakespeare"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Harper Lee",
      "William Shakespeare",
      "George Orwell"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Harper Lee",
      "Paulo Coelho",
      "Jane Austen"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Harper Lee",
      "William Shakespeare",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Canberra",
      "Delhi",
      "Paris"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Paris",
      "Tokyo",
      "Canberra"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Bras\u00edlia",
      "Berlin",
      "Canberra"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Tokyo",
      "Bras\u00edlia",
      "Delhi"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Bras\u00edlia",
      "Paris",
      "Berlin"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Canberra",
      "Berlin",
      "Tokyo"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Earth",
      "Jupiter",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Saturn",
      "Mars",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Venus",
      "Earth",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Venus",
      "Jupiter",
      "Earth"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Mars",
      "Venus",
      "Saturn"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Brazil",
      "Spain",
      "France"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Spain",
      "Italy",
      "Germany"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Brazil",
      "France",
      "Spain"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Italy",
      "Spain",
      "Germany"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Italy",
      "Spain",
      "Brazil"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "France",
      "Brazil",
      "Spain"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Italy",
      "Germany",
      "Spain"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "France",
      "Brazil",
      "Spain"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Brazil",
      "France",
      "Italy"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Spain",
      "Brazil",
      "Italy"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Paulo Coelho",
      "George Orwell",
      "Harper Lee"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Paulo Coelho",
      "William Shakespeare",
      "Harper Lee"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Harper Lee",
      "Paulo Coelho",
      "Jane Austen"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Jane Austen",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "William Shakespeare",
      "Harper Lee",
      "Jane Austen"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Paulo Coelho",
      "George Orwell",
      "Jane Austen"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Harper Lee",
      "George Orwell",
      "William Shakespeare"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Paulo Coelho",
      "Harper Lee",
      "Jane Austen"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "George Orwell",
      "Harper Lee"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Jane Austen",
      "Paulo Coelho",
      "Harper Lee"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Saturn",
      "Jupiter",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Saturn"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Jupiter",
      "Saturn",
      "Venus"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Mars",
      "Venus",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Mars",
      "Saturn"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Venus",
      "Saturn",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Mars",
      "Earth",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Venus",
      "Earth",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Jupiter",
      "Earth",
      "Venus"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Venus",
      "Earth",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Jupiter",
      "Venus"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Saturn",
      "Mars",
      "Earth"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Venus",
      "Jupiter",
      "Mars"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Earth",
      "Mars"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "Paulo Coelho",
      "William Shakespeare"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Harper Lee",
      "William Shakespeare",
      "Jane Austen"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Paulo Coelho",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Jane Austen",
      "Harper Lee",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Jane Austen",
      "Harper Lee",
      "Paulo Coelho"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "Paulo Coelho",
      "William Shakespeare"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "Jane Austen",
      "George Orwell"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "George Orwell",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "George Orwell",
      "Paulo Coelho",
      "William Shakespeare"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "Paulo Coelho"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "Quentin Tarantino",
      "Christopher Nolan",
      "Bong Joon-ho"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "James Cameron",
      "Bong Joon-ho",
      "Quentin Tarantino"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Bong Joon-ho",
      "James Cameron",
      "Christopher Nolan"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Quentin Tarantino",
      "James Cameron",
      "Christopher Nolan"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "Quentin Tarantino",
      "David Fincher",
      "Bong Joon-ho"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Venus",
      "Earth"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Mars",
      "Venus",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Earth",
      "Mars",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Venus",
      "Jupiter",
      "Earth"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Earth",
      "Saturn"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Jupiter",
      "Mars",
      "Venus"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Mars"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Mars",
      "Venus",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Saturn",
      "Venus",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Earth",
      "Saturn"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Spain",
      "Germany",
      "France"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Germany",
      "Italy",
      "Spain"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Italy",
      "Spain",
      "Germany"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "France",
      "Italy",
      "Spain"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Brazil",
      "Spain",
      "France"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Paulo Coelho",
      "George Orwell",
      "Harper Lee"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "George Orwell",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "William Shakespeare",
      "Jane Austen",
      "George Orwell"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "George Orwell",
      "Paulo Coelho",
      "Jane Austen"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "William Shakespeare",
      "Jane Austen",
      "Harper Lee"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "James Cameron",
      "Bong Joon-ho",
      "Christopher Nolan"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "Quentin Tarantino",
      "James Cameron",
      "Christopher Nolan"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Bong Joon-ho",
      "Quentin Tarantino",
      "Christopher Nolan"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Quentin Tarantino",
      "Christopher Nolan",
      "James Cameron"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "David Fincher",
      "Bong Joon-ho",
      "Christopher Nolan"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Earth",
      "Mars",
      "Venus"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Saturn",
      "Earth",
      "Jupiter"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Jupiter",
      "Saturn",
      "Earth"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Jupiter",
      "Venus",
      "Saturn"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Saturn",
      "Venus",
      "Earth"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Germany",
      "France",
      "Spain"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Spain",
      "Italy",
      "Germany"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Italy",
      "Spain",
      "Germany"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Germany",
      "Italy",
      "France"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Germany",
      "Brazil",
      "France"
    ],
    "answer": "Brazil"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Delhi",
      "Tokyo",
      "Canberra"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Tokyo",
      "Bras\u00edlia",
      "Paris"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Canberra",
      "Berlin",
      "Paris"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Bras\u00edlia",
      "Canberra",
      "Tokyo"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Bras\u00edlia",
      "Paris",
      "Berlin"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Berlin",
      "Delhi",
      "Canberra"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Paulo Coelho",
      "Harper Lee",
      "George Orwell"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Harper Lee",
      "William Shakespeare",
      "George Orwell"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "William Shakespeare",
      "Harper Lee",
      "Jane Austen"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "William Shakespeare",
      "George Orwell"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "George Orwell",
      "Jane Austen"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Paris",
      "Berlin",
      "Delhi"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Delhi",
      "Paris",
      "Tokyo"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Canberra",
      "Paris",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Bras\u00edlia",
      "Tokyo",
      "Canberra"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Berlin",
      "Tokyo",
      "Bras\u00edlia"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Bras\u00edlia",
      "Paris",
      "Canberra"
    ],
    "answer": "Canberra"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Paris",
      "Berlin",
      "Delhi"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Tokyo",
      "Bras\u00edlia",
      "Paris"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Delhi",
      "Canberra",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Delhi",
      "Tokyo",
      "Canberra"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Berlin",
      "Bras\u00edlia",
      "Delhi"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Canberra",
      "Tokyo",
      "Berlin"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Venus",
      "Mars",
      "Jupiter"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Saturn",
      "Mars",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Jupiter"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Venus",
      "Jupiter",
      "Saturn"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Earth",
      "Venus",
      "Mars"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Saturn",
      "Earth",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Jupiter",
      "Saturn"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Venus",
      "Saturn",
      "Earth"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Mars",
      "Jupiter",
      "Earth"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Earth",
      "Saturn",
      "Venus"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "Paulo Coelho",
      "Jane Austen"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Paulo Coelho",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "George Orwell",
      "William Shakespeare",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "William Shakespeare",
      "Jane Austen",
      "Harper Lee"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Brazil",
      "Italy",
      "France"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "France",
      "Germany",
      "Italy"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Spain",
      "Brazil",
      "Italy"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Italy",
      "France",
      "Brazil"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Brazil",
      "Germany",
      "Italy"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Venus",
      "Mars",
      "Saturn"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Venus",
      "Jupiter",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Venus",
      "Earth",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Mars",
      "Jupiter",
      "Venus"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Saturn",
      "Mars"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "James Cameron",
      "David Fincher",
      "Christopher Nolan"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "James Cameron",
      "Christopher Nolan",
      "Quentin Tarantino"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Bong Joon-ho",
      "James Cameron",
      "Christopher Nolan"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Christopher Nolan",
      "Quentin Tarantino",
      "David Fincher"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "Bong Joon-ho",
      "James Cameron",
      "David Fincher"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Tokyo",
      "Berlin",
      "Delhi"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Paris",
      "Bras\u00edlia",
      "Delhi"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Tokyo",
      "Bras\u00edlia",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Paris",
      "Bras\u00edlia",
      "Tokyo"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Tokyo",
      "Paris",
      "Bras\u00edlia"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Berlin",
      "Bras\u00edlia",
      "Canberra"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Harper Lee",
      "Paulo Coelho",
      "George Orwell"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Paulo Coelho",
      "William Shakespeare",
      "Jane Austen"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "William Shakespeare",
      "Harper Lee"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Harper Lee",
      "Paulo Coelho",
      "William Shakespeare"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "William Shakespeare",
      "Harper Lee",
      "Paulo Coelho"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "James Cameron",
      "David Fincher",
      "Christopher Nolan"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "James Cameron",
      "Bong Joon-ho",
      "Quentin Tarantino"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Christopher Nolan",
      "Bong Joon-ho",
      "David Fincher"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Quentin Tarantino",
      "Christopher Nolan",
      "James Cameron"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "David Fincher",
      "Quentin Tarantino",
      "Bong Joon-ho"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Jupiter",
      "Mars",
      "Earth"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Venus",
      "Saturn",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Venus",
      "Mars",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Earth",
      "Venus",
      "Saturn"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "France",
      "Italy",
      "Brazil"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Germany",
      "Spain",
      "France"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Spain",
      "Germany",
      "Italy"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Spain",
      "Italy",
      "Brazil"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Germany",
      "Brazil",
      "Italy"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "Paulo Coelho"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "Jane Austen"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "William Shakespeare",
      "Paulo Coelho",
      "Harper Lee"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Jane Austen",
      "George Orwell",
      "Harper Lee"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Canberra",
      "Delhi",
      "Bras\u00edlia"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Bras\u00edlia",
      "Canberra",
      "Paris"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Paris",
      "Canberra",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Canberra",
      "Paris",
      "Tokyo"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Bras\u00edlia",
      "Tokyo",
      "Delhi"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Paris",
      "Canberra",
      "Tokyo"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "Jane Austen",
      "Harper Lee"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Jane Austen",
      "Paulo Coelho",
      "William Shakespeare"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "George Orwell",
      "Paulo Coelho",
      "Jane Austen"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Jane Austen",
      "Paulo Coelho",
      "William Shakespeare"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Jane Austen",
      "Harper Lee",
      "William Shakespeare"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Saturn",
      "Jupiter",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Jupiter",
      "Saturn",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Saturn",
      "Venus",
      "Earth"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Mars",
      "Saturn",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Saturn",
      "Earth",
      "Venus"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "James Cameron",
      "Christopher Nolan",
      "Bong Joon-ho"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "David Fincher",
      "James Cameron",
      "Quentin Tarantino"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Quentin Tarantino",
      "David Fincher",
      "Bong Joon-ho"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Bong Joon-ho",
      "Quentin Tarantino",
      "James Cameron"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "Bong Joon-ho",
      "James Cameron",
      "David Fincher"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Saturn",
      "Mars",
      "Venus"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Jupiter"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Earth",
      "Mars",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Jupiter",
      "Venus",
      "Earth"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Mars",
      "Venus",
      "Earth"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Jupiter",
      "Mars",
      "Earth"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Mars",
      "Jupiter",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Mars",
      "Saturn",
      "Venus"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Venus",
      "Earth",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Mars",
      "Saturn"
    ],
    "answer": "Venus"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Paris",
      "Berlin",
      "Delhi"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Tokyo",
      "Paris",
      "Canberra"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Berlin",
      "Paris",
      "Bras\u00edlia"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Berlin",
      "Tokyo",
      "Delhi"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Paris",
      "Bras\u00edlia",
      "Canberra"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Paris",
      "Canberra",
      "Tokyo"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Earth",
      "Venus"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Saturn"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Saturn"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Mars",
      "Saturn"
    ],
    "answer": "Venus"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Bras\u00edlia",
      "Delhi",
      "Berlin"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Delhi",
      "Paris",
      "Berlin"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Paris",
      "Delhi",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Delhi",
      "Berlin",
      "Tokyo"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Bras\u00edlia",
      "Canberra",
      "Berlin"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Bras\u00edlia",
      "Canberra",
      "Tokyo"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Brazil",
      "Italy",
      "France"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "France",
      "Brazil",
      "Germany"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Brazil",
      "France",
      "Spain"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Italy",
      "Germany",
      "Brazil"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Spain",
      "Germany",
      "Brazil"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Earth",
      "Jupiter",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Mars",
      "Earth",
      "Saturn"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Jupiter"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Jupiter",
      "Saturn",
      "Venus"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Mars",
      "Earth"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Paulo Coelho",
      "George Orwell",
      "Jane Austen"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Jane Austen"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "George Orwell"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "William Shakespeare",
      "George Orwell"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "William Shakespeare",
      "Jane Austen",
      "Harper Lee"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Italy",
      "France",
      "Spain"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Germany",
      "Italy",
      "France"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "France",
      "Spain",
      "Brazil"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Spain",
      "Italy",
      "France"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Brazil",
      "Germany",
      "Spain"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Venus",
      "Jupiter",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Jupiter",
      "Mars"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Jupiter",
      "Saturn",
      "Earth"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Saturn",
      "Jupiter",
      "Mars"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Mars",
      "Earth",
      "Venus"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "Bong Joon-ho",
      "Christopher Nolan",
      "Quentin Tarantino"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "Christopher Nolan",
      "James Cameron",
      "Bong Joon-ho"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Christopher Nolan",
      "James Cameron",
      "Bong Joon-ho"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Quentin Tarantino",
      "Christopher Nolan",
      "Bong Joon-ho"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "Quentin Tarantino",
      "David Fincher",
      "Christopher Nolan"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Jane Austen",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Jane Austen",
      "William Shakespeare",
      "Harper Lee"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "William Shakespeare",
      "Paulo Coelho"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "George Orwell",
      "Paulo Coelho",
      "Jane Austen"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "William Shakespeare",
      "Jane Austen",
      "Harper Lee"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Harper Lee",
      "William Shakespeare",
      "George Orwell"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "George Orwell",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "William Shakespeare",
      "Paulo Coelho",
      "Jane Austen"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "William Shakespeare",
      "George Orwell"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "Jane Austen"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "George Orwell",
      "William Shakespeare",
      "Harper Lee"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "George Orwell",
      "Jane Austen",
      "Paulo Coelho"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Paulo Coelho",
      "Harper Lee",
      "George Orwell"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Earth",
      "Saturn"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Mars"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Mars",
      "Saturn",
      "Jupiter"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Mars",
      "Jupiter",
      "Saturn"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Jupiter",
      "Saturn",
      "Venus"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Harper Lee"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "Harper Lee",
      "George Orwell"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Jane Austen",
      "Paulo Coelho",
      "William Shakespeare"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Spain",
      "Brazil",
      "France"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Spain",
      "Germany",
      "France"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Germany",
      "Spain",
      "France"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Italy",
      "Spain",
      "Brazil"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "France",
      "Italy",
      "Brazil"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "William Shakespeare",
      "Paulo Coelho"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "Jane Austen",
      "Paulo Coelho"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "Jane Austen"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "Jane Austen",
      "George Orwell"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "Paulo Coelho"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Earth",
      "Saturn"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Jupiter",
      "Mars",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Mars"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Venus"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Jupiter",
      "Saturn",
      "Venus"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Venus",
      "Jupiter"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Mars"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Earth",
      "Venus",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Venus",
      "Mars",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Saturn",
      "Venus",
      "Mars"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "Jane Austen"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Harper Lee"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "Paulo Coelho",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "George Orwell",
      "William Shakespeare",
      "Harper Lee"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Jupiter",
      "Mars",
      "Saturn"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Mars"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Jupiter"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Mars",
      "Jupiter",
      "Earth"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Mars",
      "Venus",
      "Jupiter"
    ],
    "answer": "Venus"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Canberra",
      "Delhi",
      "Bras\u00edlia"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Paris",
      "Berlin",
      "Bras\u00edlia"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Delhi",
      "Bras\u00edlia",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Canberra",
      "Berlin",
      "Tokyo"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Bras\u00edlia",
      "Canberra",
      "Tokyo"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Tokyo",
      "Bras\u00edlia",
      "Canberra"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "France",
      "Germany",
      "Italy"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Germany",
      "Brazil",
      "Italy"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "France",
      "Spain",
      "Germany"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Italy",
      "Brazil",
      "Germany"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Spain",
      "Italy",
      "Brazil"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "George Orwell"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "George Orwell",
      "William Shakespeare",
      "Jane Austen"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "Harper Lee",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "Harper Lee",
      "George Orwell"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "Paulo Coelho",
      "George Orwell"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Germany",
      "Italy",
      "France"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Italy",
      "France",
      "Germany"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Italy",
      "Brazil",
      "Spain"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Brazil",
      "Germany",
      "Italy"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Brazil",
      "Germany",
      "Spain"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "France",
      "Spain",
      "Germany"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Germany",
      "Brazil",
      "Spain"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "France",
      "Spain",
      "Germany"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Brazil",
      "Spain",
      "Italy"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Italy",
      "Germany",
      "Brazil"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "David Fincher",
      "Quentin Tarantino",
      "Christopher Nolan"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "James Cameron",
      "David Fincher",
      "Quentin Tarantino"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Bong Joon-ho",
      "David Fincher",
      "James Cameron"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Quentin Tarantino",
      "Bong Joon-ho",
      "Christopher Nolan"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "David Fincher",
      "James Cameron",
      "Christopher Nolan"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Tokyo",
      "Bras\u00edlia",
      "Delhi"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Berlin",
      "Bras\u00edlia",
      "Paris"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Berlin",
      "Canberra",
      "Bras\u00edlia"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Delhi",
      "Tokyo",
      "Paris"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Paris",
      "Bras\u00edlia",
      "Canberra"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Canberra",
      "Delhi",
      "Bras\u00edlia"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Earth",
      "Saturn"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Mars",
      "Earth",
      "Jupiter"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Venus",
      "Mars",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Venus"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Saturn",
      "Venus",
      "Mars"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "Bong Joon-ho",
      "Quentin Tarantino",
      "Christopher Nolan"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "David Fincher",
      "James Cameron",
      "Bong Joon-ho"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Christopher Nolan",
      "Quentin Tarantino",
      "Bong Joon-ho"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Quentin Tarantino",
      "Christopher Nolan",
      "Bong Joon-ho"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "David Fincher",
      "Bong Joon-ho",
      "Quentin Tarantino"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Earth",
      "Mars",
      "Saturn"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Mars"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Venus",
      "Mars",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Jupiter",
      "Venus",
      "Saturn"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Mars",
      "Venus",
      "Earth"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "Paulo Coelho",
      "Jane Austen"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Paulo Coelho",
      "Harper Lee",
      "William Shakespeare"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "Harper Lee",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Jane Austen",
      "Harper Lee",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "Paulo Coelho",
      "Jane Austen"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "France",
      "Italy",
      "Spain"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Germany",
      "Italy",
      "France"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Italy",
      "Spain",
      "Brazil"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Germany",
      "France",
      "Italy"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Brazil",
      "France",
      "Italy"
    ],
    "answer": "Brazil"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Delhi",
      "Tokyo",
      "Canberra"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Paris",
      "Bras\u00edlia",
      "Berlin"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Delhi",
      "Canberra",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Bras\u00edlia",
      "Canberra",
      "Tokyo"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Berlin",
      "Bras\u00edlia",
      "Tokyo"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Paris",
      "Canberra",
      "Berlin"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Venus",
      "Jupiter",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Mars"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Venus",
      "Jupiter",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Jupiter",
      "Saturn",
      "Venus"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Jupiter",
      "Earth"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Venus",
      "Jupiter"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Venus",
      "Jupiter",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Earth",
      "Jupiter",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Venus",
      "Jupiter",
      "Saturn"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Jupiter",
      "Mars"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "Quentin Tarantino",
      "David Fincher",
      "Christopher Nolan"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "Christopher Nolan",
      "James Cameron",
      "Quentin Tarantino"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Bong Joon-ho",
      "David Fincher",
      "Quentin Tarantino"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Quentin Tarantino",
      "Christopher Nolan",
      "James Cameron"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "Bong Joon-ho",
      "Christopher Nolan",
      "David Fincher"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Canberra",
      "Delhi",
      "Paris"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Paris",
      "Delhi",
      "Berlin"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Bras\u00edlia",
      "Paris",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Tokyo",
      "Bras\u00edlia",
      "Canberra"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Paris",
      "Tokyo",
      "Bras\u00edlia"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Tokyo",
      "Canberra",
      "Delhi"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Paulo Coelho",
      "Harper Lee",
      "George Orwell"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Paulo Coelho",
      "George Orwell",
      "Jane Austen"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "George Orwell",
      "William Shakespeare",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Jane Austen",
      "Harper Lee",
      "George Orwell"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "James Cameron",
      "Bong Joon-ho",
      "Christopher Nolan"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "Quentin Tarantino",
      "David Fincher",
      "James Cameron"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Bong Joon-ho",
      "James Cameron",
      "David Fincher"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Bong Joon-ho",
      "David Fincher",
      "Quentin Tarantino"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "David Fincher",
      "Bong Joon-ho",
      "James Cameron"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Delhi",
      "Berlin",
      "Bras\u00edlia"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Canberra",
      "Paris",
      "Berlin"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Berlin",
      "Delhi",
      "Tokyo"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Bras\u00edlia",
      "Paris",
      "Tokyo"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Tokyo",
      "Delhi",
      "Bras\u00edlia"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Canberra",
      "Tokyo",
      "Berlin"
    ],
    "answer": "Canberra"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Delhi",
      "Tokyo",
      "Canberra"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Tokyo",
      "Delhi",
      "Paris"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Canberra",
      "Delhi",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Tokyo",
      "Berlin",
      "Paris"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Paris",
      "Canberra",
      "Bras\u00edlia"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Bras\u00edlia",
      "Tokyo",
      "Canberra"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "David Fincher",
      "Christopher Nolan",
      "Quentin Tarantino"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "James Cameron",
      "Bong Joon-ho",
      "Christopher Nolan"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Bong Joon-ho",
      "David Fincher",
      "Christopher Nolan"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Christopher Nolan",
      "David Fincher",
      "Quentin Tarantino"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "James Cameron",
      "David Fincher",
      "Quentin Tarantino"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Earth",
      "Jupiter",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Jupiter"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Jupiter",
      "Venus",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Saturn",
      "Mars",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Jupiter",
      "Mars",
      "Venus"
    ],
    "answer": "Venus"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Delhi",
      "Canberra",
      "Bras\u00edlia"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Tokyo",
      "Paris",
      "Berlin"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Bras\u00edlia",
      "Canberra",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Bras\u00edlia",
      "Tokyo",
      "Delhi"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Canberra",
      "Bras\u00edlia",
      "Tokyo"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Canberra",
      "Bras\u00edlia",
      "Delhi"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "France",
      "Germany",
      "Italy"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Germany",
      "France",
      "Spain"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Germany",
      "Spain",
      "Brazil"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Germany",
      "Spain",
      "Italy"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Germany",
      "Brazil",
      "France"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Venus",
      "Saturn"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Venus",
      "Mars",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Saturn",
      "Mars",
      "Jupiter"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Venus",
      "Mars",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Saturn",
      "Earth"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Jupiter",
      "Venus",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Mars"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Saturn",
      "Mars",
      "Venus"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Jupiter",
      "Venus",
      "Mars"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Saturn",
      "Earth"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Harper Lee",
      "William Shakespeare",
      "George Orwell"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "Harper Lee",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Jane Austen",
      "Paulo Coelho",
      "Harper Lee"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "George Orwell",
      "Jane Austen",
      "Harper Lee"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "Jane Austen",
      "Paulo Coelho"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Paulo Coelho",
      "William Shakespeare",
      "Harper Lee"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "George Orwell",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "George Orwell",
      "Paulo Coelho",
      "Harper Lee"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Paulo Coelho",
      "Harper Lee",
      "William Shakespeare"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Saturn",
      "Earth"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Mars",
      "Earth",
      "Venus"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Saturn",
      "Earth",
      "Mars"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Mars",
      "Earth",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Mars",
      "Earth",
      "Venus"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Harper Lee",
      "George Orwell",
      "Jane Austen"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Harper Lee",
      "Paulo Coelho",
      "William Shakespeare"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "William Shakespeare",
      "Harper Lee",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "Paulo Coelho"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "France",
      "Italy",
      "Germany"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Spain",
      "Germany",
      "France"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Spain",
      "Brazil",
      "France"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Brazil",
      "Spain",
      "Italy"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Italy",
      "Brazil",
      "France"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "Jane Austen",
      "Harper Lee"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "Jane Austen",
      "Harper Lee"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "George Orwell",
      "Jane Austen",
      "Paulo Coelho"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "Jane Austen"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "Bong Joon-ho",
      "Christopher Nolan",
      "David Fincher"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "Bong Joon-ho",
      "Christopher Nolan",
      "James Cameron"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "David Fincher",
      "Christopher Nolan",
      "Bong Joon-ho"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Quentin Tarantino",
      "Christopher Nolan",
      "James Cameron"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "Christopher Nolan",
      "Bong Joon-ho",
      "David Fincher"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Jane Austen",
      "William Shakespeare",
      "George Orwell"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "William Shakespeare",
      "Harper Lee",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "William Shakespeare",
      "Harper Lee",
      "Paulo Coelho"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Germany",
      "France",
      "Brazil"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Germany",
      "Italy",
      "Brazil"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Italy",
      "Germany",
      "Spain"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "France",
      "Spain",
      "Italy"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Italy",
      "Brazil",
      "Spain"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "Bong Joon-ho",
      "Christopher Nolan",
      "James Cameron"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "James Cameron",
      "Bong Joon-ho",
      "David Fincher"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Bong Joon-ho",
      "James Cameron",
      "Christopher Nolan"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Quentin Tarantino",
      "David Fincher",
      "James Cameron"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "Bong Joon-ho",
      "Christopher Nolan",
      "David Fincher"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Italy",
      "France",
      "Spain"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Brazil",
      "France",
      "Germany"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Germany",
      "Brazil",
      "Spain"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Brazil",
      "Germany",
      "Italy"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Germany",
      "Italy",
      "Brazil"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "Christopher Nolan",
      "Quentin Tarantino",
      "Bong Joon-ho"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "James Cameron",
      "David Fincher",
      "Quentin Tarantino"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Christopher Nolan",
      "Bong Joon-ho",
      "David Fincher"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Quentin Tarantino",
      "James Cameron",
      "Bong Joon-ho"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "Bong Joon-ho",
      "Quentin Tarantino",
      "David Fincher"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Earth",
      "Jupiter",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Jupiter",
      "Venus"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Venus",
      "Saturn",
      "Mars"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Saturn",
      "Jupiter",
      "Mars"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Saturn",
      "Venus",
      "Earth"
    ],
    "answer": "Venus"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Delhi",
      "Paris",
      "Canberra"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Canberra",
      "Paris",
      "Bras\u00edlia"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Tokyo",
      "Paris",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Canberra",
      "Berlin",
      "Tokyo"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Bras\u00edlia",
      "Tokyo",
      "Berlin"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Bras\u00edlia",
      "Berlin",
      "Canberra"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "France",
      "Germany",
      "Spain"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "France",
      "Germany",
      "Brazil"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Italy",
      "Spain",
      "France"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Italy",
      "Spain",
      "France"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "France",
      "Brazil",
      "Italy"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "William Shakespeare"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Paulo Coelho",
      "William Shakespeare",
      "Jane Austen"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "George Orwell",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "Harper Lee",
      "George Orwell"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "William Shakespeare"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Delhi",
      "Paris",
      "Tokyo"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Paris",
      "Tokyo",
      "Canberra"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Berlin",
      "Bras\u00edlia",
      "Delhi"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Tokyo",
      "Berlin",
      "Bras\u00edlia"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Berlin",
      "Bras\u00edlia",
      "Tokyo"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Canberra",
      "Paris",
      "Bras\u00edlia"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Saturn",
      "Earth",
      "Mars"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Venus",
      "Mars",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Mars",
      "Jupiter",
      "Earth"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Mars",
      "Saturn"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "Paulo Coelho",
      "William Shakespeare"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "Harper Lee",
      "George Orwell"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "Harper Lee",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Jane Austen",
      "Harper Lee",
      "Paulo Coelho"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Venus",
      "Mars",
      "Earth"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Venus",
      "Mars",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Earth",
      "Venus",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Venus",
      "Jupiter",
      "Earth"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Earth",
      "Jupiter"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "France",
      "Germany",
      "Brazil"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "France",
      "Italy",
      "Germany"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Spain",
      "Italy",
      "Brazil"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Germany",
      "France",
      "Italy"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Italy",
      "Brazil",
      "Spain"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Harper Lee",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Paulo Coelho",
      "George Orwell",
      "William Shakespeare"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "William Shakespeare",
      "Jane Austen",
      "Paulo Coelho"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Harper Lee",
      "William Shakespeare",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "Jane Austen"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "Jane Austen"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Jane Austen"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Paulo Coelho",
      "Jane Austen",
      "Harper Lee"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "William Shakespeare",
      "George Orwell"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Paulo Coelho",
      "William Shakespeare",
      "Harper Lee"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Harper Lee",
      "George Orwell",
      "William Shakespeare"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Harper Lee",
      "William Shakespeare",
      "George Orwell"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "Harper Lee",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "William Shakespeare",
      "Jane Austen",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Paulo Coelho",
      "Harper Lee",
      "Jane Austen"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Berlin",
      "Paris",
      "Delhi"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Bras\u00edlia",
      "Paris",
      "Tokyo"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Berlin",
      "Bras\u00edlia",
      "Delhi"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Canberra",
      "Tokyo",
      "Paris"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Delhi",
      "Berlin",
      "Bras\u00edlia"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Bras\u00edlia",
      "Canberra",
      "Paris"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Jupiter",
      "Venus",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Earth",
      "Mars",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Saturn",
      "Earth",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Earth",
      "Venus",
      "Saturn"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Italy",
      "Spain",
      "France"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Germany",
      "Brazil",
      "Italy"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Brazil",
      "Spain",
      "Italy"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Italy",
      "Germany",
      "France"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "France",
      "Germany",
      "Brazil"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Harper Lee"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "Jane Austen",
      "Harper Lee"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "George Orwell",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Harper Lee",
      "Paulo Coelho",
      "Jane Austen"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "William Shakespeare",
      "Paulo Coelho",
      "Harper Lee"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Saturn",
      "Earth"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Mars",
      "Jupiter",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Venus"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Jupiter",
      "Venus",
      "Saturn"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Earth",
      "Venus",
      "Saturn"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Jane Austen",
      "George Orwell",
      "Harper Lee"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "George Orwell",
      "Harper Lee"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "William Shakespeare",
      "Paulo Coelho",
      "Jane Austen"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "George Orwell",
      "William Shakespeare",
      "Harper Lee"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Jupiter",
      "Saturn",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Mars",
      "Venus"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Mars",
      "Saturn",
      "Earth"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Venus",
      "Earth",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Earth",
      "Jupiter",
      "Venus"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "Christopher Nolan",
      "Quentin Tarantino",
      "James Cameron"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "Quentin Tarantino",
      "James Cameron",
      "David Fincher"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Christopher Nolan",
      "David Fincher",
      "Bong Joon-ho"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "James Cameron",
      "Quentin Tarantino",
      "Bong Joon-ho"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "Christopher Nolan",
      "David Fincher",
      "Bong Joon-ho"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Canberra",
      "Bras\u00edlia",
      "Delhi"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Paris",
      "Bras\u00edlia",
      "Canberra"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Berlin",
      "Paris",
      "Canberra"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Tokyo",
      "Berlin",
      "Paris"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Canberra",
      "Bras\u00edlia",
      "Delhi"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Canberra",
      "Tokyo",
      "Berlin"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Italy",
      "Germany",
      "France"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Brazil",
      "Germany",
      "France"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Spain",
      "Italy",
      "Brazil"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Italy",
      "Brazil",
      "Germany"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Italy",
      "Brazil",
      "France"
    ],
    "answer": "Brazil"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Canberra",
      "Delhi",
      "Bras\u00edlia"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Paris",
      "Bras\u00edlia",
      "Tokyo"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Delhi",
      "Bras\u00edlia",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Tokyo",
      "Delhi",
      "Berlin"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Bras\u00edlia",
      "Tokyo",
      "Canberra"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Bras\u00edlia",
      "Canberra",
      "Tokyo"
    ],
    "answer": "Canberra"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Berlin",
      "Delhi",
      "Tokyo"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Paris",
      "Berlin",
      "Bras\u00edlia"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Canberra",
      "Bras\u00edlia",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Delhi",
      "Bras\u00edlia",
      "Tokyo"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Bras\u00edlia",
      "Delhi",
      "Canberra"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Canberra",
      "Delhi",
      "Tokyo"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Earth",
      "Jupiter"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Mars"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Mars",
      "Saturn",
      "Jupiter"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Mars",
      "Jupiter",
      "Earth"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Jupiter",
      "Saturn",
      "Venus"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Spain",
      "Italy",
      "France"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Germany",
      "France",
      "Spain"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "France",
      "Germany",
      "Spain"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Spain",
      "Italy",
      "Germany"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Italy",
      "Spain",
      "Brazil"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Saturn",
      "Earth"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Jupiter",
      "Venus",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Earth",
      "Venus",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Saturn",
      "Mars"
    ],
    "answer": "Venus"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Delhi",
      "Tokyo",
      "Canberra"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Paris",
      "Canberra",
      "Berlin"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Tokyo",
      "Delhi",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Berlin",
      "Tokyo",
      "Paris"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Paris",
      "Bras\u00edlia",
      "Canberra"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Bras\u00edlia",
      "Delhi",
      "Canberra"
    ],
    "answer": "Canberra"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Tokyo",
      "Delhi",
      "Berlin"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Paris",
      "Bras\u00edlia",
      "Delhi"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Paris",
      "Delhi",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Tokyo",
      "Paris",
      "Canberra"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Bras\u00edlia",
      "Canberra",
      "Paris"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Berlin",
      "Bras\u00edlia",
      "Canberra"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Saturn",
      "Earth"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Jupiter",
      "Mars"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Saturn",
      "Mars",
      "Venus"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Jupiter",
      "Saturn",
      "Earth"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Earth",
      "Mars"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "William Shakespeare",
      "Paulo Coelho"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "George Orwell",
      "Harper Lee"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "Jane Austen"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "Quentin Tarantino",
      "James Cameron",
      "Christopher Nolan"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "James Cameron",
      "Quentin Tarantino",
      "Bong Joon-ho"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "James Cameron",
      "Christopher Nolan",
      "Bong Joon-ho"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Christopher Nolan",
      "Quentin Tarantino",
      "David Fincher"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "James Cameron",
      "Bong Joon-ho",
      "David Fincher"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Paris",
      "Berlin",
      "Delhi"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Tokyo",
      "Paris",
      "Berlin"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Paris",
      "Berlin",
      "Tokyo"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Tokyo",
      "Berlin",
      "Paris"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Canberra",
      "Bras\u00edlia",
      "Paris"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Delhi",
      "Paris",
      "Canberra"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Germany",
      "Italy",
      "France"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Germany",
      "France",
      "Italy"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Spain",
      "Brazil",
      "France"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Italy",
      "Spain",
      "Germany"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Spain",
      "Brazil",
      "Italy"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Saturn",
      "Jupiter",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Saturn",
      "Earth",
      "Venus"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Saturn",
      "Jupiter",
      "Mars"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Jupiter",
      "Mars",
      "Earth"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Earth",
      "Mars",
      "Venus"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Venus",
      "Mars",
      "Earth"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Mars",
      "Earth",
      "Jupiter"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Mars"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Jupiter",
      "Mars",
      "Saturn"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Mars",
      "Jupiter"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "Bong Joon-ho",
      "James Cameron",
      "Christopher Nolan"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "Christopher Nolan",
      "James Cameron",
      "David Fincher"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Christopher Nolan",
      "Bong Joon-ho",
      "Quentin Tarantino"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Bong Joon-ho",
      "Quentin Tarantino",
      "James Cameron"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "Christopher Nolan",
      "David Fincher",
      "James Cameron"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Paulo Coelho",
      "George Orwell",
      "Harper Lee"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "Jane Austen",
      "Paulo Coelho"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "George Orwell"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "William Shakespeare",
      "Paulo Coelho",
      "Jane Austen"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "George Orwell",
      "William Shakespeare",
      "Harper Lee"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Spain",
      "France",
      "Germany"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "France",
      "Italy",
      "Germany"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Spain",
      "Italy",
      "Germany"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Germany",
      "France",
      "Italy"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Germany",
      "Brazil",
      "Italy"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Italy",
      "France",
      "Spain"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Brazil",
      "Germany",
      "France"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Spain",
      "Italy",
      "Brazil"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Brazil",
      "Germany",
      "Italy"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "France",
      "Brazil",
      "Germany"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "France",
      "Spain",
      "Italy"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "France",
      "Brazil",
      "Germany"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "France",
      "Spain",
      "Brazil"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Italy",
      "France",
      "Spain"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Brazil",
      "Spain",
      "Germany"
    ],
    "answer": "Brazil"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Delhi",
      "Berlin",
      "Bras\u00edlia"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Delhi",
      "Paris",
      "Berlin"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Canberra",
      "Berlin",
      "Bras\u00edlia"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Canberra",
      "Bras\u00edlia",
      "Tokyo"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Canberra",
      "Delhi",
      "Bras\u00edlia"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Canberra",
      "Berlin",
      "Tokyo"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Brazil",
      "France",
      "Germany"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Spain",
      "Germany",
      "Brazil"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Italy",
      "France",
      "Spain"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Spain",
      "Italy",
      "France"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "France",
      "Brazil",
      "Germany"
    ],
    "answer": "Brazil"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Delhi",
      "Berlin",
      "Tokyo"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Paris",
      "Tokyo",
      "Canberra"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Tokyo",
      "Berlin",
      "Canberra"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Paris",
      "Tokyo",
      "Berlin"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Bras\u00edlia",
      "Tokyo",
      "Berlin"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Tokyo",
      "Canberra",
      "Delhi"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Jane Austen",
      "George Orwell",
      "William Shakespeare"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Paulo Coelho",
      "William Shakespeare",
      "George Orwell"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "William Shakespeare",
      "George Orwell"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Harper Lee",
      "Paulo Coelho",
      "William Shakespeare"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "William Shakespeare",
      "Jane Austen"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "George Orwell",
      "William Shakespeare",
      "Harper Lee"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "Jane Austen",
      "George Orwell"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Paulo Coelho",
      "Harper Lee",
      "George Orwell"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "David Fincher",
      "Quentin Tarantino",
      "Christopher Nolan"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "Christopher Nolan",
      "James Cameron",
      "David Fincher"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "James Cameron",
      "David Fincher",
      "Bong Joon-ho"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "David Fincher",
      "Quentin Tarantino",
      "Bong Joon-ho"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "David Fincher",
      "Christopher Nolan",
      "Bong Joon-ho"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Paris",
      "Canberra",
      "Delhi"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Delhi",
      "Canberra",
      "Paris"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Bras\u00edlia",
      "Berlin",
      "Canberra"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Bras\u00edlia",
      "Paris",
      "Tokyo"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Paris",
      "Delhi",
      "Bras\u00edlia"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Delhi",
      "Canberra",
      "Paris"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "James Cameron",
      "David Fincher",
      "Christopher Nolan"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "Bong Joon-ho",
      "David Fincher",
      "James Cameron"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Bong Joon-ho",
      "James Cameron",
      "David Fincher"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "David Fincher",
      "Bong Joon-ho",
      "Quentin Tarantino"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "Quentin Tarantino",
      "David Fincher",
      "James Cameron"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "Bong Joon-ho",
      "Christopher Nolan",
      "Quentin Tarantino"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "Christopher Nolan",
      "James Cameron",
      "Quentin Tarantino"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Christopher Nolan",
      "James Cameron",
      "Bong Joon-ho"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "James Cameron",
      "Bong Joon-ho",
      "Quentin Tarantino"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "Bong Joon-ho",
      "Christopher Nolan",
      "David Fincher"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Harper Lee",
      "Paulo Coelho",
      "George Orwell"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "George Orwell",
      "William Shakespeare",
      "Harper Lee"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "Paulo Coelho",
      "George Orwell"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "Harper Lee",
      "George Orwell"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Paulo Coelho",
      "Jane Austen",
      "Harper Lee"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Jane Austen",
      "George Orwell",
      "William Shakespeare"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Harper Lee",
      "Paulo Coelho",
      "William Shakespeare"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "George Orwell",
      "Harper Lee"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Harper Lee",
      "Paulo Coelho",
      "Jane Austen"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "Jane Austen"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Jupiter",
      "Saturn"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Venus",
      "Earth",
      "Mars"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Venus",
      "Earth",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Venus",
      "Saturn",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Jupiter",
      "Saturn"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "George Orwell"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Paulo Coelho",
      "William Shakespeare",
      "Jane Austen"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Paulo Coelho",
      "George Orwell",
      "Jane Austen"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "William Shakespeare"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Spain",
      "France",
      "Germany"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Italy",
      "Germany",
      "France"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Spain",
      "France",
      "Brazil"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Spain",
      "Germany",
      "Italy"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Brazil",
      "Italy",
      "Spain"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Venus",
      "Mars",
      "Saturn"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Saturn",
      "Earth",
      "Jupiter"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Earth",
      "Mars",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Mars",
      "Earth",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Earth",
      "Jupiter",
      "Venus"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Saturn",
      "Jupiter",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Mars",
      "Jupiter"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Jupiter",
      "Venus",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Venus"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Jupiter",
      "Venus",
      "Saturn"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Jupiter",
      "Mars",
      "Venus"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Venus",
      "Jupiter"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Saturn",
      "Earth",
      "Jupiter"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Mars",
      "Venus",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Saturn",
      "Venus",
      "Jupiter"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "William Shakespeare",
      "Paulo Coelho"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "Paulo Coelho",
      "William Shakespeare",
      "George Orwell"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "William Shakespeare",
      "George Orwell"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "William Shakespeare",
      "Paulo Coelho",
      "George Orwell"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "France",
      "Germany",
      "Brazil"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Spain",
      "Germany",
      "Italy"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "France",
      "Germany",
      "Spain"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Spain",
      "Germany",
      "Italy"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Spain",
      "France",
      "Brazil"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Spain",
      "Brazil",
      "France"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Spain",
      "Brazil",
      "Germany"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Brazil",
      "Spain",
      "Italy"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "France",
      "Brazil",
      "Italy"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Brazil",
      "France",
      "Germany"
    ],
    "answer": "Brazil"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Delhi",
      "Paris",
      "Berlin"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Bras\u00edlia",
      "Berlin",
      "Paris"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Bras\u00edlia",
      "Canberra",
      "Berlin"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Tokyo",
      "Canberra",
      "Delhi"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Bras\u00edlia",
      "Delhi",
      "Berlin"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Tokyo",
      "Delhi",
      "Canberra"
    ],
    "answer": "Canberra"
  },
  {
    "question": "What is the capital of India?",
    "options": [
      "Berlin",
      "Canberra",
      "Delhi"
    ],
    "answer": "Delhi"
  },
  {
    "question": "What is the capital of France?",
    "options": [
      "Berlin",
      "Paris",
      "Tokyo"
    ],
    "answer": "Paris"
  },
  {
    "question": "What is the capital of Germany?",
    "options": [
      "Delhi",
      "Berlin",
      "Tokyo"
    ],
    "answer": "Berlin"
  },
  {
    "question": "What is the capital of Japan?",
    "options": [
      "Berlin",
      "Tokyo",
      "Bras\u00edlia"
    ],
    "answer": "Tokyo"
  },
  {
    "question": "What is the capital of Brazil?",
    "options": [
      "Bras\u00edlia",
      "Delhi",
      "Berlin"
    ],
    "answer": "Bras\u00edlia"
  },
  {
    "question": "What is the capital of Australia?",
    "options": [
      "Tokyo",
      "Berlin",
      "Canberra"
    ],
    "answer": "Canberra"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "William Shakespeare",
      "Harper Lee",
      "George Orwell"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "Harper Lee",
      "George Orwell"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "William Shakespeare",
      "Paulo Coelho",
      "Harper Lee"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Paulo Coelho",
      "Jane Austen",
      "Harper Lee"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Saturn",
      "Jupiter",
      "Mars"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Mars",
      "Earth",
      "Jupiter"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Saturn",
      "Jupiter",
      "Earth"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Venus",
      "Mars",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Jupiter",
      "Venus",
      "Mars"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "Christopher Nolan",
      "Quentin Tarantino",
      "James Cameron"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "James Cameron",
      "Quentin Tarantino",
      "Christopher Nolan"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Bong Joon-ho",
      "Quentin Tarantino",
      "David Fincher"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Quentin Tarantino",
      "David Fincher",
      "James Cameron"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "Bong Joon-ho",
      "David Fincher",
      "Christopher Nolan"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "France",
      "Spain",
      "Italy"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Brazil",
      "France",
      "Germany"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Spain",
      "Brazil",
      "France"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Spain",
      "France",
      "Italy"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Germany",
      "Brazil",
      "Italy"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "France",
      "Italy",
      "Spain"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Italy",
      "France",
      "Germany"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Italy",
      "Spain",
      "Germany"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Italy",
      "France",
      "Germany"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Germany",
      "France",
      "Brazil"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Paulo Coelho",
      "George Orwell",
      "Harper Lee"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Jane Austen"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "George Orwell",
      "Paulo Coelho",
      "Jane Austen"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "George Orwell",
      "Jane Austen",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "William Shakespeare",
      "Jane Austen"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "James Cameron",
      "Christopher Nolan",
      "David Fincher"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "Quentin Tarantino",
      "James Cameron",
      "David Fincher"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Bong Joon-ho",
      "James Cameron",
      "Quentin Tarantino"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "James Cameron",
      "Bong Joon-ho",
      "Quentin Tarantino"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "David Fincher",
      "Bong Joon-ho",
      "Quentin Tarantino"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "William Shakespeare",
      "Paulo Coelho"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "George Orwell",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Jane Austen",
      "Harper Lee",
      "Paulo Coelho"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "William Shakespeare",
      "Paulo Coelho"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Venus",
      "Mars",
      "Jupiter"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Venus"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Venus",
      "Saturn",
      "Earth"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Earth",
      "Jupiter",
      "Mars"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Earth",
      "Saturn"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "France",
      "Spain",
      "Brazil"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Germany",
      "Brazil",
      "Spain"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Germany",
      "Spain",
      "Brazil"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Italy",
      "Brazil",
      "France"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Germany",
      "Italy",
      "Brazil"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Spain",
      "France",
      "Germany"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Germany",
      "Spain",
      "France"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Spain",
      "France",
      "Brazil"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "Germany",
      "Italy",
      "Spain"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Brazil",
      "Spain",
      "France"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "David Fincher",
      "Bong Joon-ho",
      "Christopher Nolan"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "David Fincher",
      "Christopher Nolan",
      "James Cameron"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Christopher Nolan",
      "James Cameron",
      "Bong Joon-ho"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Quentin Tarantino",
      "James Cameron",
      "Bong Joon-ho"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "David Fincher",
      "Christopher Nolan",
      "Quentin Tarantino"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Venus",
      "Earth"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Mars",
      "Jupiter"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Earth",
      "Saturn",
      "Mars"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Earth",
      "Mars",
      "Jupiter"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Venus",
      "Jupiter",
      "Mars"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "William Shakespeare",
      "Jane Austen"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Jane Austen"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Paulo Coelho",
      "Jane Austen",
      "George Orwell"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "Jane Austen",
      "George Orwell"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Harper Lee",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "George Orwell",
      "Harper Lee"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "Paulo Coelho",
      "Jane Austen",
      "George Orwell"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "William Shakespeare",
      "Harper Lee"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Harper Lee",
      "Jane Austen",
      "William Shakespeare"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "David Fincher",
      "Quentin Tarantino",
      "Christopher Nolan"
    ],
    "answer": "Christopher Nolan"
  },
  {
    "question": "Who directed the movie 'Titanic'?",
    "options": [
      "David Fincher",
      "Christopher Nolan",
      "James Cameron"
    ],
    "answer": "James Cameron"
  },
  {
    "question": "Who directed the movie 'Parasite'?",
    "options": [
      "Bong Joon-ho",
      "Quentin Tarantino",
      "David Fincher"
    ],
    "answer": "Bong Joon-ho"
  },
  {
    "question": "Who directed the movie 'Pulp Fiction'?",
    "options": [
      "Bong Joon-ho",
      "Quentin Tarantino",
      "James Cameron"
    ],
    "answer": "Quentin Tarantino"
  },
  {
    "question": "Who directed the movie 'The Social Network'?",
    "options": [
      "Quentin Tarantino",
      "James Cameron",
      "David Fincher"
    ],
    "answer": "David Fincher"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "George Orwell",
      "Paulo Coelho",
      "Harper Lee"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "George Orwell",
      "William Shakespeare",
      "Jane Austen"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "George Orwell",
      "Harper Lee",
      "Jane Austen"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Harper Lee",
      "George Orwell",
      "Paulo Coelho"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "Jane Austen",
      "Harper Lee",
      "William Shakespeare"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Saturn",
      "Mars",
      "Venus"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Earth",
      "Jupiter",
      "Saturn"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Saturn",
      "Venus",
      "Jupiter"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Mars",
      "Jupiter",
      "Venus"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Saturn",
      "Jupiter",
      "Venus"
    ],
    "answer": "Venus"
  },
  {
    "question": "Which country won the FIFA World Cup in 2018?",
    "options": [
      "Italy",
      "Brazil",
      "France"
    ],
    "answer": "France"
  },
  {
    "question": "Which country won the FIFA World Cup in 2014?",
    "options": [
      "Brazil",
      "Spain",
      "Germany"
    ],
    "answer": "Germany"
  },
  {
    "question": "Which country won the FIFA World Cup in 2010?",
    "options": [
      "Brazil",
      "Italy",
      "Spain"
    ],
    "answer": "Spain"
  },
  {
    "question": "Which country won the FIFA World Cup in 2006?",
    "options": [
      "France",
      "Italy",
      "Brazil"
    ],
    "answer": "Italy"
  },
  {
    "question": "Which country won the FIFA World Cup in 2002?",
    "options": [
      "Brazil",
      "France",
      "Spain"
    ],
    "answer": "Brazil"
  },
  {
    "question": "Who wrote '1984'?",
    "options": [
      "Paulo Coelho",
      "George Orwell",
      "Harper Lee"
    ],
    "answer": "George Orwell"
  },
  {
    "question": "Who wrote 'Hamlet'?",
    "options": [
      "William Shakespeare",
      "Harper Lee",
      "Paulo Coelho"
    ],
    "answer": "William Shakespeare"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": [
      "George Orwell",
      "Jane Austen",
      "Harper Lee"
    ],
    "answer": "Jane Austen"
  },
  {
    "question": "Who wrote 'The Alchemist'?",
    "options": [
      "Paulo Coelho",
      "Jane Austen",
      "George Orwell"
    ],
    "answer": "Paulo Coelho"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "George Orwell",
      "Paulo Coelho",
      "Harper Lee"
    ],
    "answer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": [
      "Mars",
      "Jupiter",
      "Venus"
    ],
    "answer": "Mars"
  },
  {
    "question": "Which planet is known as the Blue Planet?",
    "options": [
      "Venus",
      "Mars",
      "Earth"
    ],
    "answer": "Earth"
  },
  {
    "question": "Which planet is known as the Ringed Planet?",
    "options": [
      "Jupiter",
      "Earth",
      "Saturn"
    ],
    "answer": "Saturn"
  },
  {
    "question": "Which planet is known as the Giant Planet?",
    "options": [
      "Jupiter",
      "Venus",
      "Earth"
    ],
    "answer": "Jupiter"
  },
  {
    "question": "Which planet is known as the Morning Star?",
    "options": [
      "Jupiter",
      "Earth",
      "Venus"
    ],
    "answer": "Venus"
  },
  {
    "question": "Who directed the movie 'Inception'?",
    "options": [
      "Bong Joon-ho",
      "Christopher Nolan",
      "James Cameron"
    ],
    "answer": "Christopher Nolan"
  }
];
