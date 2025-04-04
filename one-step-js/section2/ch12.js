// 생성자 함수 - 새로운 객체를 생성하는 함수
// 동일한 구조의 객체를 여러 개 생성할 때 유용
// 코드의 재사용성을 높아짐
// 반복되는 코드 작성을 줄여줌

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

// 인스턴스 생성
const person1 = new Person("홍길동", 20, "Manager");
const person2 = new Person("김철수", 30, "Developer");

console.log(person1); // Person { name: '홍길동', age: 20, job: 'Manager' }
console.log(person2); // Person { name: '김철수', age: 30, job: 'Developer' }
