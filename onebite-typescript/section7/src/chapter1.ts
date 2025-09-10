// 첫번째 사례
function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}

const [a, b] = swap<number, string>(1, 'hello');

// 두번째 사례
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

const c = returnFirstValue([1, 2, 3]);
const d = returnFirstValue(['a', 'b', 'c']);
const e = returnFirstValue([1, 'hello', 'name']);

// 세번째 사례
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

const f = getLength([1, 2, 3]);
const g = getLength('12345');
const h = getLength({ length: 10 });
// const i = getLength(123); // length 프로퍼티가 없기 때문에 에러
