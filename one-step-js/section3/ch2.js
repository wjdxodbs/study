// Promise 객체 - 비동기 작업의 결과를 나타내는 객체

// pending - 비동기 작업이 아직 완료되지 않은 상태
// fulfilled - 비동기 작업이 성공한 상태
// rejected - 비동기 작업이 실패한 상태

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 성공하면 resolve 호출
    resolve("성공");

    // 실패하면 reject 호출
    reject("실패");
  }, 2000);
});

promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// 콜백 지옥 - 콜백 함수를 여러 번 중첩하여 사용하는 것
const workA = (value, callback) => {
  setTimeout(() => {
    callback(value + 5);
  }, 5000);
};

const workANew = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 5000);
  });
};

const workB = (value, callback) => {
  setTimeout(() => {
    callback(value - 3);
  }, 3000);
};

const workBNew = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 3000);
  });
};

const workC = (value, callback) => {
  setTimeout(() => {
    callback(value + 10);
  }, 10000);
};

const workCNew = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  });
};

workA("workA", (resA) => {
  console.log(`workA: ${resA}`);
  workB(resA, (resB) => {
    console.log(`workB: ${resB}`);
    workC(resB, (resC) => {
      console.log(`workC: ${resC}`);
    });
  });
});

workANew(10).then((resA) => {
  console.log(`workA: ${resA}`);
  workBNew(resA).then((resB) => {
    console.log(`workB: ${resB}`);
    workCNew(resB).then((resC) => {
      console.log(`workC: ${resC}`);
    });
  });
});

// Promise 체이닝 - 여러 개의 비동기 작업을 순차적으로 실행하는 것
workANew(10)
  .then((resA) => {
    console.log(`workA: ${resA}`);
    return workBNew(resA);
  })
  .then((resB) => {
    console.log(`workB: ${resB}`);
    return workCNew(resB);
  })
  .then((resC) => {
    console.log(`workC: ${resC}`);
  });
