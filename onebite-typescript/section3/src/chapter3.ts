// Unknown

function unknownExample() {
  let a: unknown = 10; // unknown은 모든 타입의 값을 할당할 수 있다.
  a = "hello";
  a = true;
  a = {};
  a = () => {};

  let unknownVar: unknown;
  // let num: number = unknownVar; //  다운캐스팅이여서 오류가 발생한다.
  // let str: string = unknownVar;
}

// Never -> 공집합
function neverExample() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc(); // 업캐스팅
  let str: string = neverFunc();

  // let never1: never = 1; // 다운캐스팅
}

// void
function voidExample() {
  function voidFunc(): void {
    console.log("void");
    return undefined; // undefined는 void의 하위 타입이여서 할당할 수 있다.
  }

  let voidVar: void = undefined; // 업캐스팅
}

// any - 치트키
function anyExample() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // 다운캐스팅이지만 오류가 발생하지 않는다.
  undefinedVar = anyVar;

  // neverVar = anyVar; // never는 모든 타입의 값을 할당할 수 없다.
}
