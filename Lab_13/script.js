//Task 1
const arr = [];
arr[0] = 12;
arr[1] = "Слава Україні";
arr[2] = false;
arr[3] = null;
console.log(arr.length);
arr[4] = prompt("Введіть значення: ");
console.log(arr[4]);
arr.shift();
console.log(arr);

//Task 2
let cities = ["Ternopil", "Lviv", "Warsaw"];
cities = cities.join("*")
console.log(cities);

//Task 3
let array = [2, 3, 4, 5];
let dobutok = 1;
for (let i = 0; i < array.length; i++) {
    dobutok *= array[i];
}
while (i < array.length) {
    dobutok *= array[i];
    i++;
}

//Task 4
for (let i = 0; i < 15; i++) {
    if (i % 2 == 0) {
        console.log(i + "is even");
    } else {
        console.log(i + "is odd");
    }
}

//Task 5
function randArray(k) {
    let arr = [];
    for (let i = 0; i < k; i++) {
        arr[i] = Math.floor(Math.random() * 500);
    }
    return arr;
}

a = randArray(5);
console.log(a);

//Task 6
let a = prompt("Введіть число");
let b = prompt("Введіть степінь");

function raiseToDegree(a, b) {
    let value = 1;
    for (let i = 0; i < b; i++) {
        value *= a;
    }
    return value;
}

console.log(raiseToDegree(a, b));

//Task 7
function findMin() {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

console.log(findMin(12, 51, 0.56, -32, -56, -0.001));

//Task 8
function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));

//Task 9
function lastElem(arr, a){
    let finalArray=[];
    if(a===undefined){
        return arr[arr.length-1];
    }
    else{
        for (let i=arr.length-a; i<arr.length; i++){
            finalArray.push(arr[i]);
        }
        return finalArray;
    }
}
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5],2));

//Task 10
function firstLettersUp(string){
    let arr=string.split(" ");
    for (let i=0; i<arr.length; i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    }
    return arr.join(" ");
}

console.log(firstLettersUp(" слава україні"+"\n "+"героям слава"));