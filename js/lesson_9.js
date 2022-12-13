'use strict';

//console.log('arr' + ' - object');

let incr = 10,
    decr = 10;

// incr++; //постфиксное значение
// decr--; //постфиксное значение

// ++incr; //префиксное значение
// ++decr; //префискное значение



console.log(incr++);    //здесь вывод будет 10 т.к. унарный оператор "+" идет после переменной
console.log(decr++);    //здесь вывод будет 10 т.к. унарный оператор "-" идет после переменной

console.log(++incr);    //здесь вывод будет 11 т.к. унарный оператор "+" идет перед переменной
console.log(--decr);    //здесь вывод будет 9 т.к. унарный оператор "-" идет перед переменной


console.log(2 * 4 == 8)     //Вывод будет true
console.log(2 * 4 == '8')   //Вывод будет true потому что "==" сравнивает значения
console.log(2 * 4 === '8')  //Вывод будет false, потому "===" сравнивает еще и тип данных
console.log(2 * 4 === 8)    //Вывод будет truе



 const isChecked = true;
 const isClosed = false;

 console.log(isChecked && isClosed); //Вернет false потому что оператор "И"

 const x = true;
 const y = false;

 console.log(x || y);   //Вернет true ибо оператор "ИЛИ"

const z = false;
const t = false;

console.log(z || !t)   //Вернет true ибо оператор отрицания "!" делает из t то есть из false - true