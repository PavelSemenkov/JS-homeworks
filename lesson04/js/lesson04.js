'use strict';

/**
 * Функция разделения числа на единицы, десятки и сотни
 * @param x получаем от пользователя число
 * @returns {{}} возвращаем объект с разделенным числом
 */
function numbDivide(x) {
    let numbArr = {};
    if (x > 999 || x < 0 || isNaN(x) || !Number.isInteger(x)) {
        return ("Вы ввели неверное число " + numbArr);
    } else {
        let hundreds = Math.floor(x/100);
        numbArr.units = (x%10);
        numbArr.tens = Math.floor((x-(hundreds*100))/10);
        numbArr.hundreds = hundreds;
        return numbArr;
    }
}

let  x = +prompt("Введите целое число в диапазоне от 0 до 999");
console.log(numbDivide(x));

/**
 * Конструктор для создания продукта. Решил не делать статичную скидку, а сделал любую, что вводит пользователь, с проверкой на ошибку.
 * @param name - Имя продукта
 * @param price - Цена продутка
 * @constructor
 */
function Product(name, price) {
    this.name = name;
    this.price = parseInt(price);
}

Product.prototype.makeDiscount = function(discount){
        if (discount > 0 && discount < 100) {
            this.price = this.price - (this.price/100*discount);
        } else {
            console.log(`Ошибка при вводе значения скидки - ${discount}`);
        }
}
const product1 = new Product('Car - Ford', '22345');
console.log(product1);
product1.makeDiscount(25);
console.log(product1);

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.editText = function (text) {
    this.text = text;
}

const post1 = new Post('Jhon', 'lorem', '24.10.2020');
console.log(post1);
post1.editText('ipsum');
console.log(post1);

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = highlighted;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const post2 = new AttachedPost('Jane', 'abra', '25.10.2020', false);
console.log(post2);
post2.editText('cadabra');
post2.makeTextHighlighted();
console.log(post2);

class Post3 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    editText(text) {
        this.text = text;
    }
}

const post3 = new Post3('Alex', 'test', '14.10.2020');
console.log(post3);
post3.editText('abcdefg');
console.log(post3);

class AttachedPost2 extends Post3 {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = highlighted;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const post4 = new AttachedPost2('Alice', 'blabla', '05.10.2020', false);
console.log(post4);
post4.editText('agree');
post4.makeTextHighlighted();
console.log(post4);