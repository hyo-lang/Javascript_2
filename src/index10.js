//for문

//for (let i = 5; i > 0; i--) {
//  console.log(i);
//}

//for (let i1 = 1; i1 < 6; i1++) {
//  console.log(i1);
//}

//while 문

let i2 = 1;
while (i2 < 6) {
  console.log(i2);
  i2++;
}

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// key 반복

let person = {
  name: "홍길동",
  age: 25,
  height: 180,
};

let newArray = Object.keys(person);

for (let i3 = 0; i3 < newArray.length; i3++) {
  let nowKey = newArray[i3];
  console.log(`key: ${nowKey}, value: ${person[nowKey]}`);
}

console.log(Object.keys(person));

// values 반복

let person2 = {
  name: "홍길동",
  age: 25,
  height: 180,
};

let newArray1 = Object.values(person2);

for (let i4 = 0; i4 < newArray1.length; i4++) {
  console.log(`value: ${newArray1[i4]}`);
}

console.log(Object.values(person2));

// entried 반복

let person3 = {
  name: "홍길동",
  age: 25,
  height: 180,
};

let newArray2 = Object.entries(person3);

for (let i5 = 0; i5 < newArray2.length; i5++) {
  console.log(`key: ${newArray2[i5][0]}, value: ${newArray2[i5][1]}`);
}

console.log(Object.entries(person3));

//for of

let arr3 = [1, 2, 3, 4, 5];

for (let i6 of arr) {
  console.log(i6);
}

let person4 = {
  name: "홍길동",
  age: 25,
  height: 180,
};
for (let key in person4) {
  console.log(`key $[key], value : ${person4[key]}`);
}
