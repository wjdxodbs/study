// 타입 좁히기
// 조건문 등을 이용해 넓은타입에서 좁은타입으로
// 타입을 상황에 따라 좁혀나가는 과정

type Person = {
    name: string;
    age: number;
}

// value => number : toFixed()
// value => string : toUpperCase()
// value => Date : getTime()
// value => Person : name은 age살 입니다.
function func(value: string | number | Date |null | Person) {
    // 타입 가드
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (typeof value === "number") {
        console.log(value.toFixed());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    }  else if (value && "age" in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}

