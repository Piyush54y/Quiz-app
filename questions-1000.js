const questions = [
  {
    question: "What is the capital of India? (Q1)",
    options: ["Mumbai", "Delhi", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "What is the capital of France? (Q2)",
    options: ["Paris", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet? (Q3)",
    options: ["Mars", "Earth", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Who wrote '1984'? (Q4)",
    options: ["George Orwell", "J.K. Rowling", "Jane Austen"],
    answer: "George Orwell"
  },
  {
    question: "What is the square root of 64? (Q5)",
    options: ["8", "6", "9"],
    answer: "8"
  },
  {
    question: "In which year did India gain independence? (Q6)",
    options: ["1947", "1950", "1930"],
    answer: "1947"
  },
  {
    question: "Who is known as the father of Physics? (Q7)",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"],
    answer: "Isaac Newton"
  },
  {
    question: "What is the capital of Japan? (Q8)",
    options: ["Tokyo", "Kyoto", "Osaka"],
    answer: "Tokyo"
  },
  {
    question: "Which planet is known as the Blue Planet? (Q9)",
    options: ["Earth", "Uranus", "Venus"],
    answer: "Earth"
  },
  {
    question: "Who wrote 'Hamlet'? (Q10)",
    options: ["William Shakespeare", "Leo Tolstoy", "George Orwell"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the square root of 100? (Q11)",
    options: ["10", "9", "8"],
    answer: "10"
  },
  {
    question: "In which year did USA gain independence? (Q12)",
    options: ["1776", "1789", "1800"],
    answer: "1776"
  },
  {
    question: "Who is known as the father of Computer Science? (Q13)",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates"],
    answer: "Charles Babbage"
  },
  {
    question: "What is the capital of Brazil? (Q14)",
    options: ["Rio", "Brasília", "São Paulo"],
    answer: "Brasília"
  },
  {
    question: "Which planet is known as the Ringed Planet? (Q15)",
    options: ["Saturn", "Jupiter", "Uranus"],
    answer: "Saturn"
  },
  {
    question: "Who wrote 'The Alchemist'? (Q16)",
    options: ["Paulo Coelho", "George Orwell", "Chetan Bhagat"],
    answer: "Paulo Coelho"
  },
  {
    question: "What is the square root of 81? (Q17)",
    options: ["9", "8", "10"],
    answer: "9"
  },
  {
    question: "In which year did Bangladesh gain independence? (Q18)",
    options: ["1971", "1965", "1952"],
    answer: "1971"
  },
  {
    question: "Who is known as the father of Modern Chemistry? (Q19)",
    options: ["Antoine Lavoisier", "Robert Boyle", "Dmitri Mendeleev"],
    answer: "Antoine Lavoisier"
  },
  {
    question: "What is the capital of Australia? (Q20)",
    options: ["Sydney", "Melbourne", "Canberra"],
    answer: "Canberra"
  },
  {
    question: "Which planet is known as the Morning Star? (Q21)",
    options: ["Venus", "Mars", "Neptune"],
    answer: "Venus"
  },
  {
    question: "Who wrote 'Pride and Prejudice'? (Q22)",
    options: ["Jane Austen", "J.K. Rowling", "Emily Brontë"],
    answer: "Jane Austen"
  },
  {
    question: "What is the square root of 49? (Q23)",
    options: ["7", "6", "8"],
    answer: "7"
  },
  {
    question: "In which year did Nigeria gain independence? (Q24)",
    options: ["1960", "1975", "1980"],
    answer: "1960"
  },
  {
    question: "Who is known as the father of Biology? (Q25)",
    options: ["Aristotle", "Darwin", "Pasteur"],
    answer: "Aristotle"
  },
  {
    question: "What is the capital of Germany? (Q26)",
    options: ["Berlin", "Munich", "Frankfurt"],
    answer: "Berlin"
  },
  {
    question: "Which planet is known as the Giant Planet? (Q27)",
    options: ["Jupiter", "Saturn", "Uranus"],
    answer: "Jupiter"
  },
  {
    question: "Who wrote 'Animal Farm'? (Q28)",
    options: ["George Orwell", "Leo Tolstoy", "Mark Twain"],
    answer: "George Orwell"
  },
  {
    question: "What is the square root of 36? (Q29)",
    options: ["6", "5", "7"],
    answer: "6"
  },
  {
    question: "In which year did Pakistan gain independence? (Q30)",
    options: ["1947", "1948", "1956"],
    answer: "1947"
  },
  {
    question: "Who is known as the father of Mathematics? (Q31)",
    options: ["Archimedes", "Euclid", "Pythagoras"],
    answer: "Archimedes"
  },
  {
    question: "What is the capital of Canada? (Q32)",
    options: ["Ottawa", "Toronto", "Montreal"],
    answer: "Ottawa"
  },
  {
    question: "Who is known as the father of Modern Chemistry? (Q33)",
    options: ["Antoine Lavoisier", "Robert Boyle", "Mendeleev"],
    answer: "Antoine Lavoisier"
  },
  {
    question: "What is the square root of 25? (Q34)",
    options: ["5", "6", "4"],
    answer: "5"
  },
  {
    question: "Who wrote 'Animal Farm'? (Q35)",
    options: ["George Orwell", "Ernest Hemingway", "Agatha Christie"],
    answer: "George Orwell"
  },
  {
    question: "Which planet is known as the Evening Star? (Q36)",
    options: ["Venus", "Mercury", "Saturn"],
    answer: "Venus"
  },
  {
    question: "What is the capital of Italy? (Q37)",
    options: ["Rome", "Venice", "Milan"],
    answer: "Rome"
  },
  {
    question: "In which year did South Africa gain independence? (Q38)",
    options: ["1994", "1990", "1980"],
    answer: "1994"
  },
  {
    question: "Who is known as the father of Modern Physics? (Q39)",
    options: ["Albert Einstein", "Newton", "Galileo"],
    answer: "Albert Einstein"
  },
  {
    question: "What is the capital of Russia? (Q40)",
    options: ["Moscow", "Saint Petersburg", "Kazan"],
    answer: "Moscow"
  },
  {
    question: "What is the square root of 16? (Q41)",
    options: ["4", "5", "6"],
    answer: "4"
  },
  {
    question: "Which planet is known as the Cold Planet? (Q42)",
    options: ["Uranus", "Neptune", "Pluto"],
    answer: "Neptune"
  },
  {
    question: "Who wrote '1984'? (Q43)",
    options: ["George Orwell", "H.G. Wells", "Aldous Huxley"],
    answer: "George Orwell"
  },
  {
    question: "What is the capital of China? (Q44)",
    options: ["Beijing", "Shanghai", "Shenzhen"],
    answer: "Beijing"
  },
  {
    question: "Who is known as the father of Biology? (Q45)",
    options: ["Aristotle", "Darwin", "Newton"],
    answer: "Aristotle"
  },
  {
    question: "What is the square root of 121? (Q46)",
    options: ["11", "10", "12"],
    answer: "11"
  },
  {
    question: "In which year did Germany reunify? (Q47)",
    options: ["1990", "1989", "1991"],
    answer: "1990"
  },
  {
    question: "Which planet has the most moons? (Q48)",
    options: ["Saturn", "Jupiter", "Neptune"],
    answer: "Saturn"
  },
  {
    question: "Who wrote 'Pride and Prejudice'? (Q49)",
    options: ["Jane Austen", "Emily Brontë", "Agatha Christie"],
    answer: "Jane Austen"
  },
  {
    question: "What is the capital of the United Kingdom? (Q50)",
    options: ["London", "Manchester", "Edinburgh"],
    answer: "London"
  },
