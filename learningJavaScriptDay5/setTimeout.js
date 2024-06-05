/**
 * 
Executes a function or code snippet once after a specified delay.
Useful for:
Delaying the execution of a single action (e.g., showing a message after 3 seconds).
Scheduling a task to happen in the future (e.g., triggering an animation after a page loads)
*/

const Obj1 ={
    Name:"Manish",
    Age:34,
    Class:'Donot'
}

function PrintDetails(i){
    console.log(`Hello this is: ${i.Name} and has age: ${i.Age} in Class: ${i.Class} `);
}

const timeoutId=setTimeout(()=> PrintDetails(Obj1)
  
,500);

console.log('huva nahi kuch haha');

// clearTimeout(timeoutId);