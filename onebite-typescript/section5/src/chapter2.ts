// 인터페이스 선언 합침
// 동일한 이름의 인터페이스를 여러번 선언하면 합쳐진 타입으로 병합됨
interface Person {
  name: string;
}

interface Person {
  // name: 'hello'; // 타입 충돌
  age: number;
}

const person: Person = {
  name: 'hello',
  age: 1,
};

// 모듈 보강
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello',
};
