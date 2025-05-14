const input = 20;

function fibo_recursion(n) {
  if ([1, 2].includes(n)) {
    return 1;
  }

  const num1 = fibo_recursion(n - 1);
  const num2 = fibo_recursion(n - 2);

  return num1 + num2;
}

console.log(fibo_recursion(input)); // 6765
