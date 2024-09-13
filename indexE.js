// Logical Operators

//  Basic Logical Operations

function logicalOperations(a, b) {
    return {
      AND: a && b,
      OR: a || b,
      NOT_A: !a,
      NOT_B: !b
    };
  }

  console.log(logicalOperations(true, false));
  console.log(logicalOperations(true, true))
  console.log(logicalOperations(false, false))

  console.log("----------------------------")

  // Eligibility Check

  function isEligible(age, hasPermission) {
    return age >= 18 && hasPermission;
  }
  
console.log(isEligible(20, true));  
console.log(isEligible(16, true));  
console.log(isEligible(22, false));


console.log("----------------------------")

function evaluateConditions(a, b, c) {
    if (a > 0 && b < 0) {
      return "a is positive and b is negative";
    } else if (b === 0 || isNaN(c)) {
      return "b is zero or c is not a number";
    } else if (a !== b || c > 10) {
      return "a is not equal to b or c is greater than 10";
    } else {
      return "No conditions met";
    }
  }

console.log(evaluateConditions(5, -3, 12));  
console.log(evaluateConditions(4, 0, NaN));   
console.log(evaluateConditions(7, 7, 15)); 
console.log(evaluateConditions(3, 3, 5));