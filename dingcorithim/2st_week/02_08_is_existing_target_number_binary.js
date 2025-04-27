finding_target = 14;
finding_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function is_existing_target_number_binary(target, array) {
  let min = 0;
  let max = array.length - 1;
  let idx = Math.floor((min + max) / 2);

  while (min < max) {
    if (array[idx] === target) {
      return true;
    }

    if (array[idx] > target) {
      max = idx - 1;
    } else {
      min = idx + 1;
    }

    idx = Math.floor((min + max) / 2);
  }

  return false;
}

result = is_existing_target_number_binary(finding_target, finding_numbers);
console.log(result);
