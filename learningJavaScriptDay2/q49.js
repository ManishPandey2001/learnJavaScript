// main.js (the main script)
if (window.Worker) {
    let myWorker = new Worker("webworker.js"); // Create worker instance
    
    myWorker.onmessage = function(e) {
      console.log("Fibonacci result:", e.data);
    };
  
    myWorker.postMessage(10); // Send data to the worker
  }
  