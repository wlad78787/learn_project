"use strict";

let number = 3;
let number2 = 3.5;


console.log(-4/0); // это Infinity
console.log('string' * 9); // это NaN - not a number

const person = `4`; //это строка и используются бэктики


const bool = true;
const bool2 = false;

console.log(something); //это null но выглядит как ошибка

let und;
console.log(und);  //а это undefined


const obj = {
     name: 'John',      //
     age: 25,           // ЭТО Оъект со своими свойствами, но пока без действий
     isMarried: false,  //
}
console.log(obj.age);       // обращение к свойству объекта через "."
console.log(obj["name"]);   // обращение к свойству объекта через "[]" но лучше через "."

let arr = ['plum.png', 'orange.jpeg', 8, {}, 'apple.bmp', []];
console.log(arr[1]);