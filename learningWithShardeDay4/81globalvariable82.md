81. **What are global variables?**

In JavaScript, global variables are variables declared outside of any function or block scope. They are accessible and modifiable from anywhere within the entire script or even across multiple scripts on the same web page.

You can declare a global variable in JavaScript using the `var` keyword (or implicitly by assigning a value to a variable without using `var`, `let`, or `const`).

**Example:**

```javascript
var globalVar = 10; // Declaring a global variable

function myFunction() {
  console.log(globalVar); // Accessing global variable inside a function
}

myFunction(); // Output: 10
```

82. **What are the problems with global variables?**

While global variables might seem convenient, they can lead to several issues:

1. **Namespace Pollution:** As your codebase grows, having too many global variables can clutter the global namespace. This increases the risk of naming conflicts where different parts of your code accidentally overwrite each other's variables.

2. **Implicit Dependencies:** Global variables create implicit dependencies between different parts of your code. It becomes difficult to understand how different functions and modules interact with each other, making the code harder to maintain and debug.

3. **Difficult to Test:**  Code that relies heavily on global variables is harder to test in isolation. Mocking or controlling the state of global variables can be challenging, making it difficult to write effective unit tests.

4. **Concurrency Issues:** In environments where multiple scripts or threads run concurrently, global variables can lead to race conditions and unpredictable behavior. Different scripts might try to modify the same global variable simultaneously, leading to incorrect results.

5. **Security Risks:** Global variables can be manipulated by other scripts on the page, potentially leading to security vulnerabilities if not handled carefully.

**Alternatives to Global Variables:**

To avoid the problems associated with global variables, consider these alternatives:

* **Local Variables:** Declare variables within the smallest possible scope (functions or blocks) where they are needed.
* **Modules:** Use modules to encapsulate related code and variables, minimizing global scope pollution.
* **Namespaces:** Group related variables and functions into objects or namespaces to prevent naming collisions.
* **Dependency Injection:** Pass dependencies explicitly as function arguments instead of relying on global variables.

By following these best practices, you can write more modular, maintainable, and testable JavaScript code.
