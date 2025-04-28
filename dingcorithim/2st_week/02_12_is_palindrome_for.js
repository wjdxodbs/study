input = "abcba";

function is_palindrome(string) {
  console.log(string);

  if (string.length <= 1) {
    return true;
  }

  if (string[0] !== string.at(-1)) {
    return false;
  }

  return is_palindrome(string.slice(1, string.length - 1));
}

console.log(is_palindrome(input));
