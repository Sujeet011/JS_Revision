// Check Truthiness

function isTruthy(value){
    return !!value;
}
console.log(isTruthy(0));
console.log(isTruthy(1));           
console.log(isTruthy("hello"));     
console.log(isTruthy([]));      
console.log(isTruthy(null)); 

//  Falsy Values Count

function countFalsyvalues(arr){
    return arr.filter(value => !value).length;
}

const mixedArray =[0, 1, "", "hello", undefined, false, null, [], 42];
console.log(countFalsyvalues(mixedArray));

//  Filter Truthy Values

function filterFalsyValues(arr) {
    return arr.filter(value => !!value);
  }
  
  const arr1 = [0, "test", false, 3, null, "", "hello", [], 42];
  const arr2 = [false, 0, NaN, null, undefined, "valid"];

  console.log(filterFalsyValues(arr1)); 
console.log(filterFalsyValues(arr2));