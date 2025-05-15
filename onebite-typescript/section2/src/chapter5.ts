// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거할 수 있게 하는 타입
// enum은 컴파일 결과 사라지지 않는다.

enum Role {
  // 숫자형 enum
  // value를 지정하지 않으면 0부터 시작
  // value를 지정하면 그 값부터 시작
  ADMIN = 11,
  USER,
  GUEST,
}

enum Language {
  // 문자형 enum
  Korean = "ko",
  English = "en",
  Spanish = "es",
}

let user1 = {
  name: "John",
  role: Role.ADMIN,
  language: Language.Korean,
};

let user2 = {
  name: "John",
  role: Role.USER,
  language: Language.English,
};

let user3 = {
  name: "John",
  role: Role.GUEST,
  language: Language.Spanish,
};

console.log(user1, user2, user3);
