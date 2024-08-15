function submitAnswer(questionInfo, timerObj) {
    const errorMessage = document.getElementById('error-message');
    const questionContainer = document.getElementById('question-container');
    const answer_input = document.getElementById('answer-input');
    const submitButton = document.getElementById('submit-btn');

    // Check if user does not type the answer
    if (questions[questionInfo.currentQuestionIndex].options !== undefined) {
        if (document.querySelector('input[name="answer-choice"]:checked') === null) {
            errorMessage.innerHTML = `Please choose an answer then submit again`;
            return;
        }
    }
    else {
        if (document.getElementById('answer-input').value === '') {
            errorMessage.innerHTML = `Please type your answer then submit again`;
            return;
        }
    }

    // Check user's answer in case of multiple choice question
    if (questions[questionInfo.currentQuestionIndex].options !== undefined)
    {
        if (document.querySelector('input[name="answer-choice"]:checked').value === questions[questionInfo.currentQuestionIndex].answer) {
            questionInfo.totalScore++;
        }
        document.getElementById('multiple-choices-container').innerHTML = ``;
    }

    timerObj.stopTimerFlag = true;
    timerObj.setTimerRunningState(false);
    errorMessage.innerHTML = ``;
    questionContainer.innerHTML = `Click the timer to next question`;
    submitButton.classList.add('hidden');
    answer_input.classList.add('hidden');
    answer_input.value = '';
    
    questionInfo.currentQuestionIndex++;
    if (questionInfo.currentQuestionIndex === questions.length)
    {
        printResult(questionInfo.totalScore);
    }
}

function printResult(totalScore) {
    const minutesLabel = document.getElementById("minutes");
    const secondsLabel = document.getElementById("seconds");
    document.getElementById('result-message').innerHTML = `You have achieve ${totalScore} points in ${minutesLabel.innerHTML !== "00" ? minutesLabel.innerHTML + " minutes and" : ""} ${secondsLabel.innerHTML} seconds`
    document.getElementById('result-board').classList.remove('hidden');
    document.getElementById('timer-container').classList.add('hidden');
    document.getElementById('question-container').classList.add('hidden');
}