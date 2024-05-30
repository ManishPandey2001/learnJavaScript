In JavaScript, you can access and manipulate the browser's history using the history object, which is a property of the global window object. The history object provides several methods to work with the history of the current browser session:

Methods:

history.back(): Loads the previous URL in the history list, just like clicking the browser's "Back" button.
history.forward(): Loads the next URL in the history list, similar to clicking the "Forward" button.
history.go(n): Loads a specific URL from the history list relative to the current page.
n = -1: Goes back one page.
n = 1: Goes forward one page.
n = 0: Reloads the current page.
history.pushState(state, title, url): Adds a new entry to the history stack with the specified state object, title (often ignored), and URL. This doesn't immediately load the new URL, but it updates the browser's URL bar and allows the user to navigate to it.
history.replaceState(state, title, url): Modifies the current history entry with new state, title, and URL. This doesn't create a new entry in the history stack.