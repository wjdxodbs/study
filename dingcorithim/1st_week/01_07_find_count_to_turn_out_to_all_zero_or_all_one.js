input = "0001100";

function find_count_to_turn_out_to_all_zero_or_all_one(string) {
  let z = 0;
  let o = 0;

  let elm = string[0];

  for (let i = 1; i <= string.length; i++) {
    if (elm !== string[i]) {
      elm = string[i];

      if (elm === "0") {
        z += 1;
      } else {
        o += 1;
      }
    }
  }

  return Math.min(z, o);
}

result = find_count_to_turn_out_to_all_zero_or_all_one(input);
console.log(result);
