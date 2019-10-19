const MaxHeap = require("./max-heap.js");

class PriorityQueue {
  constructor(maxSize) {
    this.heap = new MaxHeap();
    this.maxSize = maxSize;
  }

  push(data, priority) {
    if (this.heap.length === this.maxSize) throw new Error();
    this.heap.push(data, priority);
  }

  shift() {
		if (this.heap.length === 0) {
			throw new Error()
		} else {
			return this.heap.pop();
		}
	}

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

module.exports = PriorityQueue;
