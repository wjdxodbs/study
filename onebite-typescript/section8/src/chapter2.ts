// 맵드 타입
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in keyof User]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function getUser(): ReadonlyUser {
  // ... 기능능
  return {
    id: 1,
    name: 'John',
    age: 30,
  };
}

const user = getUser();
// user.age = 25;

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({ age: 25 });
