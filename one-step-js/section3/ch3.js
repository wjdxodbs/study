// async & await - 비동기 코드를 동기 코드처럼 작성할 수 있게 해주는 키워드
const delay = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${ms}ms가 지났습니다.`);
    }, ms);
  });
};

const start1 = () => {
  delay(3000).then((res) => {
    console.log(res);
  });
};

start1();

// async 함수는 항상 Promise를 반환
// await 키워드는 async 함수 내부에서만 사용할 수 있음
// await 키워드는 Promise가 완료될 때까지 대기하고, 완료되면 결과를 반환
const start2 = async () => {
  try {
    // 모든 작업이 순차적으로 실행되고 완료되면 결과를 반환
    const res = await delay(3000);
    console.log(res);
  } catch (error) {
    // 에러 처리
    console.log(error);
  } finally {
    // 비동기 작업 종료
    console.log("비동기 작업 종료");
  }
};

start2();

const workA = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workA");
    }, 5000);
  });
};

const workB = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workB");
    }, 3000);
  });
};

const workC = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("workC");
    }, 10000);
  });
};

const start3 = async () => {
  try {
    // 비동기 작업이 병렬로 실행되고 모든 작업이 완료되면 결과를 배열로 반환
    const res = await Promise.all([workA(), workB(), workC()]);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
