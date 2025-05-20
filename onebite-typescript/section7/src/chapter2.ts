// map 메서드
function map<T, U>(data: T[], callback: (item: T) => U): U[] {
  const result: U[] = [];
  for (let i = 0; i < data.length; i++) {
    result.push(callback(data[i]));
  }
  return result;
}

map([1, 2, 3], (item) => item * 2);
map([1, 2, 3], (item) => item.toString());

// forEach 메서드
function forEach<T>(data: T[], callback: (item: T) => void): void {
  for (let i = 0; i < data.length; i++) {
    callback(data[i]);
  }
}

forEach([1, 2, 3], (item) => console.log(item));
forEach(['123', '456'], (item) => console.log(item));
