const questions = [];

const templates = [
  {
    template: "What is the capital of {country}?",
    options: {
      India: "Delhi",
      France: "Paris",
      Japan: "Tokyo",
      Germany: "Berlin",
      Australia: "Canberra",
      Italy: "Rome"
    }
  },
  {
    template: "Which planet is known as the {nickname}?",
    options: {
      "Red Planet": "Mars",
      "Blue Planet": "Earth",
      "Ringed Planet": "Saturn",
      "Giant Planet": "Jupiter",
      "Evening Star": "Venus"
    }
  },
  {
    template: "Who wrote '{book}'?",
    options: {
      "1984": "George Orwell",
      "Hamlet": "William Shakespeare",
      "Pride and Prejudice": "Jane Austen",
      "The Alchemist": "Paulo Coelho",
      "Animal Farm": "George Orwell"
    }
  },
  {
    template: "What is the square root of {number}?",
    options: {
      "64": "8",
      "100": "10",
      "81": "9",
      "49": "7",
      "36": "6"
    }
  },
  {
    template: "Which year did {country} gain independence?",
    options: {
      "India": "1947",
      "USA": "1776",
      "Bangladesh": "1971",
      "Nigeria": "1960",
      "Pakistan": "1947"
    }
  }
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

while (questions.length < 1000) {
  const block = templates[Math.floor(Math.random() * templates.length)];
  const entries = Object.entries(block.options);
  const [key, correctAnswer] = entries[Math.floor(Math.random() * entries.length)];

  const questionText = block.template
    .replace("{country}", key)
    .replace("{nickname}", key)
    .replace("{book}", key)
    .replace("{number}", key);

  const options = [correctAnswer];
  while (options.length < 3) {
    const random = entries[Math.floor(Math.random() * entries.length)][1];
    if (!options.includes(random)) options.push(random);
  }

  questions.push({
    question: `${questionText} (Q${questions.length + 1})`,
    options: shuffle(options),
    answer: correctAnswer
  });
}
