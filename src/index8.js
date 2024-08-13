// 생성자 함수

let obj = new Object();
console.log(obj);

// 리터럴

let obj1 = {};
console.log(obj1);

//key value

let car = {
  name: "붕붕",
  model: "morning",
  color: "black",
};
// .표기점
console.log(car.name);
console.log(car.color);

// 대괄호 표기법
console.log(car["name"]);
console.log(car["model"]);
console.log(car["color"]);

const getValue = (key) => {
  console.log(car[key]);
};

getValue("color");

//객체 프로퍼티?

let cat = {
  age: 2,
  name: "야옹이",
  color: "white",
};

cat.name = "옹이";
cat["color"] = "yellow";

delete cat.color;
delete cat["age"];

console.log(cat);

const person = {
  name: "홍길동",
  age: 23,
  print: function () {
    console.log(`제 이름은 ${this.name}입니다.`);
  },
};

person.print();
person["print"]();
