function showQuestionOnScreen(questionIndex) {
    const questionContainer = document.getElementById('question-container');
    const answerInput = document.getElementById('answer-input');
    const questionDetail = questions[questionIndex];
    questionContainer.innerHTML = questionDetail.question;
    if (questionDetail.options !== undefined) {
        answerInput.classList.add('hidden');
        const multipleChoicesContainer = document.getElementById('multiple-choices-container');
        multipleChoicesContainer.innerHTML = ``;
        for (const option of questionDetail.options) {
            multipleChoicesContainer.innerHTML += `<label class="container">${option}
                                                        <input type="radio" name="answer-choice" value=${option}>
                                                        <span class="checkmark"></span>
                                                    </label>`;
        }
    }
    else {
        answerInput.classList.remove('hidden');
        document.getElementById('multiple-choices-container').innerHTML = ``;
    }
}

