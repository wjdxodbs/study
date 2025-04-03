// 호이스팅 - 식별자의 선언문이, 스코프의 최상단으로 옮겨진 것처럼 동작하는 것

// 함수 호이스팅
connectStrings("study", "hoisting");

function connectStrings(str1, str2) {
  console.log(str1 + str2);
}

// 변수 호이스팅
console.log(num1); // 에러 발생
console.log(num2); // undefined

let num1 = 10; // 변수가 초기화되기 전에 접근하려고 하면 에러 발생
var num2 = 20;
// 변수가 선언되면 tdz가 생기고, 변수가 초기화되기 전에 접근하려고 하면 에러 발생
