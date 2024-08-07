// // сортировка массива
// let arr = [1, 5, 2, 25, 16, 14, 49, 3, 1, 7];
// arr.sort((a, b) => a - b);
// console.log(arr);

// числа фибаначи
const fibanachi = (count) => {
  let fib = [];
  for (let i = 0; i < count; i++) {
    if (i == 0) fib[i] = 1;
    else if (i == 1) fib[i] = 2;
    else fib[i] = fib[i - 2] + fib[i - 1];
    // fib[i - 2] - предпоследний элемент
    // fib[i - 1] - последний элемент
  }
  return fib;
};
let f = fibanachi(16);
console.log(f);

// факториал числа
const factorial = (n) => {
  let fact = 1;
  if (n === 0) return fact;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

let x = factorial(8);
console.log(x);

// получаем число и выводим его сумму и умножение

let addAndMull = function (num) {
  num += ""; // превращаем число в строку
  let add = 0;
  let mul = 1;
  for (let i = 0; i < num.length; i++) {
    add += +num[i];
    mul *= num[i];
  }
  return {
    сумма: add,
    произведение: mul,
  };
};
console.log(addAndMull(1234));

// реверс
const reverse = (number) => {
  number += ""; // превращаем число в строку
  let reverseNumber = "";
  for (let i = number.length - 1; i >= 0; i--) {
    reverseNumber += number[i];
  }
  return +reverseNumber;
};
console.log(reverse(123));

// четные и нечетные цифры
const number = (number) => {
  number += "";
  let chet = 0;
  let nechet = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) chet++;
    else nechet++;
  }
  return {
    четные: chet,
    нечетные: nechet,
  };
};

console.log(number(123));

// алгоритм бинароного поиска.угадай число
const randonNumber = () => {
  let number = Math.floor(Math.random() * 100);
  for (let count = 1; count <= 10; count++) {
    let result = +prompt(`попытка №${count}, введите число:`);
    if (result === number) {
      return alert(`вы угадали число! попыток: ${count}, число : ${number}`);
    } else if (result < number) {
      alert(`ваше число ${result}, меньше загаданного`);
    } else if (result > number) {
      alert(`ваше число ${result}, больше загаданного`);
    }
  }
  return alert(`вы не угадали число! число: ${number}`);
};

randonNumber();
