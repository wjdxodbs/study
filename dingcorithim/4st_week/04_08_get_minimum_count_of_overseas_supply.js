const ramen_stock = 4;
const supply_dates = [4, 10, 15];
const supply_supplies = [20, 5, 10];
const supply_recover_k = 30;

const get_minimum_count_of_overseas_supply = (stock, dates, supplies, k) => {
  // 풀어보세요!
  return;
};

console.log(c(ramen_stock, supply_dates, supply_supplies, supply_recover_k));
console.log(
  "정답 = 2 / 현재 풀이 값 = ",
  get_minimum_count_of_overseas_supply(4, [4, 10, 15], [20, 5, 10], 30)
);
console.log(
  "정답 = 4 / 현재 풀이 값 = ",
  get_minimum_count_of_overseas_supply(4, [4, 10, 15, 20], [20, 5, 10, 5], 40)
);
console.log(
  "정답 = 1 / 현재 풀이 값 = ",
  get_minimum_count_of_overseas_supply(2, [1, 10], [10, 100], 11)
);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let joi = 0,
  ioi = 0;
for (let i = 0; i + 2 < input.length; i++) {
  const t = input.substring(i, i + 3);
  if (t === "JOI") joi++;
  else if (t === "IOI") ioi++;
}

console.log(`${joi}\n${ioi}`);
