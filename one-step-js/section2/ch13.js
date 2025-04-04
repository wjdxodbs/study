// 반복문
// 특정 작업을 반복적으로 수행하는 구문

// for 반복문 - 일정 횟수만큼 반복
for (let i = 0; i < 10; i++) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
}

// while 반복문 - 조건이 참인 동안 반복
let i = 0;
while (i < 10) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
  i++;
}

// 배열의 모든 요소에 접근
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1 2 3 4 5
}

for (const i of arr) {
  console.log(i); // 1 2 3 4 5
}

// 객체의 모든 프로퍼티에 접근
const person = { name: "홍길동", age: 25, height: 180 };

// 객체의 모든 키를 배열로 반환
const newArr1 = Object.keys(person);

for (let i = 0; i < newArr1.length; i++) {
  let nowKey = newArr1[i];
  console.log(`key: ${nowKey}, value: ${person[nowKey]}`);
}

// 객체의 모든 값을 배열로 반환
const newArr2 = Object.values(person);

for (let i = 0; i < newArr2.length; i++) {
  console.log(`value: ${newArr2[i]}`);
}

// 객체의 모든 키와 값을 배열로 반환
const newArr3 = Object.entries(person);

for (let i = 0; i < newArr3.length; i++) {
  console.log(`key: ${newArr3[i][0]}, value: ${newArr3[i][1]}`);
}

for (let key in person) {
  console.log(`key: ${key}, value: ${person[key]}`);
}
