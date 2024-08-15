function runQuestionPage() {
    const questionInfo = {
        currentQuestionIndex: 0,
        totalScore: 0,
    }

    const timerContainer = document.getElementById("timer-container");
    const submitButton = document.getElementById('submit-btn');
    
    const countUpTimer = runTimer();
    countUpTimer.setTimerRunningState(false);
    const textarea = document.getElementById('answer-input');
    const maxChars = 100;
    const splitedOverArray = []

    timerContainer.addEventListener('click',()=>{
        if (!countUpTimer.stopTimerFlag) return;
        countUpTimer.setTimerRunningState(true);
        showQuestionOnScreen(questionInfo.currentQuestionIndex);
        submitButton.classList.remove('hidden');
    })

    submitButton.addEventListener('click',()=>{
        submitAnswer(questionInfo, countUpTimer);
    });


}

runQuestionPage();