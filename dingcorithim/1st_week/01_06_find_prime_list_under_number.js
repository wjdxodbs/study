input = 9;

function find_prime_list_under_number(number) {
  const arr = [];

  for (let i = 2; i <= number; i++) {
    const element = Math.floor(Math.sqrt(i));
    console.log("i", i, "elm", element);

    let isPrime = true;

    for (let j = 2; j <= element; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      arr.push(i);
    }
  }
  return arr;
}

result = find_prime_list_under_number(input);
console.log(result);
