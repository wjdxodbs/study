// 함수 타입의 호환성
// 특정 함수의 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 1. 반환값의 타입이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업캐스팅
// b = a; // 다운캐스팅

// 2. 매개변수의 타입이 호환되는가
// 2-1. 매개변수의 개수가 일치하는가

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 업캐스팅
d = c; // 다운캐스팅

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {};
let dogFunc = (dog: Dog) => {};

// animalFunc = dogFunc;
dogFunc = animalFunc;

// 2-2. 매개변수의 개수가 일치하지 않는가
// 매개변수의 타입은 일치해야 한다.
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;
