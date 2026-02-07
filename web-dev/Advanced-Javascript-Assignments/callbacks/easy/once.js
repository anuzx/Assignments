// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function once(fn) {
  let called = false;
  let savedErr;
  let savedData;

  //fn is callback based async fxn
  return function (...args) {
    const callback = args.pop();//callback is always the last argument

    // If already called, reuse result
    if (called) {
      callback(savedErr, savedData);
      return;
    }
      
    // First call
    called = true;
    fn(...args, (err, data) => {
     savedErr = err;
     savedData = data;
     callback(err, data);
    });
  };
}

//callback based :fn(arg1, arg2, ..., callback)

module.exports = once;
