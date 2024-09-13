// Relational Operators

// Basic Relational Check

function checkRelational(a, b) {
    if (a > b) {
      return `${a} is greater than ${b}`;
    } else if (a < b) {
      return `${a} is less than ${b}`;
    } else {
      return `${a} is equal to ${b}`;
    }
  }

  console.log(checkRelational(10, 5));  
  console.log(checkRelational(3, 7));  
  console.log(checkRelational(4, 4));

console.log("------------------")  
  // Range Check

  function isInRange(value, min, max) {
    return value >= min && value <= max;
  }
  
  console.log(isInRange(5, 1, 10));  
  console.log(isInRange(0, 1, 10));  
  console.log(isInRange(10, 1, 10));

console.log("------------------")
  // Complex Relational Logic

  function evaluateCondition(a, b, c) {
    if (a > b && a > c) {
      return "a is the largest";
    } else if (b > a && b < c) {
      return "b is between a and c";
    } else if (c < a && c < b) {
      return "c is less than a and b";
    } else {
      return "No specific condition met";
    }
  }

console.log(evaluateCondition(7, 5, 9)); 
console.log(evaluateCondition(10, 3, 6)); 
console.log(evaluateCondition(8, 9, 2));  
console.log(evaluateCondition(4, 4, 4)); 