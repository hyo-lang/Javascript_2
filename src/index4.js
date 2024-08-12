// 전역, 지역

let global = "나는 전역 변수입니다.";

function outFunction() {
  let outer = "나는 외부 함수의 변수입니다.";

  function innerFunction() {
    let inner = "나는 내부 함수의 변수입니다.";
    console.log(global);
    console.log(outer);
    console.log(inner);
  }

  innerFunction();
  console.log(global);
  console.log(outer);
  console.log(inner);
}

outFunction();

function print() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
}

print();
