// 타입 별칭 - 중복된 타입을 줄이기 위해 사용
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "John",
  nickname: "John",
  birth: "1990-01-01",
  bio: "I'm a developer",
  location: "Seoul",
};

let user2: User = {
  id: 1,
  name: "John",
  nickname: "John",
  birth: "1990-01-01",
  bio: "I'm a developer",
  location: "Seoul",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumbers = {
  [key: string]: number; // 규칙을 위반하지만 않으면 타입 시스템에 문제가 없다.
  Korea: number; // 반드시 타입 시스템에 포함되어야 한다.
};

// let countryNumbers: CountryNumbers = {}; // Korea 프로퍼티가 없으면 타입 시스템에 문제가 있다.
