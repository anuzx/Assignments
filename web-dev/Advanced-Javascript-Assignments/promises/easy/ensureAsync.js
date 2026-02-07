// Problem Description – ensureAsync(fn)

// You are required to write a function named ensureAsync that takes another function fn as input.
// The goal is to guarantee that calling fn always returns a Promise, even if fn is synchronous.
// Using the async keyword is recommended, as it automatically wraps return values and errors in a Promise.

function ensureAsync(fn) {
    return async function (...args) {
        return fn(...args);
  };
}

//what async does :
//if you return a value -> it becomes Promise.resolve(value)
//If you throw an error → it becomes Promise.reject(error)

//await is used if we want to use the resolved value ,here using await or not will not change anything
module.exports = ensureAsync;
