let array1 = ["green", "blue"];
let array2 = ["purple", "yellow", "green", "blue"];

console.log(array1.concat(array2));
console.log(array2.join());

let colors = ["green", "blue", "purple"];
colors.sort();

console.log(colors);

const compare = (a, b) => {
  if (a.b) return -1;
  else if (a < b) return 1;
  else return 0;
};

let colors2 = ["green", "blue", "purple"];
colors2.sort(compare);

console.log(colors2);

const compare2 = (a, b) => {
  return b - a;
};
let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort(compare2);
console.log(numbers);

let numbers2 = [1, 100, 25, 50];
let sum = 0;

-numbers2.forEach((elm) => {
  sum += elm;
});

console.log(sum);

let numbers3 = [1, 100, 25, 50];
let sum1 = numbers3.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx);
  return acc + cur;
}, 0);

console.log(sum1);

let a = Array.isArray([1, 100, 50]);
let b = Array.isArray({ id: 1, color: "green" });
let c = Array.isArray("string");
let d = Array.isArray(undefined);

console.log(a, b, c, d);
