'use strict';

//alert("Hello")

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18"); //что бы ни ввел здесь пользователь тип данных будет "string"
// console.log(answer);
// console.log(typeof(answer));   //typeof это метод для определения типа данных 

// const answer2 = +prompt("Сколько дней ты не какал?", "");    //Тут с помощью "+" перед методом мы получим не string а number
// console.log(typeof(answer2));   

const answers = [];

// answers[0] = prompt('Как ваше имя?', "");
// answers[1] = prompt('Как ваша фамилия?', "");
// answers[2] = prompt('Сколько вам лет?', "");

// document.write(answers);
console.log(typeof(answers));    // массив [] это object, а не тип данных
console.log(typeof(null));    // консоль показывает что null это объект, но это официально признанная ошибка нужно помнить про нее

// кстати говоря методы prompt alert document и прочие в терминале не работают, их можно тестировать, только в браузере