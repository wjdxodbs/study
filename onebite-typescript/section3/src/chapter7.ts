// 타입 단언
// 타입 단언의 실제로 값을 변경하는 것이 아니라, 타입을 변경하는 것
type Person = {
    name: string;
    age: number;
};

const person = {} as Person;
person.name = "John";
person.age = 30;

type Dog = {
    name: string;
    color: string;
};

const dog = {
    name: "멍멍이",
    color: "brown",
    breed: "진도",
} as Dog; 

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼 타입이거나,
// A가 B의 서브 타입이어야 한다.

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; // number와 string은 서로 상속관계가 없음
let num4 = 10 as unknown as string; // unknown으로 다중단언을 하면 단언이 안되는 타입으로 변환됨
// 하지만 좋은 방법은 아니다.

// const 단언
let num5 = 10 as const;
let cat = { 
    // 객체에서 const 단언을 하면 readonly가 된다.
    name: "냥냥이",
    color: "white",
} as const;
// cat.name = ''

// Non Null 단언
type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: "게시글1",
    author: "이정환",
}

const len:number = post.author!.length; // 값이 무조건 존재한다고 단언  
