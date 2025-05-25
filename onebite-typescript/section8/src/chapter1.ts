// keyof 연산자q
type Person = typeof person;

// keyof 연산자는 무족건 타입에서만 사용할 수 있다.
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: 'John',
  age: 30,
};

getPropertyKey(person, 'name'); // John
