// 인터페이스
interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void; // 함수 오버로딩을 사용하고 싶으면 호출시그니처를 사용
  sayHi(a: number): void;
}

type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person = {
  name: 'John',
  age: 30,
  sayHi(a?: number) {
    if (typeof a === 'number') {
      console.log('Hi ' + a);
    } else {
      console.log('Hi');
    }
  },
};

person.sayHi();
person.sayHi(1);
