function sumOfDigits(integer) {
  let sum = 0;
  const string = String(integer);
  
  for (let i = 0; i < string.length; i++) {
    const digit = parseInt(string[i]);
    sum += digit;
  }
  return sum;
}
console.log(sumOfDigits(123));
console.log(sumOfDigits(98765));
