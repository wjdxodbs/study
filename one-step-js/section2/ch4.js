// 산술 연산자
let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// 증가 연산자
let num3 = 10;

console.log(num3++); // 10 후위 연산자
console.log(num3); // 11
console.log(++num3); // 12 전위 연산자

// 감소 연산자
let num4 = 10;

console.log(num4--); // 10 후위 연산자
console.log(num4); // 9
console.log(--num4); // 8 전위 연산자

// 복합 대입 연산자
let num5 = 10;

num5 += 10; // num5 = num5 + 10;
console.log(num5); // 20

// 비교 연산자
let num6 = 10;
let num7 = 20;

// 일치
console.log(num6 === num7); // 값과 타입이 같은지 비교
console.log(num6 === 10); // 값만 같은지 비교

// 불일치
console.log(num6 !== num7); // 값과 타입이 다른지 비교
console.log(num6 !== 10); // 값만 다른지 비교

// 대소 비교
console.log(num6 > num7); // 왼쪽 값이 큰지 비교
console.log(num6 < num7); // 오른쪽 값이 큰지 비교
console.log(num6 >= num7); // 왼쪽 값이 크거나 같은지 비교
console.log(num6 <= num7); // 오른쪽 값이 크거나 같은지 비교

// 연결 연산자
let price = 10000;

console.log("가격은" + price + "원 입니다."); // 가격은 10000원 입니다.

// 논리연산자
// NOT
let isClicked = true;

console.log(!isClicked); // false

// AND - 둘다 true일 때만 true
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// OR - 하나만 true이면 true
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 널 병합 연산자
let name = null;

console.log(name || "이름이 없습니다."); // 널이면 뒤에 있는 값 출력

// 삼항 연산자
let num = 100;

console.log(num % 2 === 0 ? "짝수" : "홀수"); // 조건 ? 참 : 거짓
