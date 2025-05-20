// 제네릭 인터페이스
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let keyPair1: KeyPair<number, string> = { key: 1, value: 'hello' };
let keyPair2: KeyPair<boolean, string[]> = { key: true, value: ['hello', 'world'] };

// 인덱스 시그니처
interface NumberMap {
  [index: string]: number;
}

let numberMap1: NumberMap = {
  key: -123,
  key2: 123,
};

interface Map<T> {
  [index: string]: T;
}

let stringMap: Map<string> = {
  key: 'hello',
  key2: 'world',
};

let booleanMap: Map<boolean> = {
  key: true,
  key2: false,
};

// 제네릭 타입 별칭
type Map2<T> = {
  [index: string]: T;
};

let stringMap2: Map2<string> = {
  key: 'hello',
};

let booleanMap2: Map2<boolean> = {
  key: true,
};

// 제네릭 인터페이스의 활용 예시
// -> 유저 관리 프로그램
// -> 유저 구분 : 학생 유저 / 개발자 유저

interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  console.log(user.profile.school);
}

const developerUser: User<Developer> = {
  name: 'John',
  profile: {
    type: 'developer',
    skill: 'typescript',
  },
};

const studentUser: User<Student> = {
  name: 'Jane',
  profile: {
    type: 'student',
    school: 'MIT',
  },
};
