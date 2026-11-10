function promisePolyFill(executor) {
  let onResolve;
  let onReject,
    isFullfilled = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFullfilled = true;
    value = val;

    if (typeof onResolve === "function") {
        onResolve(val);
        isCalled = true;
    }
    
  }

  function reject(val) {
    isRejected = true;
    value = val;

    if(typeof onReject === "function"){
        onReject(val);
        isCalled = true;
    }
    
  }

  this.then = function (callback) {
    onResolve = callback;
    if(isFullfilled && !isCalled){
        isCalled = true;
        onResolve(value);


    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if(isFullfilled && !isCalled){
        isCalled = true;
        onReject(value);
    }
    return this;
  };

  try{
    executor(resolve, reject);
  }catch(error){
    reject(error);
  }
  
}

const examplePromise = new promisePolyFill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));
