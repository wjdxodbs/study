array = [5, 3, 2, 1, 6, 8, 7, 4];

function merge_sort(array) {
  if (array.length === 1) {
    return array;
  }

  const mid = Math.floor((0 + array.length) / 2);
  const left_arr = merge_sort(array.slice(0, mid));
  const right_arr = merge_sort(array.slice(mid, array.length));

  const result = merge(left_arr, right_arr);

  return result;
}

function merge(array1, array2) {
  result = [];
  array1_index = 0;
  array2_index = 0;

  while (array1_index < array1.length && array2_index < array2.length) {
    if (array1[array1_index] < array2[array2_index]) {
      result.push(array1[array1_index]);
      array1_index += 1;
    } else {
      result.push(array2[array2_index]);
      array2_index += 1;
    }
  }

  if (array1_index == array1.length) {
    while (array2_index < array2.length) {
      result.push(array2[array2_index]);
      array2_index += 1;
    }
  }

  if (array2_index == array2.length) {
    while (array1_index < array1.length) {
      result.push(array1[array1_index]);
      array1_index += 1;
    }
  }

  return result;
}

console.log(merge_sort(array)); // [1, 2, 3, 4, 5, 6, 7, 8] 가 되어야 합니다!

console.log(
  "정답 = [-7, -1, 5, 6, 9, 10, 11, 40] / 현재 풀이 값 = ",
  merge_sort([-7, -1, 9, 40, 5, 6, 10, 11])
);
console.log(
  "정답 = [-1, 2, 3, 5, 10, 40, 78, 100] / 현재 풀이 값 = ",
  merge_sort([-1, 2, 3, 5, 40, 10, 78, 100])
);
console.log(
  "정답 = [-1, -1, 0, 1, 6, 9, 10] / 현재 풀이 값 = ",
  merge_sort([-1, -1, 0, 1, 6, 9, 10])
);
