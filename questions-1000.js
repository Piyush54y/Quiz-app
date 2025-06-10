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
];
