//Task 2
console.log("Слава нації!");

//Task 3
let a, b;
a = 1;
b = 2;

console.log("a =" + a + "b =" + b);

a = b;

console.log("a =" + a + "b =" + b);

//Task 4
let object = {
    string: "Об'єкт",
    number: 3,
    boolean: false,
    undefined: undefined,
    null: null
};

//Task 5
let isAdult = confirm("Вам виповнилося 18 років?");
console.log(isAdult);

//Task 6
let name = "Андрій";
let surName = "Матичак";
let group = "КН - 321";
let birthday = "2004"
let married ="false";

console.log(birthday);
console.log(married);
console.log(name);
console.log(surName);
console.log(group);

let Undef = undefined;
let Null = null;

console.log(typeof Undef);
console.log(typeof Null);

//Task 7
let login = prompt("Введіть логін");
let email = prompt("Введіть email");
let password = prompt("Введіть пароль");

alert("Dear " + login + "!\n" + "Your email is " + email + "\n" + "Your password is " + password);

//Task 8
let secondInHour = 3600;
let secondInDay = 24*secondInHour;
let secondInMonth = 30*secondInDay;

alert("Секунд в годині = " + secondInHour+ ", Секунд в дні = " + secondInDay + ", Секунд в місяці = " + secondInMonth);