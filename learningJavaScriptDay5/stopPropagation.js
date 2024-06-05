/**
 * Purpose:

stopPropagation is a method available on the Event object in JavaScript. 
Its main purpose is to prevent an event from further propagating (bubbling up) 
the DOM tree.

How Event Propagation Works:

In a typical web page, you have nested HTML elements. When an event (like a click) 
occurs on an element, it doesn't just trigger the event handler attached to that 
specific element. By default, the event "bubbles" up through its parent elements, 
potentially triggering event handlers on each of those parents as well. 
This is known as event propagation.

Why Use stopPropagation?

Control Event Flow: You might want to stop an event from bubbling up if you only
 want the event handler on the original target element to execute, not those on its
ancestors.
Performance Optimization: In complex DOM structures, preventing unnecessary event 
propagation can improve performance by reducing the number of event handlers 
that need to be evaluated.
Avoiding Conflicts: If you have multiple event handlers at different levels of the 
DOM, stopPropagation can prevent unintended behavior caused by conflicting handlers.
 */

document.getElementById('outer').addEventListener('click', function () {
            console.log('Outer element clicked!');
        });

        document.getElementById('inner').addEventListener('click', function (event) {
            event.stopPropagation(); // Prevents the event from propagating to the outer element
            console.log('Inner element clicked!');
        });