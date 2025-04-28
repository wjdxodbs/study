input = [4, 6, 2, 9, 1];

function bubble_sort(arr) {
  const l = arr.length;

  for (let i = 0; i < l - 1; i++) {
    for (let j = 0; j < l - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

bubble_sort(input);
console.log(input); // [1, 2, 4, 6, 9] 가 되어야 합니다!

console.log(
  "정답 = [1, 2, 4, 6, 9] / 현재 풀이 값 = ",
  bubble_sort([4, 6, 2, 9, 1])
);
console.log(
  "정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ",
  bubble_sort([3, -1, 17, 9])
);
console.log(
  "정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ",
  bubble_sort([100, 56, -3, 32, 44])
);
