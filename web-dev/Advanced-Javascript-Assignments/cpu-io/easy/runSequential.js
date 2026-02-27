// Problem Description – Sequential Execution of Async Functions

// You are given an array of asynchronous functions. Your task is to execute them one by one, ensuring that each function starts only after the previous one has completed.
// The final result should be an array of resolved values in the same order.
async function runSequential(functions) {
  const arr = [];
  for (const fn of functions) {
    const result = await fn();
    arr.push(result);
  }
  return arr;
}

module.exports = runSequential;
