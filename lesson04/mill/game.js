let game = {
    run(){
        starter.start();
        console.log('Ваши результаты')
        console.log('Общее количество вопросов: ' + starter.riddleAmount);
        console.log('Общее колисество попыток: ' + player.answersCount);
        console.log('Угаданных вопросов: ' + player.rightAnswers);
    },

    init() {
        console.log('Добро пожаловать в игру Кто хочет стать миллионером, чтобы начать игру напишите game.run();')
    }
}

game.init();