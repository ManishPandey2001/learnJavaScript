/*
The Temporal Dead Zone (TDZ) is a concept in JavaScript that refers to
 the period between the entering of a scope (such as a block or a function)
  and the point where a variable declared with let or const is initialized. 
  During this period, the variable cannot be accessed,
 and any attempt to do so will result in a ReferenceError.
*/

console.log(x); 
var x1 = 10;
console.log(x);

// console.log(x1); // ReferenceError: Cannot access 'x' before initialization
// let x1 = 10;
// console.log(x1);

