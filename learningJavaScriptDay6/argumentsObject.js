/**
 * In JavaScript, the `arguments` object is a special built-in object that exists within the scope of 
 * any function (except arrow functions). 
 * It behaves like an array, providing access to the individual arguments passed to the function during
 *  its call. 

The `arguments` object allows you to work with the arguments dynamically, even if you don't explicitly
 define them as parameters in the function's declaration. 
 You can get the number of arguments passed using `arguments.length`, and you can access each argument 
 using its index (starting from 0). However, the `arguments` object isn't a true array, so it doesn't 
 have access to the built-in array methods like `forEach`, `map`, or `filter`.

In modern JavaScript, the `arguments` object is less commonly used since the introduction of rest 
parameters, which offer a more convenient and standardized way to handle a variable number of arguments. 
However, `arguments` can still be helpful in some specific scenarios, especially in older codebases or 
for accessing certain function properties.

 */


function myFunction() {
  for (let i = 0; i < arguments.length; i++) {
    console.log("Argument", i, ":", arguments[i]);
  }
}

myFunction("Hello", 42, true, { name: "Alice" }); 


function newMyFunction(){
  console.log('this is a agrument',arguments,arguments[0]);
}
newMyFunction('hello',34, 'this is one', 35, 36 ,37);
