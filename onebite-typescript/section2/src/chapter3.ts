// object - 명목적 타입 시스템
let user1: object = {
  id: 1,
  name: "John",
};

// user.id; // object타입은 단순히 객체를 가리키는 타입이기 때문에 프로퍼티에 접근할 수 없다.

let user2: {
  id?: number; // 선택적 프로퍼티
  name: string;
} = {
  // 객체 리터럴 타입
  // 구조를 기준으로 타입을 정의 - 구조적 타입 시스템
  id: 1,
  name: "John",
};

user2 = {
  name: "John",
};

user2.id; // 프로퍼티에 접근할 수 있다.

let dog: { name: string; color: string } = {
  name: "멍멍이",
  color: "brown",
};

let config: {
  readonly apiKey: string; // 읽기 전용 프로퍼티
} = {
  apiKey: "MY_API_KEY",
};

// config.apiKey = "MY_API_KEY"; // 읽기 전용 프로퍼티는 값을 변경할 수 없다.
