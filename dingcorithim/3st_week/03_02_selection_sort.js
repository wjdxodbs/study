input = [4, 6, 2, 9, 1];

function selection_sort(arr) {
  const l = arr.length;

  for (let i = 0; i < l - 1; i++) {
    let min = [i, arr[i]];

    for (let j = i + 1; j < l; j++) {
      if (min[1] > arr[j]) {
        min = [j, arr[j]];
      }
    }

    [arr[i], arr[min[0]]] = [arr[min[0]], arr[i]];
  }

  return arr;
}

selection_sort(input);
console.log(input); // [1, 2, 4, 6, 9] 가 되어야 합니다!

console.log(
  "정답 = [1, 2, 4, 6, 9] / 현재 풀이 값 = ",
  selection_sort([4, 6, 2, 9, 1])
);
console.log(
  "정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ",
  selection_sort([3, -1, 17, 9])
);
console.log(
  "정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ",
  selection_sort([100, 56, -3, 32, 44])
);
