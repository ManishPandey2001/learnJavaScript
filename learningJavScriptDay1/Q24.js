/*
Memoization is a computer science optimization technique
 that speeds up programs by storing the results of expensive
  function calls and returning those results when the same 
  inputs are encountered again

*/

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
  
    // Cache implementation (using an object as a simple example)
    const cache = {};
    if (cache[n]) {
      return cache[n];
    } else {
      const result = n * factorial(n - 1);
      cache[n] = result;
      return result;
    }
  }
const abcd = factorial(3);
const abcd1 = factorial(14);
const abcd2 = factorial(13);
const abcd3 = factorial(14);
const abcd4 = factorial(3);

console.log('this is factorial of359',Number.isFinite(factorial(359)));
console.log(typeof(factorial(359)));
  console.log(abcd,abcd1,abcd2,abcd3,abcd4);