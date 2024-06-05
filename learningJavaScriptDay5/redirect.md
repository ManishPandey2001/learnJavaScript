In JavaScript, you have three main ways to redirect to a new page:

**1. `window.location.href` (most common):**

```javascript
window.location.href = "https://www.new-page.com";
```

- **How it works:** Changes the current page's URL to the new URL provided.
- **Pros:** Simple and widely supported.
- **Cons:** Adds an entry to the browser's history, so users can use the back button to return to the previous page.

**2. `location.replace()` (removes from history):**

```javascript
location.replace("https://www.new-page.com"); 
```

- **How it works:**  Similar to `location.href`, but it replaces the current history entry with the new page's URL.
- **Pros:** Prevents users from going back to the previous page using the back button.
- **Cons:** Might not be suitable if you want users to be able to navigate back.

**3. `location.assign()` (similar to `location.href`):**

```javascript
location.assign("https://www.new-page.com"); 
```

- **How it works:**  Almost identical to `location.href` in terms of functionality.
- **Pros:**  Can be slightly more descriptive than `location.href`.
- **Cons:** Also adds an entry to the browser's history.

**Choosing the Right Method:**

- **Normal Redirection:** Use `window.location.href` or `location.assign()`.
- **Redirection Without History:** Use `location.replace()`.

**Additional Options:**

- **Opening in a new window/tab:**
  ```javascript
  window.open("https://www.new-page.com", "_blank");
  ```
- **Relative URLs:** You can use relative URLs (e.g., `/new-page`) if the new page is on the same domain.

**Example (Redirecting After 5 Seconds):**

```javascript
setTimeout(function() {
  window.location.href = "https://www.new-page.com"; // Redirect after 5 seconds
}, 5000);
```

**Important Considerations:**

- **User Experience:** Excessive redirects can be annoying to users. Use redirects sparingly and consider providing clear feedback (e.g., a loading message) when a redirect is in progress.
- **SPAs:** If you're building a Single Page Application (SPA), you'll typically use a routing library instead of direct JavaScript redirects for smoother navigation.

Let me know if you'd like more specific examples or have other questions!
