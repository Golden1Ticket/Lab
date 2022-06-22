//Task 1
let x = 1;
let y = 2;
let res1 = String(x) + y; // Допишіть код (використовувати змінні x і y)
console.log(res1); // "12"
console.log(typeof res1); // "string"
let res2 = Boolean(x) + String(y); // Допишіть код (використовувати змінні x і y)
console.log(res2); // "true2"
console.log(typeof res2); // "string"
let res3 = Boolean(x);// Допишіть код (використовувати змінні x і y)
console.log(res3); // true
console.log(typeof res3); // "boolean"
let res4 = Number(Boolean(x) + String(y));// Допишіть код (використовувати змінні x і y)
console.log(res4); // NaN
console.log(typeof res4); // "number"

//Task 2
let number = prompt("Введіть число: ");
if (number > 0 && (number % 2 == 0)) {
    console.log("Число парне додатнє");
}
if (number % 7 == 0) {
    console.log("Число кратне 7");
}

//Task 3
let isAdult = prompt("Введіть Ваш вік: ");
if (isAdult >= 18) {
    console.log("Ви досягли повнолітнього віку");
} else {
    console.log("Ви ще надто молоді");
}

//Task 4
let sideA = prompt("Введіть довжину першої сторони трикутника: ");
let sideB = prompt("Введіть довжину другої сторони трикутника: ");
let sideC = prompt("Введіть довжину третьої сторони трикутника: ");
if ((sideA > 0) && (sideB > 0) && (sideC > 0) && (sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA)) {
    let S = (sideA + sideB + sideC) / 2;
     console.log("Площа трикутника = " + S);
    if (a ** 2 + b ** 2 === c ** 2 || b ** 2 + c ** 2 === a ** 2 || a ** 2 + c ** 2 === b ** 2) {
        console.log("Трикутник прямокутний");
    }
}
else{
    console.log("Incorrect data");
}

//Task 5
let time = new Date().getHours();

if ((time >=23 && time <24) || time <= 5) {
    console.log("Доброї ночі");
} else if (time <= 11) {
    console.log("Доброго ранку");
} else if (time <= 17) {
    console.log("Доброго дня");
} else if (time <= 23) {
    console.log("Доброго вечора");
}