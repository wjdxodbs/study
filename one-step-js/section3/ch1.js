// 동기 - 하나의 작업이 실행되는 동안 다른 작업이 대기하는 방식
const workA = () => {
  console.log("workA");
};

const workB = () => {
  console.log("workB");
};

const workC = () => {
  console.log("workC");
};

workA();
workB();
workC(); // workA, workB, workC 순서대로 실행됨

// 비동기 - 작업이 종료되기를 기다리지 않고 다음 작업을 실행하는 방식
setTimeout(() => {
  console.log("비동기 ");
}, 3000);

console.log("종료"); // 종료가 호출되고 3초 뒤에 비동기 작업이 실행됨
