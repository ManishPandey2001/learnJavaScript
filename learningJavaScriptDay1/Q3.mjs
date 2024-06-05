/*
In JavaScript, call, apply, and bind are methods that can be used to set the this context for a function,
 allowing you to control what object this refers to when the function is executed. 
 These methods are particularly useful when working with functions in different contexts 
 or when borrowing methods from other objects. 
Here’s a detailed explanation of each:
 call
Functionality: Allows you to invoke a function immediately, assigning a new this value and passing arguments one by one after the this argument.
Arguments:
First argument: The value to be assigned to the this keyword within the function.
Subsequent arguments: Individual arguments to be passed to the function.

apply
Functionality: Similar to call, it invokes the function immediately. However, arguments are passed as an array (or array-like object) instead of individual arguments.
Arguments:
First argument: The value to be assigned to the this keyword within the function.
Second argument: An array containing the arguments to be passed to the function.

bind
Functionality: Unlike call and apply, bind doesn't invoke the function immediately. Instead, it creates a new function with a pre-defined this value and optional pre-defined arguments. This new function can then be called later with additional arguments if needed.
Arguments:
First argument: The value to be assigned to the this keyword within the new function.
Optional subsequent arguments: Arguments to be pre-defined for the new function (these can be overridden when the new function is called).

*/

let nepal = {
    name: 'Nepal',
    language: 'Nepali',
    color:'red'
}

export class Nation {
    constructor(name,language,color){
        this.name= name,
        this.language=language,
        this.color=color
    }
    sumofTwo(num1,num2){
        console.log(this.name + ' hi in '+ this.language );
        return num1+num2;
    }
}

function multiply(num1,num2){
    console.log(`Hello everyone form ${this.name} and I speak ${this.language}`);
  return num1*num2;
}
const Ind = new Nation('India', 'hindi', 'blue');


Ind.sumofTwo.call(nepal,4,6);

Ind.sumofTwo.apply(nepal,[40,6]);

const Raja =Ind.sumofTwo.bind(nepal);
 console.log(Raja(3,4));
console.log('This is call',multiply.call(Ind,4,6));
console.log('This is Apply',multiply.apply(Ind,[44,64]));
