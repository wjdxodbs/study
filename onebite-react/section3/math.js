// 모듈 시스템 - 모듈을 다루는 시스템
// 모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템

// 모듈 시스템의 종류
// CommonJS - Node.js에서 사용하는 모듈 시스템
// ES Modules - 최신 브라우저에서 사용하는 모듈 시스템

// 라이브러리란?
// 라이브러리는 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것

// node_modules 폴더
// 설치한 라이브러리가 실제로 저장되는 폴더

// package-lock.json 파일
// 라이브러리들의 버전이나 정보를 package.json 보다 더 정확하고 명확하게 관리해주는 파일

// math 모듈
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// 모듈 내보내기 - CommonJS 방식
// module.exports = { add, subtract };

// 모듈 내보내기 - ES Modules 방식
export { add, subtract };
