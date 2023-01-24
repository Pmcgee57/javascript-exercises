const add = function(var1, var2) {
	return var1 + var2
};

const subtract = function(var1, var2) {
	return var1 - var2
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

// const multiply = function(array) {
// if (array.length > 0 ){
//   return array.reduce((a,b) => a * b);
// } else {
//   return 0;
// }
// };

const multiply = function(array) { //if array length is greater than zero, multiply the numbers, if not return zero
  return array.length              // returns T/F
    ? array.reduce((a,b) => a * b) // if true, multiply the values in the array
    : 0;  // if false, return 0
}

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
}; 

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
