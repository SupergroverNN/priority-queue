const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	push(data, priority) {
		let node = new Node(data,priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.length;
	}

	isEmpty() {
		return this.length === 0;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	insertNode(node) {
		if(this.root === null){
			this.root = node;
			this.parentNodes.push(node);
		} else {
			let curParent = this.parentNodes[0];
			curParent.appendChild(node);
			curParent.right && this.parentNodes.shift();
			this.parentNodes.push(node);
		}
	}

	shiftNodeUp(node) {
		if (node.parent && (node.priority > node.parent.priority)) {
			let indexParent = this.parentNodes.indexOf(node.parent);
			let index = this.parentNodes.indexOf(node);
			if (this.parentNodes.includes(node.parent)) {
				this.parentNodes[index] = node.parent;
				this.parentNodes[indexParent] = node;
			} else if (this.parentNodes.includes(node)) {
				this.parentNodes[indexParent] = node.parent;
			}
			node.swapWithParent();
			this.shiftNodeUp(node);
		} else {
			return
		}
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
