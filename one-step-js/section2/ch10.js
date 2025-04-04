// 객체 - 비원시 데이터 타입
// 객체는 키와 값의 쌍으로 이루어진 프로퍼티들의 집합
// 객체는 중괄호 {}로 표현

// 생성자 함수
const obj1 = new Object();

console.log(obj1);

// 객체 리터럴
const obj2 = {};

console.log(obj2);

let book = {
  // key: value
  title: "자바스크립트 첫걸음",
  author: "김효빈",
  category: "자바스크립트",
  color: function () {
    console.log("orange");
  },
};

// 점 표기법
console.log(book.title);

// 괄호 표기법
console.log(book["title"]);

// 프로퍼티 추가
book.price = 25000;
book["year"] = 2024;

// 프로퍼티 삭제
delete book.price;
delete book["year"];

// 메서드 호출
book.color();
book["color"]();
