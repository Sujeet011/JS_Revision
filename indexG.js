 // prefix vs postfix

 function prefixPostfixDemo() {
  let a = 5;

  console.log("Postfix (a++):", a++); 
  console.log("After Postfix:", a);  

  let b = 5;

  console.log("Prefix (++b):", ++b); 
  console.log("After Prefix:", b);
 }
 prefixPostfixDemo();


 // Prefix & Postfix Calculation

 function calculatePrefixPostfix(a, b) {
    const resultA = a++; 
    const resultB = ++b;

    return {
        resultA_Postfix: resultA, 
        resultA_After: a,         
        resultB_Prefix: resultB,  
        resultB_After: b        
      };
    }
    console.log(calculatePrefixPostfix(3, 4));

 // Complex Prefix/Postfix Operations

 function complexOperation(a, b) {
    console.log("Initial values:", "a =", a, "b =", b);
  
    let result1 = a++ + ++b;
    console.log("Step 1: a++ + ++b =", result1, " (a =", a, ", b =", b, ")");
  
    let result2 = ++a - b++;
    console.log("Step 2: ++a - b++ =", result2, " (a =", a, ", b =", b, ")");
  
    let result3 = a++ + b++;
    console.log("Step 3: a++ + b++ =", result3, " (a =", a, ", b =", b, ")");

    return {
        finalA: a,      
        finalB: b,  
        result1,
        result2,
        result3
      };
    }
    console.log(complexOperation(3, 4));