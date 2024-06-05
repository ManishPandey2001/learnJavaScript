/*
The key distinction lies between first-class functions and higher-order functions.
 There's no concept of a "first-order function" in JavaScript.

Here's a breakdown to clarify the difference:

**First-Class Functions:**
Treatment:In languages like JavaScript, functions are treated like first-class citizens, 
meaning they can be assigned to variables, passed as arguments, and returned from other functions.
Analogy:Think of them as regular variables that hold function values. 
You can store them, pass them around, and use them like any other data type.

**Higher-Order Functions:**

Functionality: These functions operate on other functions in a more significant way. They can either:
    -Accept functions as arguments:** They take other functions as input, allowing you to pass
     functionality as data.
    -Return a new function:** They can generate and return new functions as their result.
- Requirement:Higher-order functions rely on the presence of first-class functions to work their magic. 
Because functions can be treated like values, higher-order functions can leverage them as arguments or 
return values.

//First-class functions** are the building blocks that enable higher-order functions.
//Higher-order functions** leverage first-class functions to create more powerful 
abstractions and perform operations on other functions.
Example:
*/
console.log('',);



function greet(name) {
  console.log("Hello, " + name + "!");
}

// First-class function in action (assigned to a variable)
const sayHi = greet;
sayHi("Bob"); // Output: Hello, Bob!

// Higher-order function (takes a function as argument)
function createGreeter(greeting) {
  return function(name) {
    console.log(greeting + ", " + name + "!");
  };
}

const morningGreet = createGreeter("Good Morning");
morningGreet("Alice"); // Output: Good Morning, Alice!



