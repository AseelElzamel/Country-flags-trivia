let currentQuestion = 0;

document.getElementById('start-btn').addEventListener('click', startQuiz);

function startQuiz() {
    document.querySelector('.home-page').style.display = 'none'; // to hide the home page
    showQuestion();
}

function showQuestion() {
    // Code to display question
}
