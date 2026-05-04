// Problem Description – Hedged Request
//
// You have a Primary async source and a Secondary backup.
// Start the Primary immediately. If it is slow, start the Secondary.
//
// Return the first successful result and ignore the rest.
// Only fail if both fail, and ensure the callback runs once.
//
// Requirements:
// - Start Primary immediately.
// - Start Secondary after timeoutMs if needed.
// - First success wins.
// - Callback must be called exactly once.
function hedgedRequest(primary, secondary, timeoutMs, onComplete) {
  let finished = false;
  let errorCount = 0;

  function done(err, result) {
    if (finished) return;

    if (!err) {
      finished = true;
      return onComplete(null, result);
    }

    // if error
    errorCount++;

    if (errorCount === 2) {
      finished = true;
      return onComplete(err);
    }
  }

  // Start primary immediately
  primary((err, result) => {
    done(err, result);
  });

  // Start secondary after timeout
  setTimeout(() => {
    if (finished) return;

    secondary((err, result) => {
      done(err, result);
    });
  }, timeoutMs);
}

module.exports = hedgedRequest;
