const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const memo = Array(n).fill(0);

memo[0] = arr[0];
memo[1] = arr[0] + arr[1];
memo[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < n; i++) {
  const item = Math.max(
    arr[i] + memo[i - 2],
    arr[i] + arr[i - 1] + memo[i - 3]
  );

  memo[i] = item;
}

console.log(memo[n - 1]);

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [n, k] = input;
let count = 0;
const target = k.toString();

for (let h = 0; h <= n; h++) {
  for (let m = 0; m < 60; m++) {
    for (let s = 0; s < 60; s++) {
      const time = `${h.toString().padStart(2, "0")}${m
        .toString()
        .padStart(2, "0")}${s.toString().padStart(2, "0")}`;
      if (time.includes(target)) {
        count++;
      }
    }
  }
}

console.log(count);

const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let line = 1;
let sum = 0;

while (sum + line < input) {
  sum += line;
  line++;
}

let index = input - sum;

let numerator, denominator;
if (line % 2 === 0) {
  numerator = index;
  denominator = line - index + 1;
} else {
  numerator = line - index + 1;
  denominator = index;
}

console.log(`${numerator}/${denominator}`);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let cards = Array.from({ length: 20 }, (_, i) => i + 1);

for (let i = 0; i < 10; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  const left = a - 1;
  const right = b - 1;
  const reversed = cards.slice(left, right + 1).reverse();

  for (let j = 0; j < reversed.length; j++) {
    cards[left + j] = reversed[j];
  }
}

console.log(cards.join(" "));

const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString().trim();

let sum = 0;
for (let digit of n) {
  sum += Math.pow(Number(digit), 5);
}

console.log(sum);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [word1, word2] = input[i].split(" ");
  const result = [];
  for (let j = 0; j < word1.length; j++) {
    const x = word1.charCodeAt(j) - 64; // 'A'=65
    const y = word2.charCodeAt(j) - 64;
    if (y >= x) {
      result.push(y - x);
    } else {
      result.push(y + 26 - x);
    }
  }
  console.log("Distances:", result.join(" "));
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let maxUp = 0;
let currentUp = 0;

for (let i = 1; i < N; i++) {
  if (arr[i] > arr[i - 1]) {
    currentUp += arr[i] - arr[i - 1];
    if (currentUp > maxUp) maxUp = currentUp;
  } else {
    currentUp = 0;
  }
}

console.log(maxUp);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const trees = input.slice(1).map(Number);

let gaps = [];
for (let i = 1; i < N; i++) {
  gaps.push(trees[i] - trees[i - 1]);
}

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

let wholeGCD = gaps[0];
for (let i = 1; i < gaps.length; i++) {
  wholeGCD = gcd(wholeGCD, gaps[i]);
}

const totalCount = (trees[N - 1] - trees[0]) / wholeGCD + 1;

console.log(totalCount - N);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  const [n, c] = input[i].split(" ").map(Number);
  const days = Math.ceil(n / c);
  console.log(days);
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const n = +input[idx++];

for (let t = 0; t < n; t++) {
  const p = +input[idx++];
  let maxPrice = -1;
  let answer = "";

  for (let i = 0; i < p; i++) {
    const [price, name] = input[idx++].split(" ");
    if (+price > maxPrice) {
      maxPrice = +price;
      answer = name;
    }
  }
  console.log(answer);
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
let totalLeftover = 0;

for (let i = 1; i <= N; i++) {
  const [students, apples] = input[i].split(" ").map(Number);
  totalLeftover += apples % students;
}

console.log(totalLeftover);

const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

const result = (BigInt(N) * BigInt(N - 1) * BigInt(N + 1)) / 2n;
console.log(result.toString());
