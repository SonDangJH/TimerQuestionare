function runQuestionPage() {
    const questionInfo = {
        currentQuestionIndex: 0,
        totalScore: 0,
    }

    const timerContainer = document.getElementById("timer-container");
    const submitButton = document.getElementById('submit-btn');
    
    const countUpTimer = runTimer();
    countUpTimer.setTimerRunningState(false);

    timerContainer.addEventListener('click',()=>{
        if (!countUpTimer.stopTimerFlag) return;
        countUpTimer.setTimerRunningState(true);
        showQuestionOnScreen(questionInfo.currentQuestionIndex);
        submitButton.classList.remove('hidden');
    })

    submitButton.addEventListener('click',()=>{
        countUpTimer.setTimerRunningState(false);
        submitAnswer(questionInfo, countUpTimer);
    });

}

runQuestionPage();