function showQuestionOnScreen(questionIndex) {
    const questionContainer = document.getElementById('question-container');
    const questionDetail = questions[questionIndex];
    questionContainer.innerHTML = questionDetail.question;
    if (questionDetail.options !== undefined) {
        document.getElementById('answer-input').classList.add('hidden');
        const multipleChoicesContainer = document.getElementById('multiple-choices-container');
        multipleChoicesContainer.innerHTML = ``;
        for (const option of questionDetail.options) {
            multipleChoicesContainer.innerHTML += `<input type="radio" name="answer-choice" id="${option}" class="radio-btn"  value=${option}>
                                                    <label for="${option}">${option}</label><br>`;
        }
    }
    else {
        document.getElementById('answer-input').classList.remove('hidden');
        document.getElementById('multiple-choices-container').innerHTML = ``;
    }
}
