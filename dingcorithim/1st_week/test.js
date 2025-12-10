const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

const input = "00000001";

let z = 0;
let o = 0;

let elm = input[0];

for (let i = 1; i < input.length; i++) {
  if (elm !== input[i]) {
    if (elm === "0") {
      z += 1;
    } else {
      o += 1;
    }

    elm = input[i];
  }
}

if (!!z || !!o) {
  if (elm === "0") {
    z += 1;
  } else {
    o += 1;
  }
}

console.log(Math.min(z, o));
