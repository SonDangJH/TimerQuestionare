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
        stopTimerFlag = true;
        document.getElementById('question-container').innerHTML = `Click the timer to next question`;
        document.getElementById('submit-btn').classList.add('hidden');
        if (questions[currentQuestion].options !== undefined)
        {
            if (document.querySelector('input[name="answer-choice"]:checked').value === questions[currentQuestion].answer) {
                totalScore++;
            }
            document.getElementById('multiple-choices-container').innerHTML = ``;
        }

        if (currentQuestion === questions.length - 1)
        {
            window.location.href = "/Users/developer/Downloads/Exercise3/TimerQuestionare/src/extensions/TimerQuestionare/containers/ResultPage/ResultPage.html";
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