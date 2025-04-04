// 구조분해 할당

let colors = ["red", "green", "blue"];

// 배열의 길이와 같이 할당
let [c1, c2, c3] = colors;

console.log(c1); // red
console.log(c2); // green
console.log(c3); // blue

// 배열의 길이보다 적게 할당
let [c4, c5] = colors;

console.log(c4); // red
console.log(c5); // green

// 배열의 길이보다 많게 할당
let [c6, c7, c8, c9] = colors;

console.log(c6); // red
console.log(c7); // green
console.log(c8); // blue
console.log(c9); // undefined

// 두 변수의 값 교환
let num1 = 1;
let num2 = 2;

[num1, num2] = [num2, num1];

console.log(num1, num2); // 2 1

let person = {
  a1: "green",
  a2: "blue",
  a3: "purple",
};

// 키값을 기준으로 할당
let { a1, a2, a3 } = person;

console.log(a1); // green
console.log(a2); // blue
console.log(a3); // purple

// 키값을 기준으로 할당하고 변수명을 변경
let { a1: color1, a2: color2, a3: color3 } = person;

console.log(color1); // green
console.log(color2); // blue
console.log(color3); // purple
