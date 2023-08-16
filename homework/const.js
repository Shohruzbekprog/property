function countDigits(number) {
  if (number < 0) {
    return "Please provide a positive integer.";
  }
  
  var numberString = number.toString();
  
  var digitCount = numberString.length;
  
  return digitCount;
}

console.log(countDigits(123)); 
console.log(countDigits(987654321)); 
console.log(countDigits(0)); 
