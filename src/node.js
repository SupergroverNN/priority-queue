class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  appendChild(node) {
    if (this.left === null) {
      node.parent = this;
      this.left = node;
    } else if (this.right === null) {
      node.parent = this;
      this.right = node;
    }
  }

  removeChild(node) {
    if (this.left === node) {
      this.left = null;
      node.parent = null;
    } else if (this.right === node) {
      this.right = null;
      node.parent = null;
    } else {
      throw Error();
    }
  }

  remove() {
    if (this.parent !== null) {
      this.parent.removeChild(this);
    }
  }

  swapWithParent() {
    if (this.parent) {
      // если родитель есть
      let curParent = this.parent; // родитель
      let curParentOfParent = curParent.parent; // дед
      curParent.parent = this; 
      let curParentRight = curParent.right;
      let curParentLeft = curParent.left;
      if (curParent.right === this) {
        curParent.right = this.right;
        curParent.left = this.left;
        this.right = curParent;
        this.left = curParentLeft;
        if (curParent.left) {
          curParent.left.parent = curParent;
        }
        if (curParent.right) {
          curParent.right.parent = curParent;
        }
        if (this.left) {
          this.left.parent = this;
        }
      } else if (curParent.left === this) {
        curParent.right = this.right;
        curParent.left = this.left;
        this.right = curParentRight;
        this.left = curParent;
        if (curParent.left) {
          curParent.left.parent = curParent;
        }
        if (curParent.right) {
          curParent.right.parent = curParent;
        }
        curParent.parent = this;
        if (this.right) {
          this.right.parent = this;
        }
      }
      this.parent = curParentOfParent;
      if (curParentOfParent && curParent === curParentOfParent.left) {
        curParentOfParent.left = this;
      } else if (curParentOfParent && curParent === curParentOfParent.right) {
        curParentOfParent.right = this;
      }
      this.parent = curParentOfParent;
    } else {
      return;
    }
  }
}

module.exports = Node;
