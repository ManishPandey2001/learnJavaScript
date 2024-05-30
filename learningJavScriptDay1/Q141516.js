/*
All right, let's dive into these three function-related concepts: unary functions, currying functions, and pure functions:

**1. Unary Function:**

- A unary function is a function that takes **exactly one argument** and returns a single value. The name "unary" comes from the mathematical concept of unary operations, which involve acting on a single operand.

**Example:**

```javascript

```

Here, the `square` function takes one argument (`x`) and returns its square.

**2. Currying Function:**

- Currying is a technique for transforming a function with multiple arguments into a sequence of functions that each take a single argument. It's achieved by partially applying arguments and returning functions as results.

**Why Curry?**

- **Partial Application:** Currying allows you to create new functions by fixing some of the arguments of the original function. This can be useful for creating reusable function templates or specialized versions of functions.
- **Modularity:** It can break down complex functions with multiple arguments into smaller, more manageable pieces.

**Example:**

```javascript

```

In this example, `curriedAdd` takes one argument (`x`) and returns a new function that takes another argument (`y`) and adds it to the fixed value (`5`).

**3. Pure Function:**

- A pure function is a function that has the following characteristics:
    - **Deterministic:** It always returns the same output for the same set of arguments. The function's output relies solely on the inputs, and there are no external factors influencing the result.
    - **No Side Effects:** It doesn't produce any side effects that modify global state, perform I/O operations, or interact with external systems. The function's behavior is isolated and predictable.

**Benefits of Pure Functions:**

- **Testing:** Pure functions are easier to test because their behavior is predictable and independent of external factors.
- **Debugging:** Since they don't have side effects, debugging pure functions becomes simpler as you can focus on the function's logic and inputs/outputs.
- **Parallelization:** In some cases, pure functions can be parallelized for performance improvements, as their execution doesn't rely on modifying shared state.

**Example:**

```javascript

```

Here, `multiply` is a pure function. It takes two numbers, multiplies them, and returns the result without modifying any external state.

**In essence:**

- Unary functions take one argument.
- Currying transforms multi-argument functions into sequences of single-argument functions.
- Pure functions always return the same output for the same inputs and have no side effects.
*/
function square(x) {
    return x * x;
  }
  
  const resul = square(5);
  console.log(resul); // Output: 25

  function add(x, y) {
    return x + y;
  }
  
  // Curried version (notice the nested function)
  function curriedAdd(x) {
    return function(y) {
      return add(x, y);
    };
  }
  
  const add5 = curriedAdd(5); // Partially applied, fixing the first argument to 5
  const result = add5(3);
  console.log(result); // Output: 8 (5 + 3)

function multiply(x, y) {
    return x * y;
  }
  
  const result1 = multiply(2, 3); // No side effects, just returns 6
  const result2 = multiply(2, 3); // Given the same inputs, always returns 6
  console.log(result1, result2); // Output: 6 6