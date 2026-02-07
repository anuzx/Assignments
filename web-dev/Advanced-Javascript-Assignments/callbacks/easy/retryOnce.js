// Problem Description – retryOnce(fn)
//
// You are given a function `fn` that returns a Promise.
// Your task is to return a new function that calls `fn` and retries it once
// if the first attempt rejects.
// If the second attempt also rejects, the error should be propagated.

function retryOnce(fn) {
return function (callback) {
  fn((err, data) => {
    if (!err) {
      // first attempt success
      callback(null, data);
    } else {
      // first attempt failed → retry once
      fn((err2, data2) => {
        callback(err2, data2);
      });
    }
  });
};
}

module.exports = retryOnce;
