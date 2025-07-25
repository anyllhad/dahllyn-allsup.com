let flashcards = {
    "What is the keyword to define a function in Python?": "def",
    "How do you print 'Hello, World!' to the console?": "print('Hello, World!')",
    "What symbol is used for comments in Python?": "#",
    "What is the data type of `3.14`?": "float",
    "How do you create a single-line comment in Python?": "Start with #",
    "What keyword checks a condition in Python?": "if",
    "What is the output of `print(2 + 3)`?": "5",
    "How do you store a value in a variable named `x`?": "x = value",
    "What is the data type of `'Hello'`?": "str",
    "What symbol is used for string concatenation?": "+",
    "How do you create a list in Python?": "[item1, item2]",
    "What is the index of the first element in a list?": "0",
    "How do you access the first element of a list named `my_list`?": "my_list[0]",
    "What keyword is used to loop over a sequence?": "for",
    "What is the data type of `True`?": "bool",
    "What operator checks for equality?": "==",
    "What operator checks for inequality?": "!=",
    "How do you create an empty list?": "[]",
    "What is the output of `len([1, 2, 3])`?": "3",
    "How do you add an element to the end of a list?": "append()",
    "What is the keyword to exit a loop early?": "break",
    "What is the keyword to skip to the next iteration of a loop?": "continue",
    "How do you define a string with single quotes?": "'text'",
    "How do you define a string with double quotes?": "\"text\"",
    "What is the data type of `[1, 2, 3]`?": "list",
    "What is the data type of `(1, 2, 3)`?": "tuple",
    "What is the data type of `{'key': 'value'}`?": "dict",
    "How do you access a dictionary value with key `name`?": "dict_name['name']",
    "What is the output of `print(5 * 3)`?": "15",
    "What is the output of `print(10 / 2)`?": "5.0",
    "What is the output of `print(10 // 3)`?": "3",
    "What is the output of `print(10 % 3)`?": "1",
    "What keyword defines a loop that runs while a condition is true?": "while",
    "How do you convert `5` to a string?": "str(5)",
    "How do you convert `'123'` to an integer?": "int('123')",
    "What is the output of `print('Hi' * 3)`?": "HiHiHi",
    "What method removes whitespace from both ends of a string?": "strip()",
    "What method converts a string to uppercase?": "upper()",
    "What method converts a string to lowercase?": "lower()",
    "How do you check if `'a'` is in `'banana'`?": "'a' in 'banana'",
    "What is the output of `type(42)`?": "<class 'int'>",
    "What is the output of `bool(0)`?": "False",
    "What is the output of `bool(1)`?": "True",
    "How do you create a tuple with one item?": "(item,)",
    "What is the keyword to import a module?": "import",
    "What function returns a random integer?": "random.randint()",
    "How do you round `3.7` to the nearest integer?": "round(3.7)",
    "What is the output of `abs(-5)`?": "5",
    "What is the output of `min([1, 2, 3])`?": "1",
    "What is the output of `max([1, 2, 3])`?": "3",
    "How do you add a key-value pair to a dictionary?": "dict[key] = value",
    "What method removes the last element from a list?": "pop()",
    "What is the output of `'hello'.capitalize()`?": "Hello",
    "What is the output of `'hello'.count('l')`?": "2",
    "How do you check the length of a string?": "len(string)",
    "What is the output of `print(2 ** 3)`?": "8",
    "What is the keyword for logical AND?": "and",
    "What is the keyword for logical OR?": "or",
    "What is the keyword for logical NOT?": "not",
    "What is the output of `True and False`?": "False",
    "What is the output of `True or False`?": "True",
    "What is the output of `not True`?": "False",
    "How do you create a set in Python?": "{item1, item2}",
    "What method adds an element to a set?": "add()",
    "What method removes an element from a set?": "remove()",
    "What is the output of `set([1, 2, 2, 3])`?": "{1, 2, 3}",
    "What is the output of `'hello'[1]`?": "e",
    "What is the output of `[1, 2, 3][1]`?": "2",
    "How do you slice the first two elements of a list?": "list[:2]",
    "What is the output of `'python'[2:5]`?": "tho",
    "What is the default step in a slice?": "1",
    "How do you reverse a list using slicing?": "list[::-1]",
    "What is the output of `range(3)` in a for loop?": "0, 1, 2",
    "What function creates a list from a range?": "list(range())",
    "What is the output of `sum([1, 2, 3])`?": "6",
    "What is the keyword to define a class?": "class",
    "What is the keyword to inherit a class?": "class Child(Parent)",
    "What is the output of `chr(65)`?": "A",
    "What is the output of `ord('A')`?": "65",
    "How do you check if a variable is an integer?": "isinstance(var, int)",
    "What is the output of `'hello'.startswith('he')`?": "True",
    "What is the output of `'hello'.endswith('lo')`?": "True",
    "What method splits a string by spaces?": "split()",
    "What method joins a list of strings with a separator?": "join()",
    "What is the output of `' '.join(['a', 'b'])`?": "a b",
    "What is the output of `'a,b'.split(',')`?": "['a', 'b']",
    "What is the keyword to handle exceptions?": "try",
    "What is the keyword to raise an exception?": "raise",
    "What is the output of `int(3.9)`?": "3",
    "What is the output of `float('3.14')`?": "3.14",
    "How do you check if a list is empty?": "len(list) == 0",
    "What is the output of `[1, 2] + [3, 4]`?": "[1, 2, 3, 4]",
    "What is the output of `sorted([3, 1, 2])`?": "[1, 2, 3]",
    "What is the output of `[1, 2, 3].index(2)`?": "1",
    "What is the output of `[1, 2, 3].count(2)`?": "1",
    "What is the keyword to return a value from a function?": "return",
    "What is the default return value of a function?": "None",
    "How do you define a function with no parameters?": "def func():",
    "What is the output of `'hello'.replace('l', 'p')`?": "heppo",
    "What is the output of `pow(2, 3)`?": "8",
    "Where is the first index of a string?": "0",
    "Which answer assigns first_name with an empty string? \n1. first_name = \n2. first_name = '' \n3. '' = first_name": "2",
    "Write a statement using len() that assigns a variable num_chars to the length of 'Santa'.": "num_chars = len('Santa')",
    "Write a statement that prints the length of the string variable first_name.": "print(len(first_name))",
    "Write a statement that assigns the first character of my_country to my_char.": "my_country[0]",
    "Output the value of the second element in prices.": "print(prices[1])",
    "Update the price of the second item in house_prices to '$175,000'.": "house_prices[1] = '$175,000'",
    "Add a price to the end of the list with a value of '$1,000,000'.": "house_prices.append('$1,000,000')",
    "Remove the first element from house_prices, using the pop() method.": "house_prices.pop(0)",
    "Remove '$140,000' from house_prices, using the remove() method.": "house_prices.remove('$140,000')"
};
let scores = [];
let usedQuestions = [];
let wrongAnswers = [];
let score = 0;
let totalQuestions = 0;
let currentQuestion = null;

