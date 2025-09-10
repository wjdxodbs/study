// 기본 타입간의 호환성
let num1: number = 1;
let num2: 10 = 10;

num1 = num2; // 업캐스팅

// 객체 타입간의 호환성
// 객체 타입은 프로퍼티를 기준으로 호환성을 판단한다.
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // 업캐스팅
// dog = animal; // 다운캐스팅

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook; // 업캐스팅
// programmingBook = book; // 다운캐스팅

// 초과 프로퍼티 검사
// 변수를 초기화 할 떄 객체 리터럴을 사용하면 발동한다.
// 실제 타입에는 정의하지 않은 프로퍼티가 들어오면 오류가 발생한다.
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
};

function func(book: Book) {}
// func({ name: "한 입 크기로 잘라먹는 리액트", price: 33000, skill: "reactjs" });
func(programmingBook);
