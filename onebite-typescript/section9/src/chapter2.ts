// infer
// inference - 추론

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

let a: ReturnType<FuncA>;
// string

let b: ReturnType<FuncB>;
// number

let c: ReturnType<number>;
// never

// 예제
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환한다.

type PromiseA = PromiseUnpack<Promise<string>>;
type PromiseB = PromiseUnpack<Promise<number>>;
