"use strict";
// Сделал доп задание со второго домашнего задания с яндекс диска
let money = prompt("Введите размер вклада: ");
let x = money.charAt(money.length - 1);
switch (x) {
    case "1":
        alert("Ваш вклад: " + money + " рубль.");
        break;
    case "2":
        alert("Ваш вклад: " + money + " рубля.");
        break;
    case "3":
        alert("Ваш вклад: " + money + " рубля.");
        break;
    case "4":
        alert("Ваш вклад: " + money + " рубля.");
        break;
    default:
        alert("Ваш вклад: " + money + " рублей.");
        break;
}

// Третье домашнее задание
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(i + " - это ноль")
    } else if (i % 2 === 0) {
        console.log(i + " - четное число")
    } else {
        console.log(i + " - нечетное число")
    }
}

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}


console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach((i) => {
    i.price = (i.price/100)*85
})

console.log(products);


const products1 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];


console.log((products1.filter(i => i.photos)).sort(function (a, b){return a.price - b.price;}))

for (let i = 0; i <= 9; console.log(i++)){}

let gorka = "";
for (let i = 0; i < 20; i++) {
    gorka += "x";
    console.log(gorka);
}