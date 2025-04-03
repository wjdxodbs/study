// 함수
function add1(num1, num2) {
  console.log(num1 + num2);
}

add1(10, 15);

function add2(num1, num2) {
  return num1 + num2;
  console.log("함수 호출"); // return 이후 실행되지 않음
}

let result = add2(10, 15);
console.log(`두 숫자를 더한 결과는 ${result}입니다.`);

// Early Return pattern
function compare(num) {
  if (num === 0) {
    return "num의 값이 0입니다.";
  }
  if (num < 0) {
    return "num의 값이 0보다 작습니다.";
  }
  if (num >= 10) {
    return "num의 값이 10 이상입니다.";
  }
  return "num의 값이 10 미만입니다.";
}

console.log(compare(15));

function print() {
  console.log(1);
  console.log(2);
}

console.log(3);
print(); // 함수가 호출된 위치에 따라 실행 순서가 달라짐
console.log(4);
