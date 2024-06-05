**111. What is JSON?**

JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format. It's designed to be easily readable by humans and easily parsed by machines. JSON is widely used for transmitting data between servers and web applications, as well as for storing structured data in files or databases.

**112. What are the syntax rules of JSON?**

- **Data Representation:** Data is represented in name/value pairs, similar to JavaScript objects.
- **Data Types:** JSON supports the following data types:
  - **String:** Enclosed in double quotes (e.g., `"Hello"`)
  - **Number:** Standard numerical values (e.g., `42`, `3.14159`)
  - **Object:** A collection of name/value pairs enclosed in curly braces `{}`.
  - **Array:** An ordered list of values enclosed in square brackets `[]`.
  - **Boolean:** `true` or `false`
  - **Null:** Represents a null value.
- **Separators:** Commas are used to separate items within objects and arrays.
- **Nesting:** Objects and arrays can be nested within each other.

**113. What is the purpose of JSON.stringify?**

The `JSON.stringify()` method in JavaScript is used to convert a JavaScript object or value into a JSON string. This is essential for sending data to a server, storing data in a file, or transmitting data over a network.

**Example:**

```javascript
const person = { name: "Alice", age: 30, city: "New York" };
const jsonString = JSON.stringify(person);
console.log(jsonString); // Output: {"name":"Alice","age":30,"city":"New York"}
```

**114. How do you parse a JSON string?**

The `JSON.parse()` method in JavaScript is used to parse a JSON string and convert it back into a JavaScript object or value.

**Example:**

```javascript
const jsonString = '{"name":"Alice","age":30,"city":"New York"}';
const person = JSON.parse(jsonString);
console.log(person.name); // Output: Alice
```

**115. Why do you need JSON?**

- **Data Interchange:** JSON is a language-independent format, making it ideal for exchanging data between different systems and platforms.
- **Human Readable:** JSON is relatively easy for humans to read and write compared to other formats like XML.
- **Compact:** JSON is more compact than XML, which can lead to faster data transfer times.
- **Widely Supported:** JSON is supported by almost all modern programming languages and platforms, making it a versatile choice for data storage and transmission.

**Key Points:**

- **JSON vs. JavaScript Objects:** JSON syntax is similar to JavaScript object literal notation, but they are not the same. JSON is a strict text format, while JavaScript objects can include functions and other types that are not allowed in JSON.
- **Security:** When parsing JSON data from untrusted sources, be cautious of potential security risks like Cross-Site Scripting (XSS) attacks.
