const person = {
    name: 'John',
    age: 30,
    sayHi(a) {
        if (typeof a === 'number') {
            console.log('Hi ' + a);
        }
        else {
            console.log('Hi');
        }
    },
};
person.sayHi();
person.sayHi(1);
export {};
