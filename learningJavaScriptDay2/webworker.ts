// worker.js (the web worker script)
self.onmessage = function(e) {
    let result = fibonacci(e.data); // Calculate Fibonacci
    postMessage(result); // Send result back to the main thread
  };
  
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  