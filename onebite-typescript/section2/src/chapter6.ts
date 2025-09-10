// any
// 특정 변수의 타입을 모르는 경우
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase(); // 런타임에 에러가 발생할 수 있다.
anyVar.toFixed();

let num: number = anyVar; // 모든 타입의 변수에 할당할 수 있다.

// unknown
// any와 유사하지만 더 엄격한 타입
let unknownVar: unknown = 10;
unknownVar = "hello";
unknownVar = true;
unknownVar = {};
unknownVar = () => {};

// let num2: number = unknownVar; // 모든 타입의 변수에 할당할 수 없다.
// unknownVar.toUpperCase(); // 절대 허용되지 않는다.

// 타입 좁히기
if (typeof unknownVar === "number") {
  unknownVar.toFixed();
}
