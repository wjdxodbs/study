// 제네릭 - 일반적인, 포괄적인

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func<number>(1);
let str = func<string>('hello');
let bool = func<boolean>(true);
let arr = func<[number, number]>([1, 2]);
