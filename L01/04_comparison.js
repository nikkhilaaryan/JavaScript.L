// > Greater than operators
// < Less than operators
// >= Greater than or equal to operators
// <= Less than or equal to operators 
// == Equality operators
// != Inequality operators

// console.log("4" > 2);
// console.log("04" > 2);

console.log(null > 0); // false                       The reason is that the Equlaity operator and Comparison operator  
console.log(null == 0); // false                      works differently. Comparison converts null to a number, treating it as 0
console.log(null >= 0); // true                       That is why null(0) >= 0, null(0) > 0.

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0);// false
  
// === (strict check)
console.log("1" === 1); // Strict check also check the dataypes of the expression.





