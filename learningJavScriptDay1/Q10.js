/*
What are lambda expression or arrow functions?
In JavaScript, lambda expressions, also commonly referred to as arrow functions,
 are a concise way to define anonymous functions. 
They provide a cleaner and more readable syntax compared to traditional function declarations.

Parameters: The function's arguments enclosed in parentheses.
Arrow (=>): Separates the parameters from the function body.
Function Body: The code to be executed when the function is called. This can be either:
Implicit Return: If the function body is a single expression, the result of that expression
 is implicitly returned.
Explicit Return: If the function body requires multiple statements or explicit control flow
 (like if statements), you need to use a return statement.
*/

const sum = (a,b) => a +b;
console.log(sum(2,3));

const isNumber = (a) =>{
    if(typeof a === 'number'){
        return true;
    }
    else return false;
}

console.log('false case',isNumber('e'));
console.log('true case',isNumber(34));