// Problem Description – Ordered Parallel Batcher
//
// You need to process many items in parallel, but with a fixed
// concurrency limit to avoid resource exhaustion.
//
// Tasks should start as soon as a slot is free, and the final
// results must preserve the original input order.
//
// Requirements:
// - Run at most `limit` workers in parallel.
// - Preserve the original order of results.
// - Start new work as soon as one finishes.
// - Stop and return an error if any task fails.

function batchProcess(items, limit, worker, onComplete) {

  let index = 0 //tracks next task to start 
  let running = 0 //tracks how many are currently running
  let results = new Array(items.length) //results array 
  let hasError = false //Error flag 

  function runNext() {
    //if error happend ,stop everything
    if (hasError) return

    //if all task are done 
    if (index === items.length && running === 0) {
      return onComplete(null, results)
    }

    // Start tasks while we have capacity
    while (running < limit && index < items.length) {
      const currentIndex = index;
      const item = items[index];

      index++;
      running++;

      worker(item, (err, result) => {
        running--;

        if (hasError) return;

        if (err) {
          hasError = true;
          return onComplete(err);
        }

        // Preserve order
        results[currentIndex] = result;

        // Start next task
        runNext();
      });
    }
  }

  // Start initial batch
  runNext();

}

module.exports = batchProcess
