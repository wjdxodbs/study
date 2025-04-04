// 배열 내장 함수 - 1

let arr = [1, 2, 3, 4, 5];

// 배열의 요소를 반복하여 콜백 함수를 실행
arr.forEach((elm, idx, arr) => {
  // 배열의 요소, 인덱스, 배열 자체
  console.log(`${idx}번째 요소: ${elm}`);
  console.log(arr);
});

// 배열의 요소를 변형하여 새로운 배열 생성
arr.map((elm, idx, arr) => {
  return elm * 10;
}); // [10, 20, 30, 40, 50]

// 배열의 요소를 필터링하여 새로운 배열 생성
arr.filter((elm, idx, arr) => {
  return elm % 2 === 0;
}); // [2, 4]

// 배열의 마지막 요소 조회
arr.at(-1); // 5

// 배열에 특정 요소가 있는지 확인
arr.includes(1); // true
arr.includes(0); // false
arr.includes(1, 2); // 두 번째 인자는 검색을 시작할 인덱스

// 배열의 요소를 검색하여 인덱스 반환
arr.indexOf(3); // 2
arr.indexOf(0); // -1
arr.indexOf(3, 3); // 두 번째 인자는 검색을 시작할 인덱스

// 배열의 요소를 잘라서 새로운 배열 생성
arr.slice(0, 2); // [1, 2]

let color = [
  { id: 1, color: "red" },
  { id: 2, color: "green" },
  { id: 3, color: "blue" },
];

// 배열의 요소를 검색하여 인덱스 반환
color.findIndex((elm, idx, arr) => {
  return elm.color === "green";
}); // 1

// 배열의 요소를 검색하여 요소 반환
color.find((elm, idx, arr) => {
  return elm.color === "green";
}); // { id: 2, color: "green" }
