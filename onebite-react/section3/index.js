// Node.js 사용
// npm init - 프로젝트 초기화

// package.json - scripts에 명령어 추가
// "start": "node index.js"

// 명령어 실행
// npm run start

console.log("안녕 Node.js");

// 모듈 불러오기 - CommonJS 방식
// 확장자 생략 가능
// const { add, subtract } = require("./math");

// 모듈 불러오기 - ES Modules 방식
// 확장자를 붙여줘야 함
import { add, subtract } from "./math.js";
import randomColor from "randomcolor";

console.log(add(1, 2));
console.log(subtract(1, 2));

const color = randomColor();
console.log("color", color);
