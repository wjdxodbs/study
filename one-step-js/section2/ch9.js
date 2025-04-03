// 함수 표현식 - 변수에 함수를 마치 하나의 값처럼 할당하는 방식
// 함수 표현식은 호이스팅이 일어나지 않기 때문에 함수 표현식 위에서 함수를 호출할 수 없음
const add1 = function (a, b) {
  return a + b;
};

const add2 = (a, b) => {
  return a + b;
};

console.log(add1(1, 2));
console.log(add2(1, 2));

// 콜백 함수 - 함수의 인자로 전달되는 함수
const calculate = (a, b, callback) => {
  let result = a + b;
  callback(result);
};

const printResult = (result) => {
  console.log(`결과: ${result}`);
};

const doubleResult = (result) => {
  console.log(`결과에 2를 곱한 값: ${result * 2}`);
};

calculate(1, 2, printResult);
calculate(1, 2, doubleResult);

// 함수 선언식 - function 키워드를 사용하여 함수를 선언하는 방식
// 함수 선언식은 호이스팅이 일어나기 때문에 함수 선언식 위에서 함수를 호출할 수 있음
function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
