let num1 = 10;
let num2 = 15;
let sum = num1 + num2;

console.log(sum);

function add(num3, num4) {
  console.log(num3 + num4);
}

add(10, 15);

function add(num3, num4) {
  return num3 + num4;
  console.log("함수 호출");
}

let result = add(10, 15);

console.log(`두 숫자를 더한 결과는 ${result} 입니다.`);

//Early return pattern

function compare(num5) {
  if (num5 === 0) {
    return "num5의 값이 0 입니다,";
  }
  if (num5 < 0) {
    return "num5의 값이 0보다 작습니다,";
  }
  if (num5 >= 10) {
    return "num5의 값이 10보다 크거나 같습니다.";
  }
  return "num5의 값이 0보다 크고 10보다 작습니다.";
}

console.log(compare(15));

// 실행순서를 알맞게 실행하기
function print() {
  console.log(1);
  console.log(2);
}

console.log(3);
print();
console.log(4);
