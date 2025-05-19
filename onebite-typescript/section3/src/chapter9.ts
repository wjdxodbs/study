// 서로소 유니온 타입
// 교집합이 없는 타입들로 구성된 유니온 타입
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> name님 현재까지 kickCount명 강퇴했습니다..
// Member -> name님 현재까지 point 포인트를 모았습니다..
// Guest -> name님 현재까지 visitCount번번 방문했습니다.
function login(user: User) {
  if (user.tag === "ADMIN") {
    // Admin 타입.
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    // Member 타입.
    console.log(`${user.name}님 현재까지 ${user.point} 포인트를 모았습니다.`);
  } else if (user.tag === "GUEST") {
    // Guest 타입.
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
  }
}

// 복습겸 한가지 더 사례
// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
  state: "LOADING";
};
type SuccessTask = {
  state: "SUCCESS";
  response: { data: string };
};
type FailedTask = {
  state: "FAILED";
  error: { message: string };
};
type AsyncTask = LoadingTask | SuccessTask | FailedTask;

// 로딩 중 -> 로딩중 출력
// 성공 -> response.data 출력
// 실패 -> error.message 출력
function processResult(task: AsyncTask) {
  if (task.state === "LOADING") {
    console.log("로딩 중...");
  } else if (task.state === "SUCCESS") {
    console.log(task.response.data);
  } else if (task.state === "FAILED") {
    console.log(task.error.message);
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};
const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~~",
  },
};
const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~",
  },
};
