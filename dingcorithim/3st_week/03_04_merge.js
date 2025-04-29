array_a = [1, 2, 3, 5];
array_b = [4, 6, 7, 8];

function merge(array1, array2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i += 1;
    } else {
      result.push(array2[j]);
      j += 1;
    }
  }

  if (i < array1.length) {
    for (let k = i; k < array1.length; k++) {
      result.push(array1[k]);
    }
  } else if (j < array2.length) {
    for (let k = j; k < array2.length; k++) {
      result.push(array2[k]);
    }
  }

  return result;
}

console.log(merge(array_a, array_b)); // [1, 2, 3, 4, 5, 6, 7, 8] 가 되어야 합니다!

console.log(
  "정답 = [-7, -1, 5, 6, 9, 10, 11, 40] / 현재 풀이 값 = ",
  merge([-7, -1, 9, 40], [5, 6, 10, 11])
);
console.log(
  "정답 = [-1, 2, 3, 5, 10, 40, 78, 100] / 현재 풀이 값 = ",
  merge([-1, 2, 3, 5, 40], [10, 78, 100])
);
console.log(
  "정답 = [-1, -1, 0, 1, 6, 9, 10] / 현재 풀이 값 = ",
  merge([-1, -1, 0], [1, 6, 9, 10])
);
