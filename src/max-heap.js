const Node = require("./node");

class MaxHeap {
  constructor() {
    this.root = null;
    this.parentNodes = [];
    this.length = 0;
  }

  push(data, priority) {
    let node = new Node(data, priority);
    this.insertNode(node);
		this.shiftNodeUp(node);
		this.length++;
  }

  pop() {
		if(this.length === 0){
			return
    }
    const temp = this.detachRoot()
		this.length--;
		return temp.data
	}

  detachRoot() {
    let curRoot = this.root;
    this.root = null;
    if(this.parentNodes.includes(curRoot)){
      this.parentNodes.splice(this.parentNodes.indexOf(curRoot), 1)
    }
    return curRoot;
  }

  restoreRootFromLastInsertedNode(detached) {}

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
    if (this.root === null) {
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
    if (node.parent && node.priority > node.parent.priority) {
      let indexParent = this.parentNodes.indexOf(node.parent);
      let index = this.parentNodes.indexOf(node);
      this.parentNodes[index] = node.parent;
      if (index >= 0) {
        this.parentNodes[indexParent] = node;
      } else if (indexParent >= 0) {
        this.parentNodes[indexParent] = node.parent;
      }
      node.swapWithParent();
      this.shiftNodeUp(node);
    }
    if (!node.parent) {
      this.root = node;
    }
  }

	shiftNodeDown(node) {
    let topPriorityNode = node;
  	if (node.left && node.left.priority > node.priority) {
      topPriorityNode = node.left; 
    }
    if (node.right && node.right.priority > topPriorityNode.priority) {
      topPriorityNode = node.right
    }
    if (topPriorityNode === node) {
      return
    }
		this.shiftNodeUp(topPriorityNode);		
		this.shiftNodeDown(node);
  }
}

module.exports = MaxHeap;
