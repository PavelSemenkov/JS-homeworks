let player = {
    answersCount: 0,
    rightAnswers: 0,
    choice(userAnswer) {
        this.answersCount = userAnswer.answersCount;
        this.rightAnswers = userAnswer.rightAnswers;
    }
}