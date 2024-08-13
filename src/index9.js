let arr = new Array();
console.log(arr);

let arr1 = new Array(1, 2, 3);
let arr2 = new Array(3);

console.log(arr1);
console.log(arr2);

let array = [1, "hello", null];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

// 배열 push, unshift

let fruits = ["apple", "orange", "peach"];
fruits.push("grape");

console.log(fruits);

let fruits1 = ["apple", "orange", "peach"];
fruits1.unshift("grape");

console.log(fruits1);

// 배열 수정
let animal = ["cat", "dog", "hamster"];

animal = ["cat", "rabbit", "hamster"];
animal[2] = "parrot";

console.log(animal);

const animal2 = ["cat", "dog", "hamster"];

animal2[2] = "parrot";

console.log(animal);

// 배열 삭제 pop shift splice
const colors = ["puple", "skyblue", "green"];
colors.pop();

console.log(colors);

const colors2 = ["puple", "skyblue", "green"];
colors2.shift();

console.log(colors2);

const colors3 = ["puple", "skyblue", "green", "yellow", "orange"];
colors3.splice(1, 3);

console.log(colors3);

const colors4 = ["puple", "skyblue", "green", "yellow", "orange"];
colors4.pop();

console.log(colors);
console.log(colors.length);
