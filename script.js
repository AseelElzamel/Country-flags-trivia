const questions = [
    { flag: 'images/America.png', options: ['United States', 'United Kingdom', 'Canada', 'Australia'], correct: 0 },
    { flag: 'images/Canada.png', options: ['United States', 'Canada', 'Mexico', 'Greenland'], correct: 1 },
    { flag: 'images/Australia.png', options: ['New Zealand', 'South Africa', 'Australia', 'Fiji'], correct: 2 },
    { flag: 'images/Brazil.png', options: ['Colombia', 'Peru', 'Argentina', 'Brazil'], correct: 3 },
    { flag: 'images/Egypt.png', options: ['India', 'Egypt', 'Sudan', 'Lebanon'], correct: 1 },
    { flag: 'images/France.png', options: ['Italy', 'Spain', 'Germany', 'France'], correct: 3 },
    { flag: 'images/Germany.png', options: ['Germany', 'Netherlands', 'Belgium', 'Austria'], correct: 0 },
    { flag: 'images/Italy.png', options: ['Greece', 'Spain', 'Italy', 'Portugal'], correct: 2 },
    { flag: 'images/Japan.png', options: ['China', 'Japan', 'South Korea', 'Thailand'], correct: 1 },
    { flag: 'images/UnitedArabEmarates.png', options: ['Kuwait', 'Qatar', 'Jordan', 'Uniter Arab Emarates'], correct: 3 }
];

let shuffledQuestions = [];
let currentQuestion = 0;
let score = 0;


function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    shuffledQuestions = shuffleQuestions([...questions]).slice(0, 10);
    document.querySelector('.home-page').style.display = 'none'; // to hide home page
    document.getElementById('background-music').play();
    showQuestion();
}

function showQuestion() {
    const question = shuffledQuestions[currentQuestion];
    const appElement = document.getElementById('app');

    // will Clear any previous content in the container
    appElement.replaceChildren();

    // will create and append the flag image
    const imgElement = document.createElement('img');
    imgElement.src = question.flag;
    imgElement.alt = 'Country Flag';
    appElement.appendChild(imgElement);

    // will create a div for the options
    const optionsDiv = document.createElement('div');

    //this will Loop over the options and create a button for each one
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('answer-button');
        button.textContent = option;
        button.setAttribute('data-index', index);

        button.addEventListener('click', () => checkAnswer(index));

        optionsDiv.appendChild(button);
    });

    // Append the options div to the app element
    appElement.appendChild(optionsDiv);
}

function checkAnswer(selected) {
    const question = shuffledQuestions[currentQuestion];
    if (parseInt(selected) === question.correct) {
        score++;
        alert('Correct!');
    } else {
        alert('Wrong! The correct answer is ' + question.options[question.correct]);
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const appElement = document.getElementById('app');

    appElement.replaceChildren();

    // the result message
    const header = document.createElement('h1');
    header.textContent = 'Quiz Complete!';
    appElement.appendChild(header);

    const scoreMessage = document.createElement('p');
    scoreMessage.textContent = `Your Score: ${score} / ${shuffledQuestions.length}`;
    appElement.appendChild(scoreMessage);

    const feedback = document.createElement('p');
    feedback.textContent = score === shuffledQuestions.length
        ? 'Amazing! You are a Flag Master!'
        : score >= 7
        ? 'Good Job!'
        : 'Keep Practicing!';
    appElement.appendChild(feedback);
}
document.getElementById('start-btn').addEventListener('click', startQuiz);
