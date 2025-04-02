// 타입
// typeof 연산자
let num = 10;
console.log(typeof num);

// 원시 타입
// 숫자
let num1 = 10;
let num2 = 10.00012;
let num3 = Infinity;
let num4 = 100 / 0;
let num5 = NaN;
let num6 = "str" / 10;

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);
console.log(typeof num4);
console.log(typeof num5);
console.log(num6);
console.log(typeof num6);

// BigInt
let bigNum1 = 1234567890123456789012345678901234567890n;
let bigNum2 = BigInt(1234567890123456789012345678901234567890);

console.log(typeof bigNum1);
console.log(typeof bigNum2);

// 문자열
let name = "hyobin";
let intro = `제 이름은 ${name}입니다.`; // 템플릿 리터럴

console.log(typeof name);
console.log(typeof intro);

// 불리언
let isClicked = false;

if (isClicked) {
  console.log("clicked");
} else {
  console.log("not clicked");
}

// null
// 빈 값을 의미하는 타입
let nullValue = null;

console.log(typeof nullValue); // object는 javascript의 버그
console.log(nullValue === null);

// undefined
// 값이 할당되지 않은 상태
let undefinedValue;

console.log(typeof undefinedValue);

// 형 변환
// 묵시적 형 변환
let a = "15";
let b = 5;

console.log(a / b); //3

// 명시적 형 변환
let c = 15;
let d = "5";

console.log(parseInt(c) + d); //20
