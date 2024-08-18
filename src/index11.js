let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((elm) => {
  console.log(elm);
});

arr.forEach((elm, idx) => {
  console.log(`${idx}번째 요소는 ${elm}입니다.`);
});

arr.forEach((elm, idx, array) => {
  console.log(`${idx}번째 요소는 ${elm}입니다.`);
  console.log(array);
});

let newArray = [];

for (let i2 = 0; i2 < arr.length; i2++) {
  newArray.push(arr[i2] * 10);
}

console.log(newArray);

let newArray2 = arr.map((elm) => {
  return elm * 10;
});

console.log(newArray2);

let colors = ["green", "blue", "purple"];
console.log(colors.at(-1));
