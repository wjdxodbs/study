// 인터페이스의 확장
interface Animal {
  name: string;
  age: number;
}

// 상속
interface Dog extends Animal {
  // name: 'hello'; // 상속 받은 프로퍼티에 동일한 이름으로 재정의 - 원본 타입의 서브 타입으로 재정의
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

const dog: Dog = {
  name: 'hello',
  age: 1,
  isBark: true,
};

const cat: Cat = {
  name: 'Cat',
  age: 2,
  isScratch: true,
};

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: 'DogCat',
  age: 1,
  isBark: true,
  isScratch: true,
};
