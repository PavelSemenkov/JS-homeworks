"use strict";

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - сначала ++ прибавляет единицу к a(1), потом присваивает c значение увеличенного a(2)
d = b++; alert(d);           // 1 - наоборот, сначала присваивает d значение b(1), потом увеличивает через ++ на единицу b(2)
c = (2+ ++a); alert(c);      // 5 - использует уже измененное значение а(2) прибавляет к нему через ++ единицу a(3), потом складывает с 2, c(5)
d = (2+ b++); alert(d);      // 4 - наоборот, 2 + старое значение из второго примера b(2), d(4), лишь после учеличивая значение на единицу b(3)
alert(a);                    // 3 - результаты увеличения переменных из предыдущих случаев, их изменение объяснено
alert(b);                    // 3 - результаты увеличения переменных из предыдущих случаев, их изменение объяснено

var e = 2;
var x = 1 + (e *= 2); // - x будет равен 5, оператор *= присваивает значение переменной перемножая её на значение справа, альтернативно e = e*2

let f = +prompt("Задайте значение первой переменной: ");
let h = +prompt("Задайте значение второй переменной: ");

if (f >= 0 && h >= 0) {
    if (f > h) {
        alert("Разность:" + (f - h))
    } else if (f === h) {
        alert("Переменные равны")
    } else {
        alert("Разность переменных = " + (h - f))
    }
} else if (f < 0 && h < 0) {
    alert ("Произведение отрицательных переменных = " + (f * h))
} else {
    alert("Сумма чисел = " + (f + h))
}


f = +prompt("Введите число от 0 до 15: ")
switch (f) {
    case 0:
        console.log(f);
        f++;
    case 1:
        console.log(f);
        f++;
    case 2:
        console.log(f);
        f++;
    case 3:
        console.log(f);
        f++;
    case 4:
        console.log(f);
        f++;
    case 5:
        console.log(f);
        f++;
    case 6:
        console.log(f);
        f++;
    case 7:
        console.log(f);
        f++;
    case 8:
        console.log(f);
        f++;
    case 9:
        console.log(f);
        f++;
    case 10:
        console.log(f);
        f++;
    case 11:
        console.log(f);
        f++;
    case 12:
        console.log(f);
        f++;
    case 13:
        console.log(f);
        f++;
    case 14:
        console.log(f);
        f++;
    case 15:
        console.log(f);
        break;
    default:
        alert("Вы ввели неверное число");
        break;
} // не понял как можно по-другому с этим оператором это организовать, я привык такие переборы делать через for или while, а тут такая громозкая вещь получается.


f = +prompt("Задайте значение первой переменной: ");
h = +prompt("Задайте значение второй переменной: ");

function operPlus(f,h) {
    return(alert("Результат сложения: " + (f + h)));
}
operPlus(f,h);

function operMinus(f,h) {
    return(alert("Результат вычитания: " + (f - h)));
}
operMinus(f,h);

function operMult(f,h) {
    return(alert("Результат умножения: " + (f * h)));
}
operMult(f,h);

function operDiv(f,h) {
    return(alert("Результат деления: " + (f / h)));
}
operDiv(f,h);

let operation = prompt("Введите одну из математических операций: сложение, вычитание, умножение, деление: ")
function mathOperation(f,h, operation) {
    switch (operation) {
        case "сложение":
            operPlus(f, h);
            break;
        case "вычитание":
            operMinus(f, h);
            break;
        case "умножение":
            operMult(f, h);
            break;
        case "деление":
            operDiv(f, h);
            break;
        default:
            alert("Неверно введена операция");
            break;
    }
}

mathOperation(f,h, operation);

/* ### 7 - абстрактные алгоритмы сравнения считают null +0, а по итогу сравнения с 0 идут от противного.
И единственная ниша куда попадает null по отношению к 0 это >=, всё остальное false. Правда не совсем понимаю где это может пригодиться,
ведь код нужно проектировать четко, без необходимости сравнивать null с 0.
 */

let val = +prompt("Введите число: ");
let pow = +prompt("Введтие значение степени: ");

function valPow(val, pow) {
    if (pow !== 1) {
        return val *= valPow(val,pow - 1); // сначала спускаемся вниз по степени "складируя" вызовы, потом дойдя до 1 поднимаемся назад с возведением в степень.
    } else {
        return val
    }
}

alert(val + " в степени " + pow + " = " + (valPow(val,pow)));