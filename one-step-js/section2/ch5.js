// 조건문
// if문
let num = 10;

if (num > 0) {
  console.log("양수");
} else if (num < 0) {
  console.log("음수");
} else {
  console.log("0");
}

// switch case문
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("사과");
    break; // 해당 case문을 실행하고 멈춤
  case "banana":
    console.log("바나나");
    break;
  default:
    console.log("다른 과일");
}
