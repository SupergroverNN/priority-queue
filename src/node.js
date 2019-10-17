class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if(this.left === null) {
			node.parent = this;
			this.left = node
		} else if (this.right === null) {
			node.parent = this;
			this.right = node;
		} 
	}

	removeChild(node) {
		if(this.left.data === node.data && this.left.priority === node.priority){
			node.parent = null;
			this.left = null
		} else 	if(this.right.data === node.data && this.right.priority === node.priority){
			node.parent = null;
			this.right = null
		} else {
			throw Error()
		}
	}

	remove() {
		if(this.parent !== null) {
			this.parent.removeChild(this)
		}
	}

	swapWithParent() {
		let curParent = this.parent;
		let curChild = this;
	}
}

module.exports = Node;
