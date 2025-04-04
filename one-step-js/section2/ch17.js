// spread 연산자 - 배열 또는 객체를 퍼트릴때 사용
// 객체
let toy = {
  type: "bear",
  price: 1000,
};

const blueToy = {
  ...toy,
  color: "blue",
};

console.log(blueToy); // { type: "bear", price: 1000, color: "blue" }

// 배열
const colors1 = ["red", "green", "blue"];
const colors2 = ["yellow", "purple", "navy"];

const rainbow = [...colors1, "orange", ...colors2];

console.log(rainbow); // ["red", "green", "blue", "orange", "yellow", "purple", "navy"]

// rest 연산자 - 배열 또는 객체를 묶어서 사용용
// rest 연산자는 배열 또는 객체의 마지막에 사용
let { type, ...rest } = blueToy;

console.log(type); // bear
console.log(rest); // { price: 1000, color: "blue" }

let [c1, ...c2] = colors1;

console.log(c1); // red
console.log(c2); // ["green", "blue"]

const print = (a, b, ...rest) => {
  console.log(a, b, rest); // 1 2 [3, 4, 5]
};

print(1, 2, 3, 4, 5);
