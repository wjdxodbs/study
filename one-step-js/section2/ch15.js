// 배열 내장 함수 - 2

let arr1 = ["green", "blue", "red"];
let arr2 = ["purple", "yellow", "orange"];

// 배열 합치기
console.log(arr1.concat(arr2)); // ["green", "blue", "red", "purple", "yellow", "orange"]

// 배열 요소를 문자열로 결합
console.log(arr1.join()); // "green,blue,red"
console.log(arr1.join("")); // "greenbluered"
console.log(arr1.join(" ")); // "green blue"

// 배열 정렬

// 오름차순 정렬
console.log(arr1.sort()); // ["blue", "green", "red"]

const compare1 = (a, b) => {
  // a는 현재 요소, b는 다음 요소
  return a - b;
};

console.log(arr1.sort(compare1)); // ["blue", "green", "red"]

// 내림차순 정렬
const compare2 = (a, b) => {
  return b - a;
};

console.log(arr1.sort(compare2)); // ["blue", "green", "red"]

let arr3 = [1, 2, 3, 4, 5];

// 배열의 모든 요소를 더하기
arr3.reduce((acc, cur, idx) => {
  // acc는 누적값, cur는 현재 요소, idx는 현재 요소의 인덱스
  return acc + cur;
}, 0); // 15

// 배열인지 확인
Array.isArray(arr3); // true
Array.isArray({ id: 1, name: "John" }); // false
Array.isArray("Hello"); // false
