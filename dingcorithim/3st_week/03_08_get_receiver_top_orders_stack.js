top_heights = [6, 9, 5, 7, 4];

function get_receiver_top_orders(heights) {
  const n = heights.length;

  const result = new Array(n).fill(0);

  while (heights.length) {
    let height = heights.pop();

    for (let i = heights.length - 1; i >= 0; i--) {
      if (height <= heights[i]) {
        result[heights.length + 1] = i + 1;
        break;
      }
    }
  }

  return result;
}

console.log(get_receiver_top_orders(top_heights)); // [0, 0, 2, 2, 4] 가 반환되어야 한다!

console.log(
  "정답 = [0, 0, 2, 2, 4] / 현재 풀이 값 = ",
  get_receiver_top_orders([6, 9, 5, 7, 4])
);
console.log(
  "정답 = [0, 0, 0, 3, 3, 3, 6] / 현재 풀이 값 = ",
  get_receiver_top_orders([3, 9, 9, 3, 5, 7, 2])
);
console.log(
  "정답 = [0, 0, 2, 0, 0, 5, 6] / 현재 풀이 값 = ",
  get_receiver_top_orders([1, 5, 3, 6, 7, 6, 5])
);
