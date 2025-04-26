function find_not_repeating_first_character(string) {
  const obj = {};

  for (const char of string) {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }

  for (const char of string) {
    if (obj[char] === 1) {
      return char;
    }
  }

  return "_";
}

result = find_not_repeating_first_character;
console.log("정답 = d 현재 풀이 값 =", result("abadabac"));
console.log("정답 = c 현재 풀이 값 =", result("aabbcddd"));
console.log("정답 =_ 현재 풀이 값 =", result("aaaaaaaa"));
