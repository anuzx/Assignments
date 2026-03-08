// Problem Description – promiseAny(promises)

// You are required to implement a function named promiseAny that accepts an array of Promises. 
// The function should return a new Promise that resolves immediately when any one of the input promises resolves successfully. 
// If all the promises reject, the returned Promise should reject with an error.
function promiseAny(promises) {
  return new Promise((resolve, reject) => {

    let count = 0
    if (promises.length === 0) {
      reject(new Error("Empty iterable"))
    }
    promises.forEach((item) => {

      Promise.resolve(item).then(resolve).catch(() => {
        count++
        if (count === promises.length) {
          reject(new Error("All promises were rejected"))
        }
      })
    });


  })
}

module.exports = promiseAny;
