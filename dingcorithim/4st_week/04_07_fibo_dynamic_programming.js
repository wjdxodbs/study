const input = 50;

const memo = {
  1: 1,
  2: 1,
};

// 1. 메모에 이미 해당 값이 있으면 반환한다.
// 2. 만약 없다면, 그 값을 피보나치를 통해 구하고 메모에 저장한다.

function fibo_dynamic_programming(n, fibo_memo) {
  if (fibo_memo[n]) {
    return fibo_memo[n];
  }

  const result =
    fibo_dynamic_programming(n - 1, fibo_memo) +
    fibo_dynamic_programming(n - 2, fibo_memo);

  fibo_memo[n] = result;

  return result;
}

console.log(fibo_dynamic_programming(input, memo));
