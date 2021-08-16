const quizForm = document.querySelector('.quiz-form');
const submitQuizButton = document.querySelector('#submit-quiz-btn');
const outputEl = document.querySelector('#output');

const correctAnswers = ['three','90 degree', 'right angled'];


function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm)
    for(let value of formResults.values()) {
        console.log(value);
        if(value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    console.log(score);
    outputEl.innerText = "Your score is: " + score;
}


submitQuizButton.addEventListener('click', calculateScore)