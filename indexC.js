// C. Mathematical Operators

// Basic Arithmetic

function performArithmetic(a, b) {
    return {
      addition: a + b,
      subtraction: a - b,
      multiplication: a * b,
      division: b !== 0 ? a / b : "Cannot divide by zero"
    };
  }
  console.log(performArithmetic(10, 5));
  console.log(performArithmetic(7, 0));

  
  // Calculate Average
  function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }
  const Array = [5, 10, 15, 20];
  console.log(calculateAverage(Array));
  console.log(calculateAverage([]));


  // Complex Calculation
  function calculateExpression(a, b, c) {
    if (b === a) {
      return "Division by zero is not allowed";
    }
    return (a + b) * (c / (b - a));
  }

  console.log(calculateExpression(5, 10, 2));
  console.log(calculateExpression(4, 6, 8));
  console.log(calculateExpression(5, 5, 10));

