// 타입 추론
// 초기값을 기준으로 타입을 추론
// 추론할 정보가 있으면 타입을 추론 없으면 추론을 못함
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return message;
}

// 암묵적으로 any 타입으로 추론 - any타입 진화
// 명시적으로 타입을 지정하면 타입 진화가 일어나지 않음
let d;
d = 1; // 이제 숫자 타입으로 추론
d.toFixed();

d = "hello"; // 이제 문자열 타입으로 추론
d.toUpperCase();

// 상수로 선언하면 리터럴 타입으로 추론
const num = 10;
const str = "hello";

let arr = [1, "hello", true];
