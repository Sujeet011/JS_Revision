// Conditional Statement

//CheckEvenOdd

function checkEvenOdd(number) {
    if (number % 2 === 0) {
      return `${number} is even`;
    } else {
      return `${number} is odd`;
    }
  }
  
  console.log(checkEvenOdd(10)); 
  console.log(checkEvenOdd(7)); 

  console.log("---------------------------")
  
  
  //Grade Evaluation

  function evaluateGrade(score) {
    if (score >= 90 && score <= 100) {
      return "A";
    } else if (score >= 80 && score < 90) {
      return "B";
    } else if (score >= 70 && score < 80) {
      return "C";
    } else if (score >= 60 && score < 70) {
      return "D";
    } else if (score >= 0 && score < 60) {
      return "F";
    } else {
      return "Invalid score";
    }
  }

console.log(evaluateGrade(96)); 
console.log(evaluateGrade(84));  
console.log(evaluateGrade(72));  
console.log(evaluateGrade(50));  
console.log(evaluateGrade(-5)); 

console.log("---------------------------")


// Discount Calculation

function calculateDiscount(price, isMember) {
    if (isMember) {
      return price * 0.9; 
    } else {
      return price; 
    }
  }

  console.log(calculateDiscount(100, true));
  console.log(calculateDiscount(100, false)); 