/**
 * Absolutely! Here are explanations of the concepts without code examples:

**136. Is the '!--' notation a special operator?**

No, it's not a JavaScript operator. This notation is actually used to create comments in HTML.
 Comments are pieces of text that are ignored by the browser and not displayed on the webpage. 
 They are often used by developers to add notes or explanations within the code.

**137. How do you assign default values to variables?**

In JavaScript, you can give a variable a default value in case it doesn't have a value assigned to it yet.
 There are several ways to do this:

* **Using the OR operator (||):** This is a common way to provide a fallback value. 
If the variable on the left side of the OR operator is "falsy" (meaning it's undefined, null, 
false, 0, or an empty string), then the value on the right side of the operator is assigned.

* **Using the nullish coalescing operator (??):** This is a newer operator that's more specific.
 It only assigns the default value if the variable is null or undefined, not other falsy values.

* **Using conditional statements (if/else):** You can explicitly check if the variable is undefined
 or null, and then assign the default value if it is.

* **During variable declaration:** When you declare a variable using `let` or `const`,
 you can assign a default value right away.

**138. How do you define multiline strings?**

JavaScript offers a couple of ways to create strings that span multiple lines:

* **Template literals (backticks):** This is the preferred and most modern way. 
 You enclose the string content in backticks (``), and the line breaks you include in your code will
 be preserved in the string. You can also easily insert variables and expressions within the string.

* **String concatenation:** You can combine multiple strings into one using the `+` operator. 
You would need to manually add line breaks using the newline character (`\n`) to create a multiline string.
 However, this is less readable and more cumbersome than using template literals. 
 */




let myValue = someVariable || "default value";
let myValue1 = someVariable ?? "default value";
let myValue2 = (someVariable !== undefined) ? someVariable : "default value";
let myValue3 = 5; // Default value
const myConstant = "hello"; // Must be initialized with a value


//multiline

let multilineString = `This is a string
that spans multiple lines.
It's useful for longer text.`;

let multilineString1 = "This is a string\n" +
                     "that spans multiple lines.\n" +
                     "It's useful for longer text.";
