// B. Comparision Operators

// Basic Comparison

function compareNumbers(a,b){
    if (a > b) {
        return `${a} is greater than ${b}`
    } else if (a < b) {
        return `${a} is less than ${b}`;
      } else {
        return `${a} is equal to ${b}`;
      }
}

console.log(compareNumbers(5, 3));  
console.log(compareNumbers(3, 5));  
console.log(compareNumbers(4, 4));

//  Comparison Table

function comparisonTable(arr, value) {
    arr.forEach(num => {
      console.log(`${num} > ${value}: ${num > value}`);
      console.log(`${num} < ${value}: ${num < value}`);
      console.log(`${num} >= ${value}: ${num >= value}`);
      console.log(`${num} <= ${value}: ${num <= value}`);
      console.log('------------'); 
    });
  }
  const numbers = [2, 5, 8, 3];
const comparisonValue = 5;
comparisonTable(numbers, comparisonValue);

// Comparison Challenge

function compareThreeNumbers(a, b, c) {
    if (a === b && b === c) {
      return "All numbers are equal";
    } else if (a > b && a > c) {
      return "a is the largest";
    } else if (b > a && b > c) {
      return "b is the largest";
    } else if (c > a && c > b) {
      return "c is the largest";
    } else if (a === b && a > c) {
      return "a and b are equal and larger than c";
    } else if (b === c && b > a) {
      return "b and c are equal and larger than a";
    } else if (a === c && a > b) {
      return "a and c are equal and larger than b";
    } else {
      return "b and c are equal, but smaller than a";
    }
  }

  console.log(compareThreeNumbers(7, 4, 7));
  console.log(compareThreeNumbers(5, 4, 4));
  console.log(compareThreeNumbers(1, 1, 1));
