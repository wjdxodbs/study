// 대수 타입
// 여러개의 타입을 합쳐서 새로운 타입을 만드는 것

// 합집합 타입 - 유니온 타입
let a: string | number | boolean = 1;
a = "hello";
a = true;

let arr: (string | number | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "돌돌이",
  color: "brown",
};

let union2: Union1 = {
  name: "영식",
  language: "english",
};

let union3: Union1 = {
  name: "영식",
  language: "english",
  color: "brown",
};

// let union4: Union1 = { // Union1에 포함되지 않는다다
//   name: "영식",
// };

// 교집합 타입 - 인터섹션 타입
let variable: string & boolean;

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "돌돌이",
  color: "brown",
  language: "english",
};
