// numbers = [1, 1, 1, 1, 1];
// target_number = 3;

// let cnt = 0;

// function get_count_of_ways_to_target_by_doing_plus_or_minus(idx, total) {
//   if (idx === numbers.length) {
//     if (total === target_number) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }

//   const a = get_count_of_ways_to_target_by_doing_plus_or_minus(
//     idx + 1,
//     total + numbers[idx]
//   );
//   const b = get_count_of_ways_to_target_by_doing_plus_or_minus(
//     idx + 1,
//     total - numbers[idx]
//   );

//   return a + b;
// }

// console.log(get_count_of_ways_to_target_by_doing_plus_or_minus(0, 0));

const numbers = [1, 1, 1, 1, 1];
const target_number = 3;

// 메모이제이션 저장할 객체
const memo = {};

function get_count_of_ways_to_target_by_doing_plus_or_minus(idx, total) {
  // 메모이제이션 키 생성
  const key = `${idx},${total}`;

  // 이미 계산한 적이 있다면 바로 반환
  if (key in memo) {
    return memo[key];
  }

  // 기본 재귀 로직
  if (idx === numbers.length) {
    return total === target_number ? 1 : 0;
  }

  const plus = get_count_of_ways_to_target_by_doing_plus_or_minus(
    idx + 1,
    total + numbers[idx]
  );
  const minus = get_count_of_ways_to_target_by_doing_plus_or_minus(
    idx + 1,
    total - numbers[idx]
  );

  // 계산한 결과 저장
  memo[key] = plus + minus;

  return memo[key];
}

console.log(get_count_of_ways_to_target_by_doing_plus_or_minus(0, 0));
