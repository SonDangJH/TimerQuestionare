function runTimer() {
    let totalSeconds = 0;
    let stopTimerFlag = true;
    const minutesLabel = document.getElementById("minutes");
    const secondsLabel = document.getElementById("seconds");
    setInterval(setTimer, 1000);

    function setTimerRunningState(run) {
        stopTimerFlag = !run;
    }

    function setTimer() {
        if (!stopTimerFlag)
        {
            ++totalSeconds;
            secondsLabel.innerHTML = formatDigitInTimer(totalSeconds % 60);
            minutesLabel.innerHTML = formatDigitInTimer(parseInt(totalSeconds / 60));
        }
    }

    function formatDigitInTimer(digit) {
        const digitString = digit.toString();
        return digitString.length < 2 ? "0" + digitString : digitString;
    }

    return {
        stopTimerFlag,
        setTimerRunningState,
    }
}


