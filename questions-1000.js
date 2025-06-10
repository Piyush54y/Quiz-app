const questions = [];

const templates = [
  {
    template: "What is the capital of {country}?",
    options: {
      India: "Delhi",
      France: "Paris",
      Germany: "Berlin",
      Japan: "Tokyo",
      Brazil: "Brasília",
      Australia: "Canberra",
      Canada: "Ottawa",
      Italy: "Rome",
      China: "Beijing",
      Russia: "Moscow"
    }
  },
  {
    template: "Which planet is known as the {nickname}?",
    options: {
      "Red Planet": "Mars",
      "Blue Planet": "Earth",
      "Ringed Planet": "Saturn",
      "Giant Planet": "Jupiter",
      "Evening Star": "Venus",
      "Dwarf Planet": "Pluto"
    }
  },
  {
    template: "Who wrote '{book}'?",
    options: {
      "1984": "George Orwell",
      "Hamlet": "William Shakespeare",
      "Pride and Prejudice": "Jane Austen",
      "The Alchemist": "Paulo Coelho",
      "Animal Farm": "George Orwell",
      "The Kite Runner": "Khaled Hosseini"
    }
  },
  {
    template: "What is the square root of {number}?",
    options: {
      "64": "8",
      "100": "10",
      "81": "9",
      "49": "7",
      "36": "6",
      "25": "5"
    }
  },
  {
    template: "Which year did {country} gain independence?",
    options: {
      "India": "1947",
      "USA": "1776",
      "Pakistan": "1947",
      "Bangladesh": "1971",
      "Nigeria": "1960",
      "South Africa": "1994"
    }
  },
  {
    template: "Which ocean is the largest?",
    options: {
      "largest": "Pacific Ocean",
      "second largest": "Atlantic Ocean",
      "third largest": "Indian Ocean"
    }
  },
  {
    template: "Which is the national animal of {country}?",
    options: {
      "India": "Tiger",
      "Australia": "Kangaroo",
      "USA": "Bald Eagle",
      "Russia": "Bear",
      "China": "Panda"
    }
  }
];

// Utility to shuffle array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Generate 1000 questions
while (questions.length < 1000) {
  const block = templates[Math.floor(Math.random() * templates.length)];
  const entries = Object.entries(block.options);
  const [key, correctAnswer] = entries[Math.floor(Math.random() * entries.length)];

  const questionText = block.template
    .replace("{country}", key)
    .replace("{nickname}", key)
    .replace("{book}", key)
    .replace("{number}", key);

  // Create answer options
  const options = [correctAnswer];
  while (options.length < 3) {
    const randomOpt = entries[Math.floor(Math.random() * entries.length)][1];
    if (!options.includes(randomOpt)) options.push(randomOpt);
  }

  questions.push({
    question: `${questionText} (Q${questions.length + 1})`,
    options: shuffle(options),
    answer: correctAnswer
  });
}
