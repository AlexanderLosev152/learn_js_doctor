let count = 1;
while (count < 11) {
  console.log(count);
  count++;
}

let count2 = 10;
do {
  console.log(count2);
  count2--;
} while (count2 > 7);

let arr = [5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let item of arr) {
  console.log(item);
}

let obj = {
  name: "Petr",
  age: 25,
  bul: true,
};

for (let key in obj) {
  console.log(`Ключ  ${key}, ЗХначение ${obj[key]}`);
}

arr.forEach((item, i, array) => {
  console.log(`${item} 
    ${i}
      ${array}`);
});

let people = [
  { id: 1, name: "Ivan" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Petr" },
  { id: 4, name: "Gena" },
];

// filter
let aaa = people.filter(function (item) {
  if (item.id < 3) return item;
});
console.log(aaa);

// map
let arra = [1, 2, 3, 4, 5, 6];
let newArra = arra.map(function (item) {
  return item;
});

console.log(newArra);

// сосздать массив с четными числами
let numArr = [];
// for (let i = 0; i < 20; i += 2) {
//   numArr.push(i);
// }

console.log(numArr);

// for (let i = 30; i > 0; i -= 3) {
//   numArr.push(i);
// }
console.log(numArr);

for (let i = 0; i < 10; i++) {
  numArr.push(i * i);
}
console.log(numArr);

// вывести количество четных элементов
let arrr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let count1 = 0;
for (let i = 0; i < arrr1.length; i++) {
  if (arrr1[i] % 2 === 0) {
    count1++;
  }
}
console.log(count1);