const questionEl = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const quitBtn = document.getElementById('quit-btn');
const continueBtn = document.getElementById('continue-btn');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const scoreListEl = document.getElementById('score-list');
const wrongAnswersEl = document.getElementById('wrong-answers');
const wrongListEl = document.getElementById('wrong-list');
const saveWrongBtn = document.getElementById('save-wrong-btn');
const saveScoresBtn = document.getElementById('save-scores-btn');

// Initialize game
function initGame() {
    console.log('Initializing game...');
    console.log('Flashcards:', Object.keys(flashcards).length, 'questions loaded');

    // Check if DOM elements exist
    if (!questionEl || !answerInput || !submitBtn || !continueBtn || !quitBtn || !feedbackEl || !scoreEl || !scoreListEl || !wrongAnswersEl || !wrongListEl || !saveWrongBtn || !saveScoresBtn) {
        console.error('One or more DOM elements are missing. Check HTML IDs.');
        questionEl.textContent = 'Error: Page elements not found. Check console for details.';
        return;
    }

    // Try loading scores
    fetch('scores.json')
        .then(response => {
            if (response.ok) return response.json();
            console.log('No previous scores found.');
            return [];
        })
        .then(data => {
            scores = data;
            displayPastScores();
        })
        .catch(e => console.log('Error loading scores:', e));

    // Try loading flashcards.json (optional, since we have fallback)
    fetch('flashcards.json')
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load flashcards.json: ${response.status}`);
            return response.json();
        })
        .then(data => {
            flashcards = data;
            console.log('Flashcards loaded from file:', Object.keys(flashcards).length, 'questions');
            nextQuestion();
        })
        .catch(error => {
            console.warn('Using embedded flashcards due to error:', error);
            nextQuestion(); // Use embedded flashcards
        });
}

// Display past scores
function displayPastScores() {
    scoreListEl.innerHTML = '';
    scores.forEach(score => {
        const li = document.createElement('li');
        li.textContent = `${score.timestamp}: ${score.score}/${score.total} (${score.percentage.toFixed(2)}%)`;
        scoreListEl.appendChild(li);
    });
}

// Get next question
function nextQuestion() {
    console.log('Fetching next question...');
    const availableQuestions = Object.keys(flashcards).filter(q => !usedQuestions.includes(q));
    if (availableQuestions.length === 0) {
        endGame('You\'ve answered all questions!');
        return;
    }
    currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    questionEl.textContent = currentQuestion;
    answerInput.value = '';
    feedbackEl.textContent = '';
    submitBtn.classList.remove('hidden');
    continueBtn.classList.add('hidden');
    answerInput.focus();
}

// Check answer
function checkAnswer() {
    const userAnswer = answerInput.value.trim();
    if (userAnswer.toLowerCase() === 'quit') {
        endGame('Game ended early.');
        return;
    }
    totalQuestions++;
    const correctAnswer = flashcards[currentQuestion];
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedbackEl.textContent = 'Correct!';
        feedbackEl.style.color = 'green';
        score++;
    } else {
        feedbackEl.textContent = `Wrong! The correct answer is: ${correctAnswer}`;
        feedbackEl.style.color = 'red';
        wrongAnswers.push([currentQuestion, userAnswer, correctAnswer]);
    }
    updateScore();
    submitBtn.classList.add('hidden');
    continueBtn.classList.remove('hidden');
}

// Update score display
function updateScore() {
    const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
    scoreEl.textContent = `Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
}

