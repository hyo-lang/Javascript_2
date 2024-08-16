let arr = [1, 2, 3, 4, 5];

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
