// 배열 - 여러 개의 데이터를 순서대로 저장하는 데이터 타입
// 배열은 대괄호 []로 표현

// 생성자 함수
const arr1 = new Array(1, 2, 3); // [1, 2, 3]
const arr2 = new Array(3); // [undefined, undefined, undefined]

console.log(arr1);
console.log(arr2);

// 배열 리터럴
const arr3 = [1, 2, 3]; // [1, 2, 3]
const arr4 = [3]; // [3]

console.log(arr3);
console.log(arr4);

// 배열 요소 접근 - index 시작은 0번 부터
console.log(arr3[0]); // 1

// 배열 요소 추가
arr3.push(4); // 마지막에 추가
arr3.unshift(0); // 처음에 추가

console.log(arr3); // [0, 1, 2, 3, 4]

// 배열 요소 삭제
arr3.pop(); // 마지막 요소 삭제
arr3.shift(); // 처음 요소 삭제
arr3.splice(1, 2); // 1번 인덱스부터 2개 삭제

console.log(arr3); // [1]

// 배열의 크기
console.log(arr3.length); // 1
