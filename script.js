const questions = [
    { flag: 'images/flag1.png', options: ['United States', 'United Kingdom', 'Canada', 'Australia'], correct: 0 },
    { flag: 'images/flag2.png', options: ['Germany', 'Italy', 'France', 'Spain'], correct: 1 },
    { flag: 'images/flag3.png', options: ['Brazil', 'Argentina', 'Peru', 'Chile'], correct: 2 },
    { flag: 'images/flag4.png', options: ['India', 'China', 'Japan', 'Nepal'], correct: 3 },
    { flag: 'images/flag5.png', options: ['Egypt', 'Morocco', 'Algeria', 'Tunisia'], correct: 0 }
];

let shuffledQuestions = [];

function startQuiz() {
    shuffledQuestions = shuffleQuestions(questions); // Shuffle the questions array
    showQuestion();
}

function showQuestion() {
    const question = shuffledQuestions[currentQuestion];
    const appElement = document.getElementById('app');

    // Clear any previous content in the container
    appElement.innerHTML = '';

    // Create and append the flag image
    const imgElement = document.createElement('img');
    imgElement.src = question.flag;
    imgElement.alt = 'Country Flag';
    appElement.appendChild(imgElement);

    // Create a div for the options
    const optionsDiv = document.createElement('div');

    // Loop over the options and create a button for each one
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('answer-button');
        button.textContent = option;
        button.setAttribute('data-index', index);

        // Add an event listener to the button
        button.addEventListener('click', () => checkAnswer(index));

        // Append the button to the options div
        optionsDiv.appendChild(button);
    });

    // Append the options div to the app element
    appElement.appendChild(optionsDiv);
}