// End game
function endGame(message) {
    questionEl.textContent = message;
    const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
    feedbackEl.textContent = `Final Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
    answerInput.style.display = 'none';
    submitBtn.style.display = 'none';
    quitBtn.style.display = 'none';
    continueBtn.style.display = 'none';

    // Save score
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
    scores.push({ timestamp, score, total: totalQuestions, percentage });
    saveScoresBtn.style.display = 'block';

    // Display wrong answers
    if (wrongAnswers.length > 0) {
        wrongAnswersEl.style.display = 'block';
        wrongListEl.innerHTML = '';
        wrongAnswers.forEach(([question, userAnswer, correctAnswer]) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>Question:</strong> ${question}<br>
                            <strong>Your answer:</strong> ${userAnswer}<br>
                            <strong>Correct answer:</strong> ${correctAnswer}`;
            wrongListEl.appendChild(li);
        });
        saveWrongBtn.style.display = 'block';
    }
}

// Save wrong answers as JSON file
function saveWrongAnswers() {
    const blob = new Blob([JSON.stringify(wrongAnswers, null, 4)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wrong_answers.json';
    a.click();
    URL.revokeObjectURL(url);
}

// Save scores as JSON file
function saveScores() {
    const blob = new Blob([JSON.stringify(scores, null, 4)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'scores.json';
    a.click();
    URL.revokeObjectURL(url);
}

// Event listeners
submitBtn.addEventListener('click', checkAnswer);
quitBtn.addEventListener('click', () => endGame('Game ended early.'));
continueBtn.addEventListener('click', nextQuestion);
saveWrongBtn.addEventListener('click', saveWrongAnswers);
saveScoresBtn.addEventListener('click', saveScores);
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAnswer();
});

// Start game
initGame();