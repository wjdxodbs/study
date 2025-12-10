//  모듈 시스템
// ECMA Script 모듈 시스템
// 모듈 시스템은 자바스크립트 파일을 모듈로 분리하고 재사용 가능한 코드 블록으로 구성하는 시스템
// 모듈들은 자신만의 스코프를 가지며, 다른 모듈에서 접근할 수 없음
// export 키워드를 사용하여 모듈의 내부 변수, 함수, 클래스 등을 외부에 공개
// import 키워드를 사용하여 다른 모듈의 내용을 가져올 수 있음

// 컴포넌트 단위로 나눈 자바스크립트 파일은 하나의 모듈이며, 다른 파일에서 필요할 때 가져와 사용할 수 있음

// 일반적인 자바스크립트 파일은 전역 스코프를 가지며, 다른 파일에서 접근할 수 있음

// import { num, add, User } from "./ch2_test.mjs";
import * as testModule from "./ch2_test.mjs";

const user = new testModule.User("홍길동");

console.log(testModule.num);
console.log(testModule.add(10, 20));
console.log(user);
