// void -> 공허 - 아무것도 없음을 의미하는 타입

// 함수에서 반환 값이 없는 경우
function returnVoid(): void {
  console.log("void");
}

let a: void;
// a = 1;
// a = null;
// a = {};
a = undefined; // 오직 undefined만 할당할 수 있다.

// never - 존재하지 않는 타입 - 불가능한 타입
function func(): never {
  // 정상적으로 종료되지 않는 함수
  while (true) {}
}

function throwError(): never {
  // 실행되면 바로 종료되는 함수
  throw new Error();
}

let b: never; // 아무런 값도 할당할 수 없는 타입
// b = 1;
// b = "hello";
// b = {};
// b = undefined
