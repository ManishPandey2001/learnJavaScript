/**
 * In JavaScript, there are two primary ways to determine the number of parameters expected by a function
 *

1. **Leveraging the `length` Property:**

Every function object in JavaScript possesses a `length` property.
This property intrinsically holds the count of formal parameters defined within the function's signature. 
However, it's important to note that this count only includes parameters declared before the first one with
 a default value and excludes rest parameters.

2. **Examining the Function Definition via Reflection:**

By accessing the function's source code as a string using the `toString()` method, 
one can analyze the function's signature. This allows for the extraction and counting of parameter names. 
However, this technique is less efficient and more prone to errors compared to utilizing the `length` 
property, especially when dealing with complex function definitions containing comments or obfuscated code.

 */

function greet(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

console.log(greet.length); // Output: 2
