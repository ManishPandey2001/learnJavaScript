function titleToUpperCase(str){
 return str.toLowerCase().replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}

console.log(titleToUpperCase('heelo hi ji'))

// **Explanation:**

// 1. `toLowerCase()`: Converts the entire string to lowercase.
// 2. `replace()`: Uses a regular expression `/(^|\s)\w/g` to match:
//    - `^`: The start of the string.
//    - `|`: Or.
//    - `\s`: A whitespace character.
//    - `\w`: A word character (letter, number, or underscore).
// 3. The callback function passed to `replace()` converts each matched character to uppercase.