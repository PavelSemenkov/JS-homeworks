let choice = {
    a: 2,
    getAnswer(question, right) {
        const availableAnswers = ['a', 'b', 'c', 'd'];
        while (true) {
            if (this.a === 0) {
                alert('Вы проиграли');
                return null;
            }
            let userAnswer = prompt('Введите ответ на вопрос английскими буквами: a, b, c или d \n' + question +
                '\n У вас попыток: ' + this.a + '\n Если не хотите играть - жмите Отмена для выхода.');
            if (userAnswer === null) {
                this.a = 0;
                return null;
            }
            if (!availableAnswers.includes(userAnswer)){
                alert('Вы ввели неподходящий ответ, вводите ответ на вопрос английскими буквами');
            }
            if (userAnswer.toLowerCase() === right) {
                alert('Вы ответили верно, поздравляем');
                player.rightAnswers++;
                player.answersCount++;
                this.a = 2;
                break;
            } else {
                player.answersCount++;
                alert('Ответ неверный');
                this.a--;
            }
        }
    }
}