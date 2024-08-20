//spread
const toy = {
    type: "bear",
    price: 15000
};

const blueToy = {
    ...toy,
    corlor: "blue"
};

const yellowToy = {
    ...toy,
    color: "yellow"
};

console.log(blueToy);
console.log(yellowToy);

const color1 = ["red", "orange", "yellow"];
const color2 = ["blue", "navy", "purple"];

const rainbow = [...color1, "green", ...color2]

console.log(rainbow);

//rest
//나머지 매개변수

const blueToy1 = {
    type: 'bear',
    price: 15000,
    color: "blue"
}

const{type, ...rest1} = blueToy1;

console.log(type);
console. log(rest1);

const color3 = ["red", "orange", "yellow", "green"];
const [c1, c2, ...rest] = color3;
console.log(c1, c2);
console.log(rest);

const print = (a,b, ...rest) =>{
    console.log(a,b, rest);
};

print(1,2,3,4,5,6);


const print1 = (...rest2) => {
    console.log(rest2);
};
const numbers = [1,2,3,4,5,6];
print1(...numbers);
