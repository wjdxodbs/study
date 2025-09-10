// 조건부 타입
type A = number extends string ? string : number;

type objA = {
  a: number;
};
type objB = {
  a: number;
  b: number;
};

type B = objB extends objA ? string : number;

// 제네릭과 조건부 타입
type C<T> = T extends number ? string : number;

let a: C<number> = 'hello';
let b: C<string> = 123;

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  }
  return undefined;
}

let result = removeSpaces('hello');
let result2 = removeSpaces(123);
