//Домашнее задание 5. (после 12 урока)

//Задача №1. Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа
const nmbDiscount = +prompt("Введите число!");
console.log(`Введенное число: ${nmbDiscount}`);
console.log(`10% от введенного числа: ${nmbDiscount * 0.1}`);

//Задача №2. Написать программу, которая получает два числа и выводит наименьшее
const nmbNumber1 = +prompt("Введите ПЕРВОЕ число!");
console.log(`Первое введенное число: ${nmbNumber1}`);
const nmbNumber2= +prompt("Введите ВТОРОЕ число!");
console.log(`Второе введенное число: ${nmbNumber2}`);
if (nmbNumber1 < nmbNumber2) {
    console.log(`Наименьшее этих двух чисел это: ${nmbNumber1}`);
} else if (nmbNumber1 > nmbNumber2){
    console.log(`Наименьшее этих двух чисел это: ${nmbNumber2}`);
} else{
    console.log(`Первое и второе числа -  равны!`);
}

//Задача №3. Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’
let strLessNumber;
const nmbNumber3 = +prompt("Введитe число!");
console.log(`Введенное число: ${nmbNumber3}`);
if (nmbNumber3 < 100) {
    strLessNumber = "Это число меньше 100!";
} else if (nmbNumber3 > 100) {
    strLessNumber = "Это число больше 100!";
} else{
    strLessNumber = "Это число равно 100!";
}
console.log(strLessNumber);

// Задача №4. Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.
const strName = prompt("Пожалуйста введите Ваше имя!");
console.log(`Ваше имя: ${strName}`);
const nmbAge = prompt("Пожалуйста введите Ваш возраст (в годах)!");
console.log(`Ваш возраст: ${nmbAge} лет.`);
if (nmbAge > 17) {
    console.log(`Hello, ${strName}!`);
} else {
    console.log(`Hi, ${strName}!`);
}

