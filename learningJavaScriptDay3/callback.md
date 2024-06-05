What is a callback function
 
 Solution : 
 In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after the outer function has completed. Callbacks are a fundamental aspect of asynchronous programming in JavaScript, enabling you to handle events, responses, and other actions that occur after a certain period of time or when a specific condition is met.

 Key Concepts:

Functions as First-Class Citizens: In JavaScript, functions are treated as first-class citizens. This means they can be assigned to variables, passed as arguments to other functions, and returned as values from functions.
Higher-Order Functions: A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. Callbacks are often used in conjunction with higher-order functions.


                                Why Use Callbacks? Why do we need callbacks

Callbacks are essential for:

Asynchronous Operations: Many operations in JavaScript, such as network requests, timers, and user interactions, are asynchronous. This means they don't complete immediately. Callbacks provide a way to specify the code that should run when these asynchronous operations finish.
Event Handling: Callbacks are used extensively in event-driven programming. When an event (like a button click or a mouse movement) occurs, a callback function is triggered to handle the event.
Modularity and Reusability: Callbacks promote modular code by allowing you to encapsulate specific actions or behaviors within functions that can be passed around and used in different contexts.


	
                            What is a callback hell || pyramid of doom
                            

Callback hell, also known as the pyramid of doom, is a phenomenon that can occur in JavaScript when dealing with multiple nested callback functions. It arises primarily in asynchronous programming scenarios where tasks depend on the completion of other tasks.

How It Happens:

Asynchronous Tasks: Many operations in JavaScript, like network requests or timers, are asynchronous. This means they don't complete immediately, and you need to provide a callback function to handle the result when it's available.

Nested Callbacks: If an asynchronous task itself triggers another asynchronous task, you might end up nesting callbacks within callbacks. Each level of nesting represents a dependency, where the inner callback can't execute until the outer callback completes.

The Pyramid: As you add more layers of nested callbacks, the code structure starts to resemble a pyramid, with each level indented further. This makes the code increasingly difficult to read, understand, and maintain.

Problems with Callback Hell:

Readability: The deeply nested structure makes the code hard to follow, especially with complex logic.
Error Handling: It becomes challenging to handle errors gracefully across multiple nested callbacks.
Debugging: Tracking down issues in nested callbacks can be a nightmare.
Maintainability: Adding or modifying features becomes more difficult and error-prone.




                                    What is callback in callback


Callback in callback refers to a situation where a callback function itself takes another callback function as an argument. This creates nested layers of callbacks, which can lead to callback hell if not managed carefully.

Callback hell is a potential outcome of using "callback in callback" patterns extensively. When multiple levels of callbacks are nested, the code becomes overly complex and error-prone.