// Simple factorial function
function factorial(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// Change the number here:
var num = 5;

console.log("Factorial of " + num + " is: " + factorial(num));
