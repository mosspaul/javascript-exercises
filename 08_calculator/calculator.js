const add = (num1, num2) => num1 + num2;


const subtract = (num1, num2) => num1 - num2;

const sum = function(array) {
	let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for (let num of array) {
    product *= num;
  }
  return product;
};

const power = function(num1, num2) {
  product = 1;
	for (let i = 0; i < num2; i++) {
    product *= num1;
  }
  return product;
};
/*
*
*
*/
const factorial = (n) => {
  let product = 1;
  if (n < 1) {
    return product;
  }
  while(n > 1) {
    product = n * factorial(n - 1);
    break;
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
