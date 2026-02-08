// Problem Description – promiseAny(promises)

// You are required to implement a function named promiseAny that accepts an array of Promises.
// The function should return a new Promise that resolves immediately when any one of the input promises resolves successfully.
// If all the promises reject, the returned Promise should reject with an error.
function promiseAny(promises) {
  if (promises.length === 0) {
    return Promise.reject(new Error("Empty iterable"));
  }

  let rejectedCount = 0;

  return Promise.race(
    promises.map((p) =>
      Promise.resolve(p).catch(() => {
        rejectedCount++;
        if (rejectedCount === promises.length) {
          throw new Error("All promises were rejected");
        }
        //return the pending promise
        return new Promise(() => {});
      }),
    ),
  );
}

module.exports = promiseAny;
