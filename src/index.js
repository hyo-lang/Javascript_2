//산술 연산자

let num1 = 10;
let num2 = 5;

console.log(num1 % 2);
console.log(num2 % 2);

//증감 연산자

let num3 = 10;

console.log(num1++);
console.log(num1);
console.log(++num1);

//감소 연산자

let num4 = 10;

console.log(num4--);
console.log(num4);
console.log(--num4);

//대입 연산자

let num5 = 10;
num5 += 5;

console.log(num5);

//비교 연산자
// 일치

let num6 = 10;
let num7 = "10";

console.log(num6 === num7);
console.log(num6 == num7);

// 불일치

let num8 = 10;
let num9 = "10";

console.log(num8 !== num9);
console.log(num8 != num9);

// 대소 비교 연산자

let a = 10;
let b = 20;
let c = 10;

console.log(a < b);
console.log(a > b);
console.log(a >= c);
console.log(a > c);

// 연결 연산자

let price = 10000;
console.log("가격:" + price + "원");

//논리 연산자
// ture false
// NOT OR AND

// fasle -> true, true -> false

let isClicked = true;
let isOpend = false;

console.log(!isClicked);
console.log(!isOpend);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// null 병합 연산자
// A ?? B

let num10;
let num11 = 10;

console.log(num10 ?? 20);
console.log(num11 ?? 20);

// 삼항 연산자
// A ? B : C

let num12 = 101;
let result = num12 % 2 === 0 ? "짝수" : "홀수";

console.log(result);
