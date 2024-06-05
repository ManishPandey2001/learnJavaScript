### How to Detect a Mobile Browser Using `navigator.userAgent`

Detecting a mobile browser can be done by checking the `navigator.userAgent` string, which contains information about the browser and operating system. Using regular expressions, you can look for patterns commonly associated with mobile devices.

### Example Using `navigator.userAgent` with Regular Expressions

```javascript
function isMobileBrowser() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    userAgent
  );
}

if (isMobileBrowser()) {
  console.log("Mobile browser detected");
} else {
  console.log("Not a mobile browser");
}
```

In this example, the regular expression checks for various keywords in the `userAgent` string that are typically found in mobile browsers.

### How to Detect a Mobile Browser Without Using Regular Expressions

If you prefer not to use regular expressions, you can detect a mobile browser by checking for specific properties or behaviors that are unique to mobile devices. One common approach is to check for touch event support, which is typically present on mobile devices.

### Example Using Touch Event Support Detection

```javascript
function isMobileBrowser() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (isMobileBrowser()) {
  console.log("Mobile browser detected");
} else {
  console.log("Not a mobile browser");
}
```

### Explanation

1. **`'ontouchstart' in window`**: This checks if the `ontouchstart` event is available in the `window` object, which is true for devices that support touch events (i.e., mobile devices).

2. **`navigator.maxTouchPoints`**: This property indicates the maximum number of simultaneous touch points the device supports. A value greater than 0 usually indicates a touch-enabled device.

3. **`navigator.msMaxTouchPoints`**: This property is similar to `maxTouchPoints` but is specific to Internet Explorer and some older versions of Microsoft Edge.

### Conclusion

While the `navigator.userAgent` string is a common method for detecting mobile browsers, it can be achieved without regular expressions by using properties like touch event support. Both methods have their use cases, and the choice between them depends on the specific requirements and constraints of your application.
