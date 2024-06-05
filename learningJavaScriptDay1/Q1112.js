/*
A programming language is said to have First-class functions if functions in that language 
are treated like other variables. 
So the functions can be assigned to any other variable or passed as an argument or
 can be returned by another function.

 and they are also called first order function
*/
const sumfunction=(a,b)=> a+b;

console.log('',sumfunction(2,4));

function multiplySum(num,sumfunction){
  return num*sumfunction;
}

console.log(multiplySum(34,sumfunction(2,4)))

