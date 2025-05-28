// Exclude
// 제외한다
// 특정 타입에서 다른 타입을 제외하는 타입

type Exclude<T, U> = T extends U ? never : T;
// 1 단계
// Exclude<string, string> | Exclude<boolean, string>

// 2 단계
// never | boolean

// 결과
// boolean

type A = Exclude<string | boolean, string>;

// Extract
// 추출한다
// 특정 타입에서 다른 타입을 추출하는 타입

type Extract<T, U> = T extends U ? T : never;
// 1 단계
// Extract<string, string> | Extract<boolean, string>

// 2 단계
// string | never

// 결과
// string

type B = Extract<string | boolean, string>;

// ReturnType
// 반환값을 추출하는 타입

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

function funcA() {
  return 'hello';
}

type ReturnA = ReturnType<typeof funcA>;
