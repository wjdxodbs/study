function find_max_occurred_alphabet(string) {
  const alphabet_occurrence_array = new Array(26).fill(0);

  for (const element of string) {
    if (element === " ") {
      continue;
    }

    const index = element.charCodeAt() - 97;
    alphabet_occurrence_array[index] += 1;
  }

  let max_occurrence = [0, alphabet_occurrence_array[0]];

  for (let i = 1; i < alphabet_occurrence_array.length; i++) {
    if (max_occurrence[1] < alphabet_occurrence_array[i]) {
      max_occurrence = [i, alphabet_occurrence_array[i]];
    }
  }

  return String.fromCharCode(max_occurrence[0] + 97);
}

result = find_max_occurred_alphabet;

console.log("정답 = i 현재 풀이 값 =", result("hello my name is dingcodingco"));
console.log("정답 = e 현재 풀이 값 =", result("we love algorithm"));
console.log("정답 = b 현재 풀이 값 =", result("best of best youtube"));
