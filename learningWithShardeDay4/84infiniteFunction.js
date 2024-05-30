/**
 * The purpose of the isFinite function in JavaScript is to determine 
 * whether a given value is a finite number. A finite number is a number
 *  that is not Infinity, -Infinity, or NaN (Not-a-Number).

There are two versions of the isFinite function:

Global isFinite() function: This function performs type coercion, meaning 
it attempts to convert the input value into a number before checking if it's finite. 
This behavior can sometimes lead to unexpected results due to automatic type conversion.

Number.isFinite() static method: This method is a more reliable way to check if a value 
is a finite number. It doesn't perform type coercion, so it returns true only if the 
value is a number and it's finite.

Use Cases:

Input Validation: You can use isFinite() to validate user input, ensuring that it's a 
valid number before performing calculations.
Error Checking: In mathematical operations or functions that can potentially produce
 Infinity or NaN results, you can use isFinite() to check if the output is a valid finite number.
Type Checking: While primarily used for checking finiteness, Number.isFinite() can also serve
 as a way to check if a value is specifically a number, as it returns false for non-numeric values.
 * 
 */




 let a = 24;
 isFinite(24);
 //global finite function
 console.log('this is NaN',isFinite(NaN));
 console.log('this is a number',isFinite(24));
 console.log('this is a string',isFinite('string'));
 console.log('this is a null',isFinite(null));
 console.log('this is a undefined',isFinite(undefined));
 console.log('this is a array',isFinite([]));

 //Number finite function

 console.log('this is NaN',Number.isFinite(NaN));
 console.log('this is a number',Number.isFinite(24));
 console.log('this is a string',Number.isFinite('string'));
 console.log('this is a null',Number.isFinite(null));
 console.log('this is a undefined',Number.isFinite(undefined));
 console.log('this is a array',Number.isFinite([]));


 var car ; 
 car1;