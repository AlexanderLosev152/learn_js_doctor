// let arr = [1, 2, 3, 4];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// arr[1] = "str";
// console.log(arr[1]);
// console.log(arr);

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr);

let arr1 = [1, 2, 3, 4, 545];
console.log(arr1[arr1.length - 1]); // получить последний

arr1.push(1); // add end
arr1.pop(1); // del end
arr1.unshift(222); // add start
arr1.shift(222); // del start
console.log(arr1);

let arr3 = [777, 888, 999];
let arrConcat = arr1.concat(arr3);
console.log(arrConcat);
console.log(arrConcat.indexOf(777)); // узнать индекс элемента
console.log(arrConcat.join("-")); // превратить массив в строку
console.log(arrConcat.splice(1, 1));
console.log(arrConcat.splice(1, 1111, 2222, 3333));
console.log(arrConcat.includes(777)); // проверить есть ли такой элемепнт в массиве
console.log(arrConcat);

let str = "Alex";
console.log(str.split("")); // разбить строку на элементы
