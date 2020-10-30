let questions = [
    {
        question: 'Какой город является столицей Франции?',
        answers: [
            'A: Лондон',
            'B: Париж',
            'C: Москва',
            'D: Рим',
        ],
        right: 'b',
        qn: 0
    },
    {
        question: 'Какой город является столицей России?',
        answers: [
            'A: Лондон',
            'B: Париж',
            'C: Москва',
            'D: Рим',
        ],
        right: 'c',
        qn: 1
    },
    {
        question: 'Зимой и летом одним цветом?',
        answers: [
            'A: Елка',
            'B: Нос алкоголика',
            'C: Крокодил',
            'D: 100 долларов',
        ],
        right: 'a',
        qn: 2
    },
    {
        question: 'Самая крупная планета нашей солнечной системы?',
        answers: [
            'A: Сатурн',
            'B: Земля',
            'C: Венера',
            'D: Юпитер',
        ],
        right: 'd',
        qn: 3
    },
    {
        question: 'Температура кипения воды в Цельсиях?',
        answers: [
            'A: 0',
            'B: 100',
            'C: 35',
            'D: 60',
        ],
        right: 'b',
        qn: 4
    }
]

let starter = {
    sheet: "",
    right: "",
    riddleAmount: 5,
    start() {
        for (let i = 0; i < this.riddleAmount; i++){
            this.right = questions[i].right;
            this.sheet += questions[i].question;
            for (let j = 0; j < questions[i].answers.length; j++) {
                this.sheet += '\n';
                this.sheet += questions[i].answers[j];
            }
            if (choice.getAnswer(this.sheet, this.right) === null) {
                i = this.riddleAmount;
                alert('Игра окончена');
                break;
            }
            this.sheet = "";
        }
    }

}