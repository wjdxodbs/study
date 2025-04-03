// 스코프 - 변수와 함수가 영향을 미치는 범위

// 전역 스코프 - 전체 코드에서 사용 가능
let globalNum = 100;

function testFunc() {
  console.log(globalNum);
}

testFunc();
console.log(globalNum);

// 지역 스코프 - 함수 내부에서만 사용 가능
function testFunc2() {
  let innerNum = 200;
  console.log(globalNum);
  console.log(innerNum);
}

testFunc2();
console.log(globalNum);
console.log(innerNum); // 지역 변수는 선언된 범위 내에서만 사용 가능

let global = "나는 전역 변수입니다.";

function outerFunction() {
  let outer = "나는 외부 함수의 변수입니다.";

  function innerFunction() {
    let inner = "나는 내부 함수의 변수입니다.";
    console.log(global);
    console.log(outer);
    console.log(inner);
  }

  innerFunction();
  console.log(global);
  console.log(outer);
  console.log(inner);
}

outerFunction();

// 블록 스코프 - 함수 내부에서만 사용 가능
function print1() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i); // 블록 스코프는 블록 내부에서만 사용 가능
}

print1();

// 함수 스코프 - 함수 내부에서만 사용 가능
function print2() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i); // 함수 스코프는 함수 내부에서만 사용 가능
}

print2();
