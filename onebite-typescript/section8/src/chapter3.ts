// 템플릿 리터럴 타입
type Color = 'red' | 'blue' | 'green';
type Animal = 'cat' | 'dog' | 'bird';
type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal = 'red-cat';
