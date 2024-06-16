// What is a spread operator
// In JavaScript, the spread operator (...) is a powerful and versatile tool that allows you to expand iterables
//  (like arrays, strings, or objects) into individual elements.
// It's often described as the opposite of the rest parameter, which collects multiple elements into an array.

const obj1 = { name: "raja", number: 34 };
const obj2 = { adress: "Ramnagar", age: 24 };

const person = { ...obj1, ...obj2 };
console.log("this is first person ", person);
const person1 = Object.assign(obj1, obj2);
console.log("this is person", person1);
console.log("this is obj1", obj1);

const str = "Manish";
const stringArray = [...str];
console.log("this is stringArray", stringArray);
