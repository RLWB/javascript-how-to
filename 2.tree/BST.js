function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = () => {
    return this.data;
  };
}

function BST() {
  this.root = null;
  this.insert = this.insert;
}

const insert = (data) => {
  let n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    let current = this.root;
    let parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = null;
          break;
        }
      }
    }
  }
};
