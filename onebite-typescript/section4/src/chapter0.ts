// 함수 타입 정의
// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 - js
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 - ts

function func1(a: number, b: number): number {
  return a + b;
}

// 화살표 함수의 타입 정의
const func2 = (a: number, b: number): number => a + b;

// 함수의 매개변수
// 선택적 매개변수는 필수 매개변수 뒤에 와야 함
function func3(name = "이정환", tall?: number): void {
  console.log(name);
  if (typeof tall === "number") {
    console.log(tall + 10);
  }
}

func3("이정환", 180);
func3("이정환");
func3();

// 나머지 매개변수
function func4(...args: number[]): number {
  return args.reduce((a, b) => a + b);
}

func4(1, 2, 3, 4, 5);
