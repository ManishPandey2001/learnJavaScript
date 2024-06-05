/*
In JavaScript, hoisting refers to the behavior where variable and function declarations 
(but not initializations) are processed before the code execution begins. 
This can lead to some unexpected results if not understood properly.

Here's a breakdown of hoisting for variables and functions:

**Variable Hoisting (with `var`):**

When you declare a variable using `var`, its declaration is hoisted
 to the top of its scope (function or global scope). However, the initialization 
 (assignment of a value) remains in its original place.
- This means you can access and use the variable by name even before its initialization,
 but its value will be `undefined` until it's actually assigned.


**Function Hoisting:**

- Function declarations (using the `function` keyword) are also hoisted to the top
of their scope. This means you can call a function even before its declaration in the code.


**No Hoisting with `let` and `const`:**

- Variables declared with `let` and `const` (introduced in ES6) are not hoisted.
 You cannot access them before their declaration in the code. 
 This helps prevent some of the confusion that can arise with `var` hoisting.

**Strict Mode:**

- When you enable strict mode in your JavaScript code (`"use strict";`), 
variable declarations using `var` also follow the same behavior as `let` and `const`.
 They cannot be accessed before their declaration.

**Why Hoisting Can Be Tricky:**

- It can lead to unexpected behavior if you rely on a variable being initialized before it's used.
 The variable might be declared but have the value `undefined` until its assignment.
- It's generally recommended to avoid relying on hoisting and explicitly initialize variables before 
using them. This makes code more predictable and easier to understand.

**In essence, hoisting is a historical behavior in JavaScript that can be a source of confusion. 
Using `let` and `const` or enabling strict mode are recommended approaches to avoid hoisting-related 
issues and write more reliable code.**
*/

/*
Hoisting is a JavaScript feature that moves declarations of functions, variables, 
classes, or imports to the top of their scope before the code is executed. 
This means that a variable can be used before it has been declared. 
For example, `x = 5; // Assign 5 to x` can be used before `var x = 5; // Initialize x`.
*/


console.log(message); // Output: undefined (variable declaration hoisted, but not initialized)
var message = "Hello!";

greet(); // Function call works even before declaration (hoisted)
function greet() {
  console.log("Hi there!");
}