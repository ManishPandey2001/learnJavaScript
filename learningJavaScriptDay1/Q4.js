// JSON (JavaScript Object Notation) is a lightweight, human-readable, and language-independent data interchange format. It's widely used for transmitting data between web servers and web applications, APIs, and data storage.

// Key characteristics of JSON:

// Structure: Based on key-value pairs, similar to JavaScript objects. Keys are strings, and values can be strings, numbers, booleans, arrays, or nested objects.
// Readability: Designed to be easily understood by both humans and machines.
// Language independence: Can be used with any programming language as there are libraries and parsers available for most languages to work with JSON data.
// Common JSON operations:

// Parsing: Converting a JSON string into a JavaScript object or an object native to your programming language. Libraries or built-in functions are used for parsing, depending on the language.

 const jsonString = '{"name": "Alice", "age": 30}';
 const personObject = JSON.parse(jsonString);
 console.log(personObject.name); // Output: "Alice"

// Stringifying: Converting a JavaScript object or a data structure into a JSON string. This is often used before sending data over a network or storing it in a JSON file.


const personObject1 = { name: "Bob", age: 25 };
const jsonString1 = JSON.stringify(personObject);
console.log(jsonString1); // Output: {"name":"Bob","age":25}
