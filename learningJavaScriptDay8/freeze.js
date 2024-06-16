/**
 * What is a freeze method?
In JavaScript, Object.freeze() is a built-in method that makes an object immutable.
This means that after freezing an object:
You cannot add new properties to it.
You cannot remove existing properties from it.
You cannot change the values of existing properties.
You cannot change the property attributes (writable, configurable, enumerable).
You cannot modify its prototype.
Essentially, Object.freeze() turns your object into a read-only state.

What is the purpose of the freeze method?
The primary purpose of the Object.freeze() method is to ensure the integrity of an object. 
It prevents accidental or intentional modifications, which is particularly useful in these scenarios:

Constants: When you want to define constants that should never change 
(e.g., configuration objects, mathematical constants).
Security: To protect sensitive data from being tampered with.
Debugging: To help identify when and where your code is unexpectedly modifying an object.
Functional Programming: To enforce immutability, a core principle in functional programming paradigms.
Why do I need to use the freeze method?
While you might not need to use Object.freeze() in every situation, here's why you might consider it:

Prevent accidental modifications: In complex applications, it's easy to accidentally change an 
object's state. Freezing objects can safeguard against these unintended side effects.
Enforce data integrity: If you have critical data that should remain unchanged, freezing it guarantees
 its consistency throughout your program.
Improved code predictability: By using Object.freeze(), you explicitly communicate that certain objects 
are meant to be read-only, making your code more predictable and easier to reason about
 */

const book ={
    name:'story of a young',
    type:'noval',
    year: 1975,
    price: 300
}


Object.freeze(book);
console.log('book without update',book);
book.name = 'learnJSin 30 days';
book.price = 450;

const a = book;
console.log('book with update',book);

a.name = 'Oh Raja ji'

console.log(a);

console.log((0.1+0.2))//=== 0.4)

console.log(typeof(0.))