/**
 * In JavaScript, there are a few methods you can use to check whether a string contains a substring:

**1. `includes()` Method (Recommended):**

```javascript
const myString = "Hello, world!";
const substring = "world";

if (myString.includes(substring)) {
  console.log("The substring is present in the string.");
} else {
  console.log("The substring is not present in the string.");
}
```

- **Returns:** A boolean value (`true` if found, `false` if not).
- **Case-sensitive:** The search is case-sensitive.

**2. `indexOf()` Method:**

```javascript
const myString = "Hello, world!";
const substring = "world";

if (myString.indexOf(substring) !== -1) {
  console.log("The substring is present in the string.");
} else {
  console.log("The substring is not present in the string.");
}
```

- **Returns:** The index of the first occurrence of the substring, or `-1` if not found.
- **Case-sensitive:** The search is case-sensitive.

**3. `search()` Method:**

```javascript
const myString = "Hello, world!";
const substring = "world";

if (myString.search(substring) !== -1) {
  console.log("The substring is present in the string.");
} else {
  console.log("The substring is not present in the string.");
}
```

- **Returns:** The index of the first occurrence of the substring, or `-1` if not found.
- **Regular Expressions:** Can also be used with regular expressions for more complex searches.

**4. Regular Expressions (for Advanced Matching):**

```javascript
const myString = "Hello, world!";
const pattern = /world/i; // Case-insensitive search

if (pattern.test(myString)) {
  console.log("The substring is present in the string.");
} else {
  console.log("The substring is not present in the string.");
}
```

**Choosing the Right Method:**

- **Simple Check:** For a basic "yes/no" check if a substring exists, `includes()` is the most straightforward.
- **Index:** If you need the position of the substring, use `indexOf()`.
- **Regular Expressions:** For more complex pattern matching (case-insensitive, multiple matches, etc.), use regular expressions with `search()` or `test()`.

**Important Note:** JavaScript strings are case-sensitive, so "World" and "world" would be treated as different substrings.

Let me know if you have any other questions!

 */


const myString = "Hello, world!";
const substring = "world";

if (myString.includes(substring)) {
  console.log("The substring is present in the string.");
} else {
  console.log("The substring is not present in the string.");
}


const myString1 = "Hello, world!";
const substring1 = "world";

if (myString1.indexOf(substring1) !== -1) {
  console.log("The substring is present in the string.");
} else {
  console.log("The substring is not present in the string.");
}


const myString2 = "Hello, world!";
const substring2 = "world";

if (myString2.search(substring2) !== -1) {
  console.log("The substring is present in the string.");
} else {
  console.log("The substring is not present in the string.");
}

const myString3 = "Hello, world!";
const pattern = /world/i; // Case-insensitive search

if (pattern.test(myString2)) {
  console.log("The substring is present in the string.");
} else {
  console.log("The substring is not present in the string.");
}

