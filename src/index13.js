let colors = ["green", "blue", "purple"];

let [c1, c2, c3] = colors;

console.log(c1);
console.log(c2);
console.log(c3);

let c4, c5, c6; //선언 분리 할당
[c4, c5, c6] = ["green", "blue", "purple"];

console.log(c4);
console.log(c5);
console.log(c6);

let a = 10;
let b = 5;

[a,b] = [b,a];

console.log(a, b);

let colors1 = {
    c7 : "green",
    c8 : "blue",
    c9 : "purple",
}

let { c7, c8, c9, c10 = "yellow"} = colors1;

console.log(c7);
console.log(c8);
console.log(c9);
console.log(c10);

let {c7: colors2, c8: colors3, c9: colors4} = colors1;

console.log(colors2);
console.log(colors3);
console.log(colors4);

