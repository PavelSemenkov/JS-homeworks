'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

let textDiv = document.querySelector('.text');
let navLinks = document.querySelectorAll('.nav-link');

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
navLinks.forEach(function clickHandler(navlink) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
       navlink.addEventListener('click', function (event) {
           changeText(event.currentTarget);
           changeActiveClass(event.currentTarget);
       })
});

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(target) {
    navLinks.forEach(function (navlink){
        navlink.classList.remove('active');
    });
    if (!target.classList.contains('active')){
        target.classList.add('active');
    }
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(target) {
    for (let i = 1; i <= Object.keys(texts).length; i++) {
        if (target.textContent.includes(i.toString())) {
            textDiv.innerText = texts["text"+[i]];
        }
    }
}