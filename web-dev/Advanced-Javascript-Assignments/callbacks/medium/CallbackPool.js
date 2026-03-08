// Problem Description – Asynchronous Worker Pool
//
// You are required to create a worker pool that manages the execution
// of asynchronous tasks.
// The pool should ensure that no more than N tasks are running concurrently,
// while any additional tasks are queued.
// As tasks complete, queued tasks should start automatically.
// Each task must invoke its callback with its result when finished.


class CallbackPool {
  constructor(limit) {
    this.limit = limit
  }

  run(task, onComplete) {
    if (task === this.limit) {
      return new Error("limit reached")

    }

    if (onComplete) {
      this._next()
    }
  }

  _next() { }
}

module.exports = CallbackPool;
