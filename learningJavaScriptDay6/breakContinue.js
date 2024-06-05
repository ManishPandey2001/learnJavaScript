/**
 * Purpose:

Both break and continue are used to alter the normal flow of loops (e.g., for, while, do...while). 
 They give you control over how and when the loop iterations proceed or terminate.

Break Statement:

What it does: Immediately exits the current loop, regardless of whether the loop condition is still true.
When to use:
When you find what you're looking for and want to stop searching.
To handle specific conditions where you need to terminate the loop early.
When used within a switch statement, it prevents fall-through to the next case.
Continue Statement:

What it does: Skips the rest of the current iteration and immediately jumps to the next iteration of the 
loop.
When to use:
When you encounter a specific condition where you want to skip the remaining actions for that iteration 
but continue looping.
 */

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit loop when i is 5
  }
  console.log(i); // Output: 0, 1, 2, 3, 4
}


let num = 0;
while (num < 10) {
  num++;
  if (num % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(num); // Output: 1, 3, 5, 7, 9
}

const day ='Monday';
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  default:
    console.log("Just another day...");
}
