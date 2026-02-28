// Problem Description – Custom Implementation of Promise.all

// You are required to implement your own version of Promise.all without using the built-in method. 
// The function should accept an array of values that may include Promises or plain constants. 
// It must resolve with an array of results in the same order once all inputs resolve, or reject immediately if any input rejects.
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((item, index) => {
      Promise.resolve(item) // handles non-promise values
        .then(value => {
          results[index] = value; // preserve order
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject); // reject immediately
    });
  });
}

module.exports = promiseAll;
