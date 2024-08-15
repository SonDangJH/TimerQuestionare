function runTimer() {
    let stopTimerFlag = true;
    let totalScore = 0;
    let currentQuestion = 0;
    const minutesLabel = document.getElementById("minutes");
    const secondsLabel = document.getElementById("seconds");
    const timerContainer = document.getElementById("timer-container");
    let totalSeconds = 0;
    setInterval(setTime, 1000);


    timerContainer.addEventListener('click',()=>{
        if (!stopTimerFlag) return;
        stopTimerFlag = !stopTimerFlag;
        showQuestionOnScreen(currentQuestion);
        document.getElementById('submit-btn').classList.remove('hidden');
    })
    document.getElementById('submit-btn').addEventListener('click',()=>{
        if (questions[currentQuestion].options !== undefined)
        {
            if (document.querySelector('input[name="answer-choice"]:checked') === null) {
                document.getElementById('error-message').innerHTML = `Please choose an answer then submit again`;
                return;
            }
        }
        else {
            if (document.getElementById('answer-input').value === '') {
                document.getElementById('error-message').innerHTML = `Please type your answer then submit again`;
                return;
            }
        }
        stopTimerFlag = true;
        document.getElementById('error-message').innerHTML = ``;
        document.getElementById('question-container').innerHTML = `Click the timer to next question`;
        document.getElementById('submit-btn').classList.add('hidden');
        const answer_input = document.getElementById('answer-input');
        answer_input.classList.add('hidden');
        answer_input.value = '';
        if (questions[currentQuestion].options !== undefined)
        {
            if (document.querySelector('input[name="answer-choice"]:checked').value === questions[currentQuestion].answer) {
                totalScore++;
            }
            document.getElementById('multiple-choices-container').innerHTML = ``;
        }

        if (currentQuestion === questions.length - 1)
        {
            document.getElementById('result-message').innerHTML = `You have achieve ${totalScore} points in ${minutesLabel.innerHTML} minutes and ${secondsLabel.innerHTML} minutes`
            document.getElementById('timer-container').classList.add('hidden');
            document.getElementById('question-container').classList.add('hidden');
            document.getElementById('result-board').classList.remove('hidden')
        }
        else {
            currentQuestion++;
        }
    })
    function setTime() {
        if (!stopTimerFlag)
        {
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds % 60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
        }
    }

    function pad(val) {
        let valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
        return valString;
        }
    }
}

runTimer();