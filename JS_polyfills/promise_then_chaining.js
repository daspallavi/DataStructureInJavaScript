function promisePolyFill(executor) {
  let isFulfilled = false;
  let isRejected = false;
  let value;
  
  // Store an array of handlers to support chaining and multiple .then() calls
  let handlers = [];

  function resolve(val) {
    if (isFulfilled || isRejected) return; // Promises can only settle once
    
    isFulfilled = true;
    value = val;
    handlers.forEach(handle);
  }

  function reject(err) {
    if (isFulfilled || isRejected) return;
    
    isRejected = true;
    value = err;
    handlers.forEach(handle);
  }

  // The handle function decides what to do with the current state and value
  function handle(handler) {
    if (isFulfilled) {
      if (typeof handler.onResolve === "function") {
        try {
          // Get the return value of the .then() callback
          const result = handler.onResolve(value);
          // Resolve the next promise in the chain with this result
          handler.resolveNext(result);
        } catch (error) {
          handler.rejectNext(error);
        }
      } else {
        // If no onResolve is provided, just pass the value forward
        handler.resolveNext(value);
      }
    } else if (isRejected) {
      if (typeof handler.onReject === "function") {
        try {
          // If a catch block exists, it handles the error and RECOVERS the chain
          const result = handler.onReject(value);
          handler.resolveNext(result);
        } catch (error) {
          handler.rejectNext(error);
        }
      } else {
        // If no catch block, pass the error forward down the chain
        handler.rejectNext(value);
      }
    }
  }

  this.then = function (onResolve, onReject) {
    // Return a NEW promise to allow chaining
    return new promisePolyFill((resolveNext, rejectNext) => {
      const handler = {
        onResolve,
        onReject,
        resolveNext,
        rejectNext,
      };

      if (isFulfilled || isRejected) {
        // If the promise is already settled, execute immediately
        handle(handler);
      } else {
        // If it's still pending (e.g., inside a setTimeout), save it for later
        handlers.push(handler);
      }
    });
  };

  this.catch = function (onReject) {
    // catch is just syntactic sugar for then(null, onReject)
    return this.then(null, onReject);
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

// --- Testing the Chain ---
const examplePromise = new promisePolyFill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

examplePromise
  .then((res) => {
    console.log("First then:", res); // Logs: 2
    return res * 2;                  // Passes 4 to the next then
  })
  .then((res) => {
    console.log("Second then:", res); // Logs: 4
    return res * 2;                   // Passes 8 to the next then
  })
  .then((res) => {
    console.log("Third then:", res);  // Logs: 8
    throw new Error("Something went wrong");
  })
  .catch((err) => {
    console.error("Caught error:", err.message); // Logs: Something went wrong
  });