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

console.log(colors.includes("blue"));
console.log(colors.includes("yellow"));

console.log(colors.includes("blue", 2));
console.log(colors.includes("blue", 1));

console.log(colors.indexOf("purple"));
console.log(colors.indexOf("yellow"));

let colors2 = [
  { id: 1, color2: "green" },
  { id: 2, color2: "blue" },
  { id: 3, color2: "purple" },
  { id: 4, color2: "yellow" },
];
console.log(colors2.indexOf("blue", 1));

colors2.findIndex((elm, idx, array) =>
  console.log(`${idx} 번째 값은 id: ${elm.id}, color: ${elm.color2}`)
);
colors2.findIndex((elm, idx, array) => console.log(array));

let idx = colors2.find((elm) => elm.color2 === "purple");

console.log(idx);

let filterArray = colors2.filter((elm, idx, array) => elm.id > 1);

console.log(filterArray);

let sliceArray = colors2.slice(1, 3);

console.log(sliceArray);
