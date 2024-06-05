/**
The clearTimeout function is designed to cancel a timeout that was previously set using the setTimeout
function.

How it Works:
Setting a Timeout: When you call setTimeout, you provide a function (or code snippet) to be executed 
and a time delay (in milliseconds). 
The setTimeout function returns a unique numeric ID representing that specific timeout.

Storing the Timeout ID: It's crucial to store the returned timeout ID in a variable. 
This ID acts as a reference to the scheduled timeout.

Canceling the Timeout: To cancel the timeout before it triggers, you call clearTimeout and pass the 
stored timeout ID as an argument.
 */

const cars = new Object();

cars.company = 'honda';
cars.model = 'city';
cars.price = 343000;
cars.review = 5;

 const test1 = setInterval(()=>{
console.log(cars);
},1000)
clearInterval(test1);