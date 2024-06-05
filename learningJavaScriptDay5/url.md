In JavaScript, you can easily get the current URL using the `window.location` object, specifically its `href` property:

**Get the Complete URL:**

```javascript
const currentUrl = window.location.href;
console.log(currentUrl); 
```

This will log the full URL of the current page, including the protocol (http or https), domain, path, and any query parameters or fragments.

**Get Specific Parts of the URL:**

The `window.location` object also provides other properties to access specific parts of the URL:

- `protocol`: Returns the protocol of the URL (e.g., "http:" or "https:")
- `host`: Returns the hostname and port of the URL (e.g., "[invalid URL removed]")
- `hostname`: Returns the hostname of the URL (e.g., "[www.example.com](https://www.example.com)")
- `port`: Returns the port number of the URL (e.g., "80")
- `pathname`: Returns the path part of the URL (e.g., "/my/page")
- `search`: Returns the query string part of the URL (e.g., "?name=value")
- `hash`: Returns the fragment identifier of the URL (e.g., "#section1")

**Example:**

```javascript
const currentUrl = window.location.href;       // https://www.example.com/my/page?name=value#section1
const protocol = window.location.protocol;     // https:
const host = window.location.host;             // www.example.com
const pathname = window.location.pathname;     // /my/page
const search = window.location.search;         // ?name=value
const hash = window.location.hash;             // #section1
```

**Alternative:**

You can also use `document.URL` to get the current URL, but `window.location.href` is preferred because it's more consistent across browsers.

**Important Note:** Remember that JavaScript runs in the context of the browser's current tab or window. If you have multiple tabs open, each tab will have its own `window.location` object representing the URL of that specific tab.

