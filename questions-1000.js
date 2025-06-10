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
{
    question: "Which country is known as the Land of the Rising Sun? (Q51)",
    options: ["Japan", "China", "South Korea"],
    answer: "Japan"
  },
  {
    question: "What is the chemical symbol for water? (Q52)",
    options: ["H2O", "O2", "CO2"],
    answer: "H2O"
  },
  {
    question: "Which continent is the largest by area? (Q53)",
    options: ["Asia", "Africa", "North America"],
    answer: "Asia"
  },
  {
    question: "What is the boiling point of water at sea level? (Q54)",
    options: ["100°C", "90°C", "120°C"],
    answer: "100°C"
  },
  {
    question: "Which Indian festival is known as the Festival of Lights? (Q55)",
    options: ["Holi", "Diwali", "Navratri"],
    answer: "Diwali"
  },
  {
    question: "Which ocean is the deepest? (Q56)",
    options: ["Pacific", "Atlantic", "Indian"],
    answer: "Pacific"
  },
  {
    question: "Who invented the airplane? (Q57)",
    options: ["Wright Brothers", "Henry Ford", "Thomas Edison"],
    answer: "Wright Brothers"
  },
  {
    question: "What is the currency of the United Kingdom? (Q58)",
    options: ["Pound Sterling", "Euro", "Dollar"],
    answer: "Pound Sterling"
  },
  {
    question: "Which bird is known for its ability to mimic human speech? (Q59)",
    options: ["Parrot", "Crow", "Sparrow"],
    answer: "Parrot"
  },
  {
    question: "What is the primary language spoken in Brazil? (Q60)",
    options: ["Portuguese", "Spanish", "French"],
    answer: "Portuguese"
  },
  {
    question: "Which Indian state is known as the 'Spice Garden of India'? (Q61)",
    options: ["Kerala", "Tamil Nadu", "Assam"],
    answer: "Kerala"
  },
  {
    question: "What is the smallest planet in the solar system? (Q62)",
    options: ["Mercury", "Mars", "Pluto"],
    answer: "Mercury"
  },
  {
    question: "Who discovered penicillin? (Q63)",
    options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie"],
    answer: "Alexander Fleming"
  },
  {
    question: "What is the national flower of India? (Q64)",
    options: ["Lotus", "Rose", "Marigold"],
    answer: "Lotus"
  },
  {
    question: "Which planet is farthest from the Sun? (Q65)",
    options: ["Neptune", "Uranus", "Pluto"],
    answer: "Neptune"
  },
  {
    question: "Which gas is used for respiration by humans? (Q66)",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide"],
    answer: "Oxygen"
  },
  {
    question: "Who invented the World Wide Web? (Q67)",
    options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs"],
    answer: "Tim Berners-Lee"
  },
  {
    question: "What is the national animal of India? (Q68)",
    options: ["Tiger", "Lion", "Elephant"],
    answer: "Tiger"
  },
  {
    question: "Which vitamin is produced by sunlight in the human body? (Q69)",
    options: ["Vitamin D", "Vitamin C", "Vitamin A"],
    answer: "Vitamin D"
  },
  {
    question: "What is the largest bone in the human body? (Q70)",
    options: ["Femur", "Tibia", "Humerus"],
    answer: "Femur"
  },
  {
    question: "Who is known as the Missile Man of India? (Q71)",
    options: ["Dr. A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha"],
    answer: "Dr. A.P.J. Abdul Kalam"
  },
  {
    question: "What is the capital city of Nepal? (Q72)",
    options: ["Kathmandu", "Pokhara", "Lalitpur"],
    answer: "Kathmandu"
  },
  {
    question: "Which organ in the human body is responsible for pumping blood? (Q73)",
    options: ["Heart", "Lungs", "Liver"],
    answer: "Heart"
  },
  {
    question: "Which planet is known for having a Great Red Spot? (Q74)",
    options: ["Jupiter", "Saturn", "Mars"],
    answer: "Jupiter"
  },
  {
    question: "Which river is the longest in the world? (Q75)",
    options: ["Nile", "Amazon", "Yangtze"],
    answer: "Nile"
  },
  {
    question: "What is the national bird of India? (Q76)",
    options: ["Peacock", "Parrot", "Eagle"],
    answer: "Peacock"
  },
  {
    question: "Which Indian leader is known as the Iron Man of India? (Q77)",
    options: ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "B.R. Ambedkar"],
    answer: "Sardar Vallabhbhai Patel"
  },
  {
    question: "Which vitamin helps in blood clotting? (Q78)",
    options: ["Vitamin K", "Vitamin A", "Vitamin B"],
    answer: "Vitamin K"
  },
  {
    question: "Which is the largest country in the world by area? (Q79)",
    options: ["Russia", "Canada", "USA"],
    answer: "Russia"
  },
  {
    question: "Which is the most spoken language in the world? (Q80)",
    options: ["English", "Mandarin Chinese", "Spanish"],
    answer: "Mandarin Chinese"
  },
  {
    question: "Which city is known as the Big Apple? (Q81)",
    options: ["New York", "Chicago", "Los Angeles"],
    answer: "New York"
  },
  {
    question: "Which Indian festival is celebrated with colors? (Q82)",
    options: ["Holi", "Diwali", "Dussehra"],
    answer: "Holi"
  },
  {
    question: "What is the full form of DNA? (Q83)",
    options: ["Deoxyribonucleic Acid", "Dynamic Network Analysis", "Digital Numeric Access"],
    answer: "Deoxyribonucleic Acid"
  },
  {
    question: "Who was the first Indian woman in space? (Q84)",
    options: ["Kalpana Chawla", "Sunita Williams", "Rakesh Sharma"],
    answer: "Kalpana Chawla"
  },
  {
    question: "What is the capital of Sri Lanka? (Q85)",
    options: ["Colombo", "Kandy", "Galle"],
    answer: "Colombo"
  },
  {
    question: "Which metal is liquid at room temperature? (Q86)",
    options: ["Mercury", "Lead", "Zinc"],
    answer: "Mercury"
  },
  {
    question: "What is the largest gland in the human body? (Q87)",
    options: ["Liver", "Pancreas", "Thyroid"],
    answer: "Liver"
  },
  {
    question: "What does the Richter scale measure? (Q88)",
    options: ["Earthquakes", "Wind Speed", "Rainfall"],
    answer: "Earthquakes"
  },
  {
    question: "Which day is celebrated as World Environment Day? (Q89)",
    options: ["June 5", "April 22", "October 16"],
    answer: "June 5"
  },
  {
    question: "Who discovered gravity? (Q90)",
    options: ["Isaac Newton", "Albert Einstein", "Galileo"],
    answer: "Isaac Newton"
  },
  {
    question: "Which blood group is known as universal donor? (Q91)",
    options: ["O negative", "A positive", "B negative"],
    answer: "O negative"
  },
  {
    question: "Which is the tallest mountain in the world? (Q92)",
    options: ["Mount Everest", "K2", "Kangchenjunga"],
    answer: "Mount Everest"
  },
  {
    question: "Which Indian state has the longest coastline? (Q93)",
    options: ["Gujarat", "Andhra Pradesh", "Maharashtra"],
    answer: "Gujarat"
  },
  {
    question: "Who is the author of 'The Discovery of India'? (Q94)",
    options: ["Jawaharlal Nehru", "Rabindranath Tagore", "Dr. Ambedkar"],
    answer: "Jawaharlal Nehru"
  },
  {
    question: "Which festival marks the start of the harvest season in Punjab? (Q95)",
    options: ["Baisakhi", "Lohri", "Pongal"],
    answer: "Baisakhi"
  },
  {
    question: "Which river is sacred to Hindus? (Q96)",
    options: ["Ganga", "Yamuna", "Godavari"],
    answer: "Ganga"
  },
  {
    question: "Which Indian state is known as the Land of Five Rivers? (Q97)",
    options: ["Punjab", "Haryana", "Bihar"],
    answer: "Punjab"
  },
  {
    question: "Which city is known as the Silicon Valley of India? (Q98)",
    options: ["Bengaluru", "Hyderabad", "Pune"],
    answer: "Bengaluru"
  },
  {
    question: "Which Mughal emperor built the Taj Mahal? (Q99)",
    options: ["Shah Jahan", "Akbar", "Aurangzeb"],
    answer: "Shah Jahan"
  },
  {
    question: "Which Indian state is famous for tea plantations? (Q100)",
    options: ["Assam", "Sikkim", "Kerala"],
    answer: "Assam"
  },
      {
    question: "Which planet is known as the hottest planet in the solar system? (Q101)",
    options: ["Mercury", "Venus", "Mars"],
    answer: "Venus"
  },
  {
    question: "Which Indian city is called the City of Lakes? (Q102)",
    options: ["Udaipur", "Bhopal", "Nainital"],
    answer: "Udaipur"
  },
  {
    question: "What is the capital of South Korea? (Q103)",
    options: ["Seoul", "Busan", "Incheon"],
    answer: "Seoul"
  },
  {
    question: "Who was the first Indian to win a Nobel Prize? (Q104)",
    options: ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "Which element has the atomic number 1? (Q105)",
    options: ["Hydrogen", "Oxygen", "Carbon"],
    answer: "Hydrogen"
  },
  {
    question: "Which sport is known as the 'King of Sports'? (Q106)",
    options: ["Football", "Cricket", "Tennis"],
    answer: "Football"
  },
  {
    question: "Which country is famous for tulips? (Q107)",
    options: ["Netherlands", "France", "Germany"],
    answer: "Netherlands"
  },
  {
    question: "Which part of the plant conducts photosynthesis? (Q108)",
    options: ["Leaf", "Root", "Stem"],
    answer: "Leaf"
  },
  {
    question: "What is the longest river in India? (Q109)",
    options: ["Ganga", "Yamuna", "Godavari"],
    answer: "Ganga"
  },
  {
    question: "Which gas is most used in balloons? (Q110)",
    options: ["Helium", "Hydrogen", "Nitrogen"],
    answer: "Helium"
  },
  {
    question: "Which country has the largest population? (Q111)",
    options: ["India", "China", "USA"],
    answer: "India"
  },
  {
    question: "What is the name of the galaxy we live in? (Q112)",
    options: ["Milky Way", "Andromeda", "Sombrero"],
    answer: "Milky Way"
  },
  {
    question: "Which muscle is responsible for pumping blood? (Q113)",
    options: ["Heart", "Lungs", "Liver"],
    answer: "Heart"
  },
  {
    question: "What is the capital of Rajasthan? (Q114)",
    options: ["Jaipur", "Udaipur", "Jodhpur"],
    answer: "Jaipur"
  },
  {
    question: "Which country is known for kangaroos? (Q115)",
    options: ["Australia", "South Africa", "Brazil"],
    answer: "Australia"
  },
  {
    question: "Which day is celebrated as International Yoga Day? (Q116)",
    options: ["June 21", "May 5", "August 15"],
    answer: "June 21"
  },
  {
    question: "What is the main ingredient in glass? (Q117)",
    options: ["Sand", "Plastic", "Clay"],
    answer: "Sand"
  },
  {
    question: "Which blood cells help in clotting? (Q118)",
    options: ["Platelets", "RBC", "WBC"],
    answer: "Platelets"
  },
  {
    question: "Which Indian state is called the Land of Rising Sun? (Q119)",
    options: ["Arunachal Pradesh", "Assam", "Mizoram"],
    answer: "Arunachal Pradesh"
  },
  {
    question: "Who is the first Indian to go to space? (Q120)",
    options: ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams"],
    answer: "Rakesh Sharma"
  },
  {
    question: "Which vitamin is good for eyesight? (Q121)",
    options: ["Vitamin A", "Vitamin B", "Vitamin C"],
    answer: "Vitamin A"
  },
  {
    question: "Which Indian monument is called the 'Symbol of Love'? (Q122)",
    options: ["Taj Mahal", "Red Fort", "Qutub Minar"],
    answer: "Taj Mahal"
  },
  {
    question: "Which is the coldest planet in the solar system? (Q123)",
    options: ["Neptune", "Uranus", "Pluto"],
    answer: "Neptune"
  },
  {
    question: "What is the largest island in the world? (Q124)",
    options: ["Greenland", "Australia", "Borneo"],
    answer: "Greenland"
  },
  {
    question: "Who invented the telephone? (Q125)",
    options: ["Alexander Graham Bell", "Edison", "Tesla"],
    answer: "Alexander Graham Bell"
  },
  {
    question: "Which bird lays the largest egg? (Q126)",
    options: ["Ostrich", "Eagle", "Duck"],
    answer: "Ostrich"
  },
  {
    question: "What is the capital of West Bengal? (Q127)",
    options: ["Kolkata", "Howrah", "Durgapur"],
    answer: "Kolkata"
  },
  {
    question: "Which animal is known for its memory? (Q128)",
    options: ["Elephant", "Horse", "Cat"],
    answer: "Elephant"
  },
  {
    question: "Which ocean is on the west coast of India? (Q129)",
    options: ["Arabian Sea", "Bay of Bengal", "Indian Ocean"],
    answer: "Arabian Sea"
  },
  {
    question: "Who painted the Mona Lisa? (Q130)",
    options: ["Leonardo da Vinci", "Michelangelo", "Van Gogh"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "Which Indian state is famous for backwaters? (Q131)",
    options: ["Kerala", "Goa", "Tamil Nadu"],
    answer: "Kerala"
  },
  {
    question: "Who discovered America? (Q132)",
    options: ["Christopher Columbus", "Magellan", "Marco Polo"],
    answer: "Christopher Columbus"
  },
  {
    question: "Which is the fastest land animal? (Q133)",
    options: ["Cheetah", "Leopard", "Tiger"],
    answer: "Cheetah"
  },
  {
    question: "Which city is called the 'City of Joy'? (Q134)",
    options: ["Kolkata", "Mumbai", "Delhi"],
    answer: "Kolkata"
  },
  {
    question: "Which Indian festival is known for lights and crackers? (Q135)",
    options: ["Diwali", "Holi", "Navratri"],
    answer: "Diwali"
  },
  {
    question: "Which country is known for pyramids? (Q136)",
    options: ["Egypt", "Greece", "Italy"],
    answer: "Egypt"
  },
  {
    question: "Who is the first woman Prime Minister of India? (Q137)",
    options: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil"],
    answer: "Indira Gandhi"
  },
  {
    question: "Which part of the brain controls thinking? (Q138)",
    options: ["Cerebrum", "Cerebellum", "Medulla"],
    answer: "Cerebrum"
  },
  {
    question: "Which country has the maple leaf on its flag? (Q139)",
    options: ["Canada", "USA", "UK"],
    answer: "Canada"
  },
  {
    question: "Which is the largest dam in India? (Q140)",
    options: ["Bhakra Nangal", "Hirakud", "Tehri"],
    answer: "Bhakra Nangal"
  },
  {
    question: "Which country is called the Land of Thunder Dragon? (Q141)",
    options: ["Bhutan", "Nepal", "Tibet"],
    answer: "Bhutan"
  },
  {
    question: "What is the process of water turning into vapor called? (Q142)",
    options: ["Evaporation", "Condensation", "Freezing"],
    answer: "Evaporation"
  },
  {
    question: "Which is the tallest animal in the world? (Q143)",
    options: ["Giraffe", "Elephant", "Camel"],
    answer: "Giraffe"
  },
  {
    question: "What is the national tree of India? (Q144)",
    options: ["Banyan", "Peepal", "Neem"],
    answer: "Banyan"
  },
  {
    question: "What is the study of weather called? (Q145)",
    options: ["Meteorology", "Astronomy", "Geology"],
    answer: "Meteorology"
  },
  {
    question: "Which animal is called the Ship of the Desert? (Q146)",
    options: ["Camel", "Horse", "Elephant"],
    answer: "Camel"
  },
  {
    question: "What is the capital of Canada? (Q147)",
    options: ["Ottawa", "Toronto", "Vancouver"],
    answer: "Ottawa"
  },
  {
    question: "Which instrument is used to measure temperature? (Q148)",
    options: ["Thermometer", "Barometer", "Seismometer"],
    answer: "Thermometer"
  },
  {
    question: "What is the full form of ATM? (Q149)",
    options: ["Automated Teller Machine", "Auto Transfer Machine", "Any Time Money"],
    answer: "Automated Teller Machine"
  },
  {
    question: "What is the largest mammal in the world? (Q150)",
    options: ["Blue Whale", "Elephant", "Shark"],
    answer: "Blue Whale"
  },
      {
    question: "What is the capital of the USA? (Q201)",
    options: ["Washington D.C.", "New York", "Los Angeles"],
    answer: "Washington D.C."
  },
  {
    question: "Which organ purifies blood in the human body? (Q202)",
    options: ["Kidney", "Liver", "Heart"],
    answer: "Kidney"
  },
  {
    question: "Which festival is also called the Festival of Colors? (Q203)",
    options: ["Holi", "Diwali", "Baisakhi"],
    answer: "Holi"
  },
  {
    question: "Which state in India is famous for Bihu dance? (Q204)",
    options: ["Assam", "Manipur", "Nagaland"],
    answer: "Assam"
  },
  {
    question: "What is the study of rocks called? (Q205)",
    options: ["Geology", "Zoology", "Botany"],
    answer: "Geology"
  },
  {
    question: "What is the nearest star to Earth? (Q206)",
    options: ["Sun", "Alpha Centauri", "Sirius"],
    answer: "Sun"
  },
  {
    question: "Who is known as the Father of India? (Q207)",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "Which city is known as the Diamond City of India? (Q208)",
    options: ["Surat", "Mumbai", "Hyderabad"],
    answer: "Surat"
  },
  {
    question: "Which Indian state is famous for sandalwood? (Q209)",
    options: ["Karnataka", "Tamil Nadu", "Kerala"],
    answer: "Karnataka"
  },
  {
    question: "Which gas do plants absorb during photosynthesis? (Q210)",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Which is the largest freshwater lake in India? (Q211)",
    options: ["Wular Lake", "Dal Lake", "Chilka Lake"],
    answer: "Wular Lake"
  },
  {
    question: "What is the capital of Maharashtra? (Q212)",
    options: ["Mumbai", "Pune", "Nagpur"],
    answer: "Mumbai"
  },
  {
    question: "Who was the first President of India? (Q213)",
    options: ["Dr. Rajendra Prasad", "Dr. Radhakrishnan", "Jawaharlal Nehru"],
    answer: "Dr. Rajendra Prasad"
  },
  {
    question: "Which planet is famous for its rings? (Q214)",
    options: ["Saturn", "Mars", "Neptune"],
    answer: "Saturn"
  },
  {
    question: "Which is the oldest mountain range in India? (Q215)",
    options: ["Aravalli", "Himalayas", "Vindhyas"],
    answer: "Aravalli"
  },
  {
    question: "Which is the largest organ in the human body? (Q216)",
    options: ["Skin", "Liver", "Heart"],
    answer: "Skin"
  },
  {
    question: "Which is the fastest bird in the world? (Q217)",
    options: ["Peregrine Falcon", "Eagle", "Sparrow"],
    answer: "Peregrine Falcon"
  },
  {
    question: "Which is the smallest bone in the human body? (Q218)",
    options: ["Stapes", "Femur", "Ulna"],
    answer: "Stapes"
  },
  {
    question: "Which is the smallest country in the world? (Q219)",
    options: ["Vatican City", "Monaco", "San Marino"],
    answer: "Vatican City"
  },
  {
    question: "Which planet takes the longest time to orbit the Sun? (Q220)",
    options: ["Neptune", "Saturn", "Uranus"],
    answer: "Neptune"
  },
  {
    question: "Which country invented paper? (Q221)",
    options: ["China", "Egypt", "India"],
    answer: "China"
  },
  {
    question: "Which blood cells fight diseases? (Q222)",
    options: ["White Blood Cells", "Red Blood Cells", "Platelets"],
    answer: "White Blood Cells"
  },
  {
    question: "Which state is the Sunderbans forest located in? (Q223)",
    options: ["West Bengal", "Odisha", "Bihar"],
    answer: "West Bengal"
  },
  {
    question: "Which Indian state is known as 'God’s Own Country'? (Q224)",
    options: ["Kerala", "Himachal Pradesh", "Goa"],
    answer: "Kerala"
  },
  {
    question: "Which fruit is known as the King of Fruits? (Q225)",
    options: ["Mango", "Apple", "Banana"],
    answer: "Mango"
  },
  {
    question: "Which Mughal ruler built the Red Fort? (Q226)",
    options: ["Shah Jahan", "Akbar", "Babur"],
    answer: "Shah Jahan"
  },
  {
    question: "What is the capital of Telangana? (Q227)",
    options: ["Hyderabad", "Warangal", "Nizamabad"],
    answer: "Hyderabad"
  },
  {
    question: "Which Indian river is the longest? (Q228)",
    options: ["Ganga", "Godavari", "Yamuna"],
    answer: "Ganga"
  },
  {
    question: "Who invented electricity? (Q229)",
    options: ["Benjamin Franklin", "Edison", "Newton"],
    answer: "Benjamin Franklin"
  },
  {
    question: "Which is the hottest planet in the solar system? (Q230)",
    options: ["Venus", "Mercury", "Mars"],
    answer: "Venus"
  },
  {
    question: "Which city is the capital of Karnataka? (Q231)",
    options: ["Bengaluru", "Mysore", "Hubli"],
    answer: "Bengaluru"
  },
  {
    question: "Which vitamin helps in calcium absorption? (Q232)",
    options: ["Vitamin D", "Vitamin A", "Vitamin C"],
    answer: "Vitamin D"
  },
  {
    question: "Which Indian city is known as the Orange City? (Q233)",
    options: ["Nagpur", "Pune", "Nashik"],
    answer: "Nagpur"
  },
  {
    question: "Which dance is famous in Tamil Nadu? (Q234)",
    options: ["Bharatanatyam", "Kathak", "Mohiniyattam"],
    answer: "Bharatanatyam"
  },
  {
    question: "Which is the longest wall in the world? (Q235)",
    options: ["Great Wall of China", "Berlin Wall", "Wall of India"],
    answer: "Great Wall of China"
  },
  {
    question: "What is the primary source of energy for the Earth? (Q236)",
    options: ["Sun", "Moon", "Wind"],
    answer: "Sun"
  },
  {
    question: "Which metal is used in making aircraft bodies? (Q237)",
    options: ["Aluminium", "Copper", "Iron"],
    answer: "Aluminium"
  },
  {
    question: "Which gas is used in electric bulbs? (Q238)",
    options: ["Argon", "Oxygen", "Carbon Dioxide"],
    answer: "Argon"
  },
  {
    question: "What is the national currency of India? (Q239)",
    options: ["Rupee", "Taka", "Yen"],
    answer: "Rupee"
  },
  {
    question: "What is the square of 12? (Q240)",
    options: ["144", "121", "132"],
    answer: "144"
  },
  {
    question: "Which country is called the Land of a Thousand Lakes? (Q241)",
    options: ["Finland", "Sweden", "Norway"],
    answer: "Finland"
  },
  {
    question: "Which tree gives us rubber? (Q242)",
    options: ["Rubber tree", "Neem", "Banyan"],
    answer: "Rubber tree"
  },
  {
    question: "Which city is the capital of Gujarat? (Q243)",
    options: ["Gandhinagar", "Ahmedabad", "Surat"],
    answer: "Gandhinagar"
  },
  {
    question: "What is the currency of Japan? (Q244)",
    options: ["Yen", "Won", "Ringgit"],
    answer: "Yen"
  },
  {
    question: "What is the chemical symbol of iron? (Q245)",
    options: ["Fe", "Ir", "I"],
    answer: "Fe"
  },
  {
    question: "Who is the current President of India? (Q246)",
    options: ["Droupadi Murmu", "Ram Nath Kovind", "Narendra Modi"],
    answer: "Droupadi Murmu"
  },
  {
    question: "Which city is known as the Pink City? (Q247)",
    options: ["Jaipur", "Jodhpur", "Udaipur"],
    answer: "Jaipur"
  },
  {
    question: "Which is the largest fish in the ocean? (Q248)",
    options: ["Whale Shark", "Blue Whale", "Hammerhead"],
    answer: "Whale Shark"
  },
  {
    question: "Which Indian state has the highest population? (Q249)",
    options: ["Uttar Pradesh", "Maharashtra", "Bihar"],
    answer: "Uttar Pradesh"
  },
  {
    question: "Which gas do humans exhale? (Q250)",
    options: ["Carbon Dioxide", "Oxygen", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
      {
    question: "What is the capital of Bihar? (Q251)",
    options: ["Patna", "Gaya", "Muzaffarpur"],
    answer: "Patna"
  },
  {
    question: "Which planet is known as the 'Dwarf Planet'? (Q252)",
    options: ["Pluto", "Mercury", "Venus"],
    answer: "Pluto"
  },
  {
    question: "Which Indian freedom fighter gave the slogan 'Give me blood and I will give you freedom'? (Q253)",
    options: ["Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
    answer: "Subhas Chandra Bose"
  },
  {
    question: "What is the largest plateau in the world? (Q254)",
    options: ["Tibetan Plateau", "Deccan Plateau", "Colorado Plateau"],
    answer: "Tibetan Plateau"
  },
  {
    question: "Who is the founder of Facebook? (Q255)",
    options: ["Mark Zuckerberg", "Elon Musk", "Jeff Bezos"],
    answer: "Mark Zuckerberg"
  },
  {
    question: "What is the scientific name of human beings? (Q256)",
    options: ["Homo sapiens", "Homo erectus", "Homo habilis"],
    answer: "Homo sapiens"
  },
  {
    question: "What is the full form of ISRO? (Q257)",
    options: [
      "Indian Space Research Organisation",
      "Indian Scientific Research Organisation",
      "Indian Satellite Research Office"
    ],
    answer: "Indian Space Research Organisation"
  },
  {
    question: "Which is the national reptile of India? (Q258)",
    options: ["King Cobra", "Monitor Lizard", "Indian Python"],
    answer: "King Cobra"
  },
  {
    question: "Which vitamin helps in wound healing? (Q259)",
    options: ["Vitamin C", "Vitamin D", "Vitamin B"],
    answer: "Vitamin C"
  },
  {
    question: "Which state in India has the highest literacy rate? (Q260)",
    options: ["Kerala", "Goa", "Mizoram"],
    answer: "Kerala"
  },
  {
    question: "Which is the highest civilian award in India? (Q261)",
    options: ["Bharat Ratna", "Padma Shri", "Padma Bhushan"],
    answer: "Bharat Ratna"
  },
  {
    question: "Which part of the plant absorbs water? (Q262)",
    options: ["Roots", "Stem", "Leaves"],
    answer: "Roots"
  },
  {
    question: "What is the main source of energy for Earth? (Q263)",
    options: ["Sun", "Moon", "Wind"],
    answer: "Sun"
  },
  {
    question: "What is the national motto of India? (Q264)",
    options: ["Satyameva Jayate", "Jai Hind", "Vande Mataram"],
    answer: "Satyameva Jayate"
  },
  {
    question: "What is the process of digestion of food in humans called? (Q265)",
    options: ["Digestion", "Respiration", "Excretion"],
    answer: "Digestion"
  },
  {
    question: "Who is called the 'Flying Sikh' of India? (Q266)",
    options: ["Milkha Singh", "P.T. Usha", "Sachin Tendulkar"],
    answer: "Milkha Singh"
  },
  {
    question: "Which instrument is used to measure blood pressure? (Q267)",
    options: ["Sphygmomanometer", "Thermometer", "Stethoscope"],
    answer: "Sphygmomanometer"
  },
  {
    question: "Who was the first woman Prime Minister of the UK? (Q268)",
    options: ["Margaret Thatcher", "Elizabeth II", "Theresa May"],
    answer: "Margaret Thatcher"
  },
  {
    question: "Which Indian leader is known as 'Bapu'? (Q269)",
    options: ["Mahatma Gandhi", "Nehru", "Subhas Chandra Bose"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "Which is the smallest continent in the world? (Q270)",
    options: ["Australia", "Europe", "Antarctica"],
    answer: "Australia"
  },
  {
    question: "What is the unit of electric current? (Q271)",
    options: ["Ampere", "Volt", "Watt"],
    answer: "Ampere"
  },
  {
    question: "Which river is known as the Ganga of the South? (Q272)",
    options: ["Godavari", "Kaveri", "Krishna"],
    answer: "Godavari"
  },
  {
    question: "Which is the longest river in the world? (Q273)",
    options: ["Nile", "Amazon", "Yangtze"],
    answer: "Nile"
  },
  {
    question: "Who wrote the book 'Wings of Fire'? (Q274)",
    options: ["A.P.J. Abdul Kalam", "Chetan Bhagat", "Dr. Ambedkar"],
    answer: "A.P.J. Abdul Kalam"
  },
  {
    question: "Which element is used in thermometers? (Q275)",
    options: ["Mercury", "Iron", "Aluminium"],
    answer: "Mercury"
  },
  {
    question: "Who discovered the vaccine for smallpox? (Q276)",
    options: ["Edward Jenner", "Louis Pasteur", "Alexander Fleming"],
    answer: "Edward Jenner"
  },
  {
    question: "What is the tallest waterfall in the world? (Q277)",
    options: ["Angel Falls", "Niagara Falls", "Victoria Falls"],
    answer: "Angel Falls"
  },
  {
    question: "Which is the national aquatic animal of India? (Q278)",
    options: ["Ganges River Dolphin", "Crocodile", "Turtle"],
    answer: "Ganges River Dolphin"
  },
  {
    question: "Who was the first woman to win a Nobel Prize? (Q279)",
    options: ["Marie Curie", "Mother Teresa", "Rosalind Franklin"],
    answer: "Marie Curie"
  },
  {
    question: "What is the most abundant gas in the atmosphere? (Q280)",
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide"],
    answer: "Nitrogen"
  },
  {
    question: "Which state is famous for Kathakali dance? (Q281)",
    options: ["Kerala", "Tamil Nadu", "Karnataka"],
    answer: "Kerala"
  },
  {
    question: "Which Mughal emperor was known as Akbar the Great? (Q282)",
    options: ["Akbar", "Babur", "Aurangzeb"],
    answer: "Akbar"
  },
  {
    question: "What is the chemical formula of common salt? (Q283)",
    options: ["NaCl", "HCl", "KCl"],
    answer: "NaCl"
  },
  {
    question: "Which city is known as the Steel City of India? (Q284)",
    options: ["Jamshedpur", "Bhilai", "Rourkela"],
    answer: "Jamshedpur"
  },
  {
    question: "Which part of the body is affected by jaundice? (Q285)",
    options: ["Liver", "Lung", "Kidney"],
    answer: "Liver"
  },
  {
    question: "Which river flows through London? (Q286)",
    options: ["Thames", "Seine", "Danube"],
    answer: "Thames"
  },
  {
    question: "Which Indian cricketer is called 'Master Blaster'? (Q287)",
    options: ["Sachin Tendulkar", "Virat Kohli", "MS Dhoni"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which gas is used in fire extinguishers? (Q288)",
    options: ["Carbon Dioxide", "Oxygen", "Helium"],
    answer: "Carbon Dioxide"
  },
  {
    question: "What is the longest bone in the human body? (Q289)",
    options: ["Femur", "Tibia", "Humerus"],
    answer: "Femur"
  },
  {
    question: "Which continent has the most countries? (Q290)",
    options: ["Africa", "Asia", "Europe"],
    answer: "Africa"
  },
  {
    question: "Which is the most populated city in India? (Q291)",
    options: ["Mumbai", "Delhi", "Bangalore"],
    answer: "Mumbai"
  },
  {
    question: "What is the most widely spoken language in the world? (Q292)",
    options: ["English", "Mandarin Chinese", "Spanish"],
    answer: "Mandarin Chinese"
  },
  {
    question: "Which Indian city is known for diamond cutting? (Q293)",
    options: ["Surat", "Hyderabad", "Jaipur"],
    answer: "Surat"
  },
  {
    question: "Who is known as the Nightingale of India? (Q294)",
    options: ["Sarojini Naidu", "Indira Gandhi", "Lata Mangeshkar"],
    answer: "Sarojini Naidu"
  },
  {
    question: "What is the capital of the United Arab Emirates? (Q295)",
    options: ["Abu Dhabi", "Dubai", "Sharjah"],
    answer: "Abu Dhabi"
  },
  {
    question: "Which is the national game of India (unofficial)? (Q296)",
    options: ["Hockey", "Cricket", "Kabaddi"],
    answer: "Hockey"
  },
  {
    question: "Which is the smallest bird in the world? (Q297)",
    options: ["Hummingbird", "Sparrow", "Parrot"],
    answer: "Hummingbird"
  },
  {
    question: "Which is the hottest continent on Earth? (Q298)",
    options: ["Africa", "Asia", "Australia"],
    answer: "Africa"
  },
  {
    question: "Which is the main gas found in LPG? (Q299)",
    options: ["Butane", "Methane", "Ethane"],
    answer: "Butane"
  },
  {
    question: "What is the name of the first artificial satellite? (Q300)",
    options: ["Sputnik 1", "Aryabhata", "Apollo 11"],
    answer: "Sputnik 1"
  },
      {
    question: "Which is the national river of India? (Q301)",
    options: ["Ganga", "Yamuna", "Godavari"],
    answer: "Ganga"
  },
  {
    question: "Which is the largest volcano in the world? (Q302)",
    options: ["Mauna Loa", "Mount Fuji", "Mount Etna"],
    answer: "Mauna Loa"
  },
  {
    question: "Which Indian scientist won the Nobel Prize for Physics in 1930? (Q303)",
    options: ["C.V. Raman", "Homi Bhabha", "Vikram Sarabhai"],
    answer: "C.V. Raman"
  },
  {
    question: "Which vitamin helps in improving eyesight? (Q304)",
    options: ["Vitamin A", "Vitamin C", "Vitamin D"],
    answer: "Vitamin A"
  },
  {
    question: "Which planet has the most moons? (Q305)",
    options: ["Saturn", "Jupiter", "Uranus"],
    answer: "Saturn"
  },
  {
    question: "Which state is famous for the Sun Temple in Konark? (Q306)",
    options: ["Odisha", "Rajasthan", "Gujarat"],
    answer: "Odisha"
  },
  {
    question: "Who was the first Indian in space? (Q307)",
    options: ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams"],
    answer: "Rakesh Sharma"
  },
  {
    question: "Which is the most abundant element in Earth's crust? (Q308)",
    options: ["Oxygen", "Iron", "Silicon"],
    answer: "Oxygen"
  },
  {
    question: "Which river is known as the 'Dakshina Ganga'? (Q309)",
    options: ["Godavari", "Krishna", "Cauvery"],
    answer: "Godavari"
  },
  {
    question: "Which Indian festival celebrates the victory of good over evil? (Q310)",
    options: ["Dussehra", "Holi", "Raksha Bandhan"],
    answer: "Dussehra"
  },
  {
    question: "Who discovered India in 1498? (Q311)",
    options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan"],
    answer: "Vasco da Gama"
  },
  {
    question: "Which country is famous for fjords? (Q312)",
    options: ["Norway", "Sweden", "Denmark"],
    answer: "Norway"
  },
  {
    question: "Which part of the plant is responsible for making food? (Q313)",
    options: ["Leaves", "Roots", "Stem"],
    answer: "Leaves"
  },
  {
    question: "What is the capital of Indonesia? (Q314)",
    options: ["Jakarta", "Bali", "Surabaya"],
    answer: "Jakarta"
  },
  {
    question: "Which is the longest canal in the world? (Q315)",
    options: ["Grand Canal (China)", "Panama Canal", "Suez Canal"],
    answer: "Grand Canal (China)"
  },
  {
    question: "Which Indian leader is called 'Netaji'? (Q316)",
    options: ["Subhas Chandra Bose", "Bhagat Singh", "Sardar Patel"],
    answer: "Subhas Chandra Bose"
  },
  {
    question: "Which planet has the shortest day? (Q317)",
    options: ["Jupiter", "Earth", "Mars"],
    answer: "Jupiter"
  },
  {
    question: "Who is the first female IPS officer of India? (Q318)",
    options: ["Kiran Bedi", "Indira Gandhi", "Kalpana Chawla"],
    answer: "Kiran Bedi"
  },
  {
    question: "Which organ controls all the functions of the body? (Q319)",
    options: ["Brain", "Heart", "Liver"],
    answer: "Brain"
  },
  {
    question: "Which is the highest mountain peak in India? (Q320)",
    options: ["Kangchenjunga", "Mount Everest", "Nanda Devi"],
    answer: "Kangchenjunga"
  },
  {
    question: "What is the chemical symbol for potassium? (Q321)",
    options: ["K", "P", "Pt"],
    answer: "K"
  },
  {
    question: "Which state is famous for Bihu dance? (Q322)",
    options: ["Assam", "Manipur", "Tripura"],
    answer: "Assam"
  },
  {
    question: "Which famous Indian temple is dedicated to Lord Venkateswara? (Q323)",
    options: ["Tirupati", "Vaishno Devi", "Somnath"],
    answer: "Tirupati"
  },
  {
    question: "Which Indian city is called the City of Joy? (Q324)",
    options: ["Kolkata", "Mumbai", "Chennai"],
    answer: "Kolkata"
  },
  {
    question: "Which Indian classical dance is from Odisha? (Q325)",
    options: ["Odissi", "Bharatanatyam", "Kathak"],
    answer: "Odissi"
  },
  {
    question: "Who was the first woman Chief Minister of an Indian state? (Q326)",
    options: ["Sucheta Kriplani", "Indira Gandhi", "Sarojini Naidu"],
    answer: "Sucheta Kriplani"
  },
  {
    question: "What is the currency of Bangladesh? (Q327)",
    options: ["Taka", "Rupee", "Ringgit"],
    answer: "Taka"
  },
  {
    question: "Which vitamin is mainly obtained from sunlight? (Q328)",
    options: ["Vitamin D", "Vitamin C", "Vitamin B12"],
    answer: "Vitamin D"
  },
  {
    question: "Who is the author of 'Discovery of India'? (Q329)",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "B.R. Ambedkar"],
    answer: "Jawaharlal Nehru"
  },
  {
    question: "Which planet is known as Earth's twin? (Q330)",
    options: ["Venus", "Mars", "Jupiter"],
    answer: "Venus"
  },
  {
    question: "Who wrote the Indian National Anthem? (Q331)",
    options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "Which is the highest dam in India? (Q332)",
    options: ["Tehri Dam", "Bhakra Dam", "Sardar Sarovar Dam"],
    answer: "Tehri Dam"
  },
  {
    question: "Who was the first Indian President? (Q333)",
    options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "B.R. Ambedkar"],
    answer: "Dr. Rajendra Prasad"
  },
  {
    question: "What is the unit of distance in space? (Q334)",
    options: ["Light year", "Kilometer", "Astronomical Unit"],
    answer: "Light year"
  },
  {
    question: "What is the name of the first Indian satellite? (Q335)",
    options: ["Aryabhata", "INSAT", "Bhaskara"],
    answer: "Aryabhata"
  },
  {
    question: "Which city is known as the City of Temples? (Q336)",
    options: ["Varanasi", "Bhubaneswar", "Haridwar"],
    answer: "Bhubaneswar"
  },
  {
    question: "What is the national emblem of India? (Q337)",
    options: ["Lion Capital of Ashoka", "Lotus", "Tiger"],
    answer: "Lion Capital of Ashoka"
  },
  {
    question: "What is the scientific name of rice? (Q338)",
    options: ["Oryza sativa", "Zea mays", "Triticum aestivum"],
    answer: "Oryza sativa"
  },
  {
    question: "Who was the first woman President of India? (Q339)",
    options: ["Pratibha Patil", "Indira Gandhi", "Sonia Gandhi"],
    answer: "Pratibha Patil"
  },
  {
    question: "What is the capital of Bhutan? (Q340)",
    options: ["Thimphu", "Kathmandu", "Paro"],
    answer: "Thimphu"
  },
  {
    question: "Which is the national fish of India? (Q341)",
    options: ["Catla", "Hilsa", "Rohu"],
    answer: "Hilsa"
  },
  {
    question: "Which Indian state is known for the Sula Vineyards? (Q342)",
    options: ["Maharashtra", "Goa", "Punjab"],
    answer: "Maharashtra"
  },
  {
    question: "Which is the largest delta in the world? (Q343)",
    options: ["Sundarbans", "Ganges Delta", "Nile Delta"],
    answer: "Sundarbans"
  },
  {
    question: "Which Indian city is famous for Pashmina shawls? (Q344)",
    options: ["Srinagar", "Amritsar", "Jaipur"],
    answer: "Srinagar"
  },
  {
    question: "What is the main ingredient in glass? (Q345)",
    options: ["Silica", "Salt", "Clay"],
    answer: "Silica"
  },
  {
    question: "What is the color of chlorophyll? (Q346)",
    options: ["Green", "Yellow", "Blue"],
    answer: "Green"
  },
  {
    question: "Which river flows through Paris? (Q347)",
    options: ["Seine", "Danube", "Rhine"],
    answer: "Seine"
  },
  {
    question: "Which is the first Indian movie to win an Oscar? (Q348)",
    options: ["RRR", "Gandhi", "Slumdog Millionaire"],
    answer: "Slumdog Millionaire"
  },
  {
    question: "Which is the largest democracy in the world? (Q349)",
    options: ["India", "USA", "China"],
    answer: "India"
  },
  {
    question: "What is the boiling point of water in Fahrenheit? (Q350)",
    options: ["212°F", "100°F", "180°F"],
    answer: "212°F"
  },
      {
    question: "Which organ of the body produces insulin? (Q351)",
    options: ["Pancreas", "Liver", "Stomach"],
    answer: "Pancreas"
  },
  {
    question: "Which Indian city is known as the Manchester of India? (Q352)",
    options: ["Ahmedabad", "Surat", "Kanpur"],
    answer: "Ahmedabad"
  },
  {
    question: "Who was the first Indian woman to climb Mount Everest? (Q353)",
    options: ["Bachendri Pal", "Santosh Yadav", "Premlata Agarwal"],
    answer: "Bachendri Pal"
  },
  {
    question: "What is the full form of CPU? (Q354)",
    options: ["Central Processing Unit", "Computer Processing Unit", "Central Power Unit"],
    answer: "Central Processing Unit"
  },
  {
    question: "Which city is known as the Gateway of India? (Q355)",
    options: ["Mumbai", "Kolkata", "Delhi"],
    answer: "Mumbai"
  },
  {
    question: "Which gas is known as laughing gas? (Q356)",
    options: ["Nitrous Oxide", "Carbon Dioxide", "Methane"],
    answer: "Nitrous Oxide"
  },
  {
    question: "Which continent has the largest population? (Q357)",
    options: ["Asia", "Africa", "Europe"],
    answer: "Asia"
  },
  {
    question: "What is the national sport of Japan? (Q358)",
    options: ["Sumo Wrestling", "Karate", "Judo"],
    answer: "Sumo Wrestling"
  },
  {
    question: "Who wrote the famous book 'Gitanjali'? (Q359)",
    options: ["Rabindranath Tagore", "Bankim Chandra", "Munshi Premchand"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "What is the smallest prime number? (Q360)",
    options: ["2", "1", "3"],
    answer: "2"
  },
  {
    question: "Which planet has the largest number of moons? (Q361)",
    options: ["Saturn", "Jupiter", "Neptune"],
    answer: "Saturn"
  },
  {
    question: "What is the full form of HTTP? (Q362)",
    options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HighText Transfer Protocol"],
    answer: "HyperText Transfer Protocol"
  },
  {
    question: "Which is the main source of protein for vegetarians? (Q363)",
    options: ["Pulses", "Fruits", "Rice"],
    answer: "Pulses"
  },
  {
    question: "Who invented the light bulb? (Q364)",
    options: ["Thomas Edison", "Alexander Bell", "Nikola Tesla"],
    answer: "Thomas Edison"
  },
  {
    question: "What is the chemical symbol for gold? (Q365)",
    options: ["Au", "Ag", "Gd"],
    answer: "Au"
  },
  {
    question: "Which Indian city is known as the City of Pearls? (Q366)",
    options: ["Hyderabad", "Mumbai", "Chennai"],
    answer: "Hyderabad"
  },
  {
    question: "Which state is famous for the Gir National Park? (Q367)",
    options: ["Gujarat", "Madhya Pradesh", "Maharashtra"],
    answer: "Gujarat"
  },
  {
    question: "Which is the oldest language in the world? (Q368)",
    options: ["Tamil", "Sanskrit", "Hebrew"],
    answer: "Tamil"
  },
  {
    question: "Who was the first woman to win a Nobel Prize in two different fields? (Q369)",
    options: ["Marie Curie", "Mother Teresa", "Rosalind Franklin"],
    answer: "Marie Curie"
  },
  {
    question: "Which is the highest railway bridge in the world? (Q370)",
    options: ["Chenab Bridge", "Millau Viaduct", "Forth Bridge"],
    answer: "Chenab Bridge"
  },
  {
    question: "What is the process of water cycle called? (Q371)",
    options: ["Hydrologic Cycle", "Oxygen Cycle", "Nitrogen Cycle"],
    answer: "Hydrologic Cycle"
  },
  {
    question: "Which Indian state is famous for Kaziranga National Park? (Q372)",
    options: ["Assam", "Meghalaya", "Tripura"],
    answer: "Assam"
  },
  {
    question: "Which Indian leader was also a lawyer? (Q373)",
    options: ["Mahatma Gandhi", "Lal Bahadur Shastri", "Rajendra Prasad"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "What is the deepest ocean in the world? (Q374)",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "Which bird can fly backward? (Q375)",
    options: ["Hummingbird", "Parrot", "Eagle"],
    answer: "Hummingbird"
  },
  {
    question: "Which gas do plants use for photosynthesis? (Q376)",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Which Indian state is known as the Land of Five Rivers? (Q377)",
    options: ["Punjab", "Haryana", "Bihar"],
    answer: "Punjab"
  },
  {
    question: "Who was the first Indian to receive a Nobel Prize? (Q378)",
    options: ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "What is the chemical symbol for Sodium? (Q379)",
    options: ["Na", "S", "So"],
    answer: "Na"
  },
  {
    question: "What is the national heritage animal of India? (Q380)",
    options: ["Elephant", "Lion", "Tiger"],
    answer: "Elephant"
  },
  {
    question: "Which organ helps in breathing? (Q381)",
    options: ["Lungs", "Liver", "Heart"],
    answer: "Lungs"
  },
  {
    question: "Which river is called the 'Sorrow of Bengal'? (Q382)",
    options: ["Damodar", "Ganga", "Yamuna"],
    answer: "Damodar"
  },
  {
    question: "Which country is known as the Land of a Thousand Lakes? (Q383)",
    options: ["Finland", "Canada", "Sweden"],
    answer: "Finland"
  },
  {
    question: "Which planet is famous for its big red spot? (Q384)",
    options: ["Jupiter", "Mars", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "Which is the longest national highway in India? (Q385)",
    options: ["NH 44", "NH 7", "NH 1"],
    answer: "NH 44"
  },
  {
    question: "Which is the largest bay in the world? (Q386)",
    options: ["Bay of Bengal", "Hudson Bay", "San Francisco Bay"],
    answer: "Bay of Bengal"
  },
  {
    question: "What is the capital of Maldives? (Q387)",
    options: ["Malé", "Colombo", "Victoria"],
    answer: "Malé"
  },
  {
    question: "Who discovered the law of gravity? (Q388)",
    options: ["Isaac Newton", "Albert Einstein", "Galileo"],
    answer: "Isaac Newton"
  },
  {
    question: "Which part of the human body contains the smallest bone? (Q389)",
    options: ["Ear", "Hand", "Foot"],
    answer: "Ear"
  },
  {
    question: "Which state is famous for the dance form Kathakali? (Q390)",
    options: ["Kerala", "Tamil Nadu", "Andhra Pradesh"],
    answer: "Kerala"
  },
  {
    question: "Which Indian festival is associated with kites? (Q391)",
    options: ["Makar Sankranti", "Diwali", "Raksha Bandhan"],
    answer: "Makar Sankranti"
  },
  {
    question: "Which river flows through Paris? (Q392)",
    options: ["Seine", "Thames", "Danube"],
    answer: "Seine"
  },
  {
    question: "Which is the tallest animal on Earth? (Q393)",
    options: ["Giraffe", "Elephant", "Camel"],
    answer: "Giraffe"
  },
  {
    question: "What is the full form of SIM? (Q394)",
    options: ["Subscriber Identity Module", "Simple Identity Method", "Subscriber Internet Mode"],
    answer: "Subscriber Identity Module"
  },
  {
    question: "What is the chemical symbol of Oxygen? (Q395)",
    options: ["O", "Ox", "Og"],
    answer: "O"
  },
  {
    question: "Which mountain range separates Europe and Asia? (Q396)",
    options: ["Ural Mountains", "Alps", "Himalayas"],
    answer: "Ural Mountains"
  },
  {
    question: "Which vitamin is essential for blood clotting? (Q397)",
    options: ["Vitamin K", "Vitamin A", "Vitamin C"],
    answer: "Vitamin K"
  },
  {
    question: "Which Indian freedom fighter is known for the slogan 'Inquilab Zindabad'? (Q398)",
    options: ["Bhagat Singh", "Subhas Chandra Bose", "Lala Lajpat Rai"],
    answer: "Bhagat Singh"
  },
  {
    question: "What is the unit of measurement for sound? (Q399)",
    options: ["Decibel", "Hertz", "Ampere"],
    answer: "Decibel"
  },
  {
    question: "Which metal is liquid at room temperature? (Q400)",
    options: ["Mercury", "Lead", "Zinc"],
    answer: "Mercury"
  },
  {
    question: "Which gas do humans need to breathe? (Q401)",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
    answer: "Oxygen"
  },
  {
    question: "Which organ filters blood in the human body? (Q402)",
    options: ["Kidney", "Heart", "Liver"],
    answer: "Kidney"
  },
  {
    question: "Which Indian state is known as the 'Fruit Bowl of India'? (Q403)",
    options: ["Himachal Pradesh", "Uttarakhand", "Jammu & Kashmir"],
    answer: "Himachal Pradesh"
  },
  {
    question: "What is the capital of Italy? (Q404)",
    options: ["Rome", "Venice", "Milan"],
    answer: "Rome"
  },
  {
    question: "What is the freezing point of water? (Q405)",
    options: ["0°C", "10°C", "32°C"],
    answer: "0°C"
  },
  {
    question: "Which Indian state is known for 'Cherai Beach'? (Q406)",
    options: ["Kerala", "Goa", "Tamil Nadu"],
    answer: "Kerala"
  },
  {
    question: "Which scientist developed the theory of relativity? (Q407)",
    options: ["Albert Einstein", "Isaac Newton", "Galileo"],
    answer: "Albert Einstein"
  },
  {
    question: "Which bird is the national bird of India? (Q408)",
    options: ["Peacock", "Parrot", "Swan"],
    answer: "Peacock"
  },
  {
    question: "What is the capital of Germany? (Q409)",
    options: ["Berlin", "Munich", "Frankfurt"],
    answer: "Berlin"
  },
  {
    question: "What is the chemical formula for water? (Q410)",
    options: ["H2O", "O2", "CO2"],
    answer: "H2O"
  },
  {
    question: "What is the largest planet in our solar system? (Q411)",
    options: ["Jupiter", "Saturn", "Earth"],
    answer: "Jupiter"
  },
  {
    question: "Which country hosted the 2020 Olympics? (Q412)",
    options: ["Japan", "China", "Brazil"],
    answer: "Japan"
  },
  {
    question: "Which is the largest continent by area? (Q413)",
    options: ["Asia", "Africa", "Europe"],
    answer: "Asia"
  },
  {
    question: "Which fruit is known as the 'King of Fruits'? (Q414)",
    options: ["Mango", "Apple", "Banana"],
    answer: "Mango"
  },
  {
    question: "Who was the first President of independent India? (Q415)",
    options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel"],
    answer: "Dr. Rajendra Prasad"
  },
  {
    question: "What is the smallest continent? (Q416)",
    options: ["Australia", "Europe", "Antarctica"],
    answer: "Australia"
  },
  {
    question: "What is the capital of Canada? (Q417)",
    options: ["Ottawa", "Toronto", "Vancouver"],
    answer: "Ottawa"
  },
  {
    question: "Which Indian state is famous for Bhangra dance? (Q418)",
    options: ["Punjab", "Haryana", "Uttar Pradesh"],
    answer: "Punjab"
  },
  {
    question: "Who is known as the 'Missile Man of India'? (Q419)",
    options: ["A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha"],
    answer: "A.P.J. Abdul Kalam"
  },
  {
    question: "Which body part has the strongest muscle? (Q420)",
    options: ["Jaw", "Leg", "Arm"],
    answer: "Jaw"
  },
  {
    question: "Which is the smallest ocean in the world? (Q421)",
    options: ["Arctic Ocean", "Indian Ocean", "Atlantic Ocean"],
    answer: "Arctic Ocean"
  },
  {
    question: "Which is the tallest building in the world? (Q422)",
    options: ["Burj Khalifa", "Shanghai Tower", "One World Trade Center"],
    answer: "Burj Khalifa"
  },
  {
    question: "Which Indian state is called the 'Land of Rising Sun'? (Q423)",
    options: ["Arunachal Pradesh", "Sikkim", "Nagaland"],
    answer: "Arunachal Pradesh"
  },
  {
    question: "Which country is famous for Eiffel Tower? (Q424)",
    options: ["France", "Italy", "Spain"],
    answer: "France"
  },
  {
    question: "Which vitamin is also known as ascorbic acid? (Q425)",
    options: ["Vitamin C", "Vitamin A", "Vitamin D"],
    answer: "Vitamin C"
  },
  {
    question: "What is the name of our galaxy? (Q426)",
    options: ["Milky Way", "Andromeda", "Messier 81"],
    answer: "Milky Way"
  },
  {
    question: "Which city is known as the Pink City of India? (Q427)",
    options: ["Jaipur", "Jodhpur", "Bikaner"],
    answer: "Jaipur"
  },
  {
    question: "Which country is known as the Land of the Rising Sun? (Q428)",
    options: ["Japan", "China", "South Korea"],
    answer: "Japan"
  },
  {
    question: "What is the capital of Australia? (Q429)",
    options: ["Canberra", "Sydney", "Melbourne"],
    answer: "Canberra"
  },
  {
    question: "Which gas is known as marsh gas? (Q430)",
    options: ["Methane", "Propane", "Butane"],
    answer: "Methane"
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA? (Q431)",
    options: ["France", "UK", "Canada"],
    answer: "France"
  },
  {
    question: "Who is the author of 'Harry Potter' series? (Q432)",
    options: ["J.K. Rowling", "Stephen King", "Roald Dahl"],
    answer: "J.K. Rowling"
  },
  {
    question: "What is the hardest natural substance? (Q433)",
    options: ["Diamond", "Gold", "Iron"],
    answer: "Diamond"
  },
  {
    question: "Which Indian festival is known as the Festival of Lights? (Q434)",
    options: ["Diwali", "Holi", "Navratri"],
    answer: "Diwali"
  },
  {
    question: "What is the full form of PDF? (Q435)",
    options: ["Portable Document Format", "Public Display File", "Printable Data File"],
    answer: "Portable Document Format"
  },
  {
    question: "Which animal is known as the 'Ship of the Desert'? (Q436)",
    options: ["Camel", "Elephant", "Horse"],
    answer: "Camel"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'? (Q437)",
    options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the national fruit of India? (Q438)",
    options: ["Mango", "Banana", "Apple"],
    answer: "Mango"
  },
  {
    question: "Which animal is known for its memory and intelligence? (Q439)",
    options: ["Elephant", "Dog", "Cat"],
    answer: "Elephant"
  },
  {
    question: "Which city is known as the Silicon Valley of India? (Q440)",
    options: ["Bangalore", "Hyderabad", "Pune"],
    answer: "Bangalore"
  },
  {
    question: "Which river is known as the 'Lifeline of Egypt'? (Q441)",
    options: ["Nile", "Amazon", "Ganga"],
    answer: "Nile"
  },
  {
    question: "Which Indian leader is called the 'Iron Man of India'? (Q442)",
    options: ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Subhas Chandra Bose"],
    answer: "Sardar Vallabhbhai Patel"
  },
  {
    question: "Which planet is known for its rings? (Q443)",
    options: ["Saturn", "Jupiter", "Uranus"],
    answer: "Saturn"
  },
  {
    question: "What is the chemical formula for carbon dioxide? (Q444)",
    options: ["CO₂", "C₂O", "CO"],
    answer: "CO₂"
  },
  {
    question: "What is the national flower of India? (Q445)",
    options: ["Lotus", "Rose", "Sunflower"],
    answer: "Lotus"
  },
  {
    question: "Which bird is known as the fastest bird in the world? (Q446)",
    options: ["Peregrine Falcon", "Eagle", "Hawk"],
    answer: "Peregrine Falcon"
  },
  {
    question: "Who was the first man to walk on the Moon? (Q447)",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin"],
    answer: "Neil Armstrong"
  },
  {
    question: "What is the process of converting water vapor into liquid called? (Q448)",
    options: ["Condensation", "Evaporation", "Sublimation"],
    answer: "Condensation"
  },
  {
    question: "Which is the longest bone in the human body? (Q449)",
    options: ["Femur", "Tibia", "Humerus"],
    answer: "Femur"
  },
  {
    question: "What is the currency of Russia? (Q450)",
    options: ["Ruble", "Euro", "Dollar"],
    answer: "Ruble"
  },

      {
    question: "Which Indian city is known as the City of Pearls? (Q451)",
    options: ["Hyderabad", "Mumbai", "Chennai"],
    answer: "Hyderabad"
  },
  {
    question: "Which state is famous for the Gir National Park? (Q452)",
    options: ["Gujarat", "Madhya Pradesh", "Maharashtra"],
    answer: "Gujarat"
  },
  {
    question: "Which is the oldest language in the world? (Q453)",
    options: ["Tamil", "Sanskrit", "Hebrew"],
    answer: "Tamil"
  },
  {
    question: "Who was the first woman to win a Nobel Prize in two different fields? (Q454)",
    options: ["Marie Curie", "Mother Teresa", "Rosalind Franklin"],
    answer: "Marie Curie"
  },
  {
    question: "Which is the highest railway bridge in the world? (Q455)",
    options: ["Chenab Bridge", "Millau Viaduct", "Forth Bridge"],
    answer: "Chenab Bridge"
  },
  {
    question: "What is the process of water cycle called? (Q456)",
    options: ["Hydrologic Cycle", "Oxygen Cycle", "Nitrogen Cycle"],
    answer: "Hydrologic Cycle"
  },
  {
    question: "Which Indian state is famous for Kaziranga National Park? (Q457)",
    options: ["Assam", "Meghalaya", "Tripura"],
    answer: "Assam"
  },
  {
    question: "Which Indian leader was also a lawyer? (Q458)",
    options: ["Mahatma Gandhi", "Lal Bahadur Shastri", "Rajendra Prasad"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "What is the deepest ocean in the world? (Q459)",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "Which bird can fly backward? (Q460)",
    options: ["Hummingbird", "Parrot", "Eagle"],
    answer: "Hummingbird"
  },
];
