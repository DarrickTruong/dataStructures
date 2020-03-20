var Node = require('./node_js');

var BST = (function () {
  function BST() {
    this.root = null;
  };

  BST.prototype.insert = function (data) {
    var node = new Node(data, null, null);
    if (this.root === null) {
      this.root = node;
    } else {
      var current = this.root;
      while (true) {
        var ancestor = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            ancestor.left = node;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            ancestor.right = node;
            break;
          }
        }
      }
    }
  };

  BST.prototype.inOrder = function (node) {
    if (node === null) {
      return;
    } else {
      this.inOrder(node.left);
      console.log(node.show() + " ");
      this.inOrder(node.right);
    }
  };

  BST.prototype.preOrder = function (node) {
    if (node === null) {
      return;
    } else {
      console.log(node.show() + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  };

  BST.prototype.postOrder = function (node) {
    if (node === null) {
      return;
    } else {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show() + " ");
    }
  };

  BST.prototype.getMin = function () {
    var min = Infinity;
    var pointer = this.root;
    var iterate = function (node) {
      if (node == null) {
        return
      } else {
        if (node.data < min) {
          min = node.data;
        }
        iterate(node.left);
        iterate(node.right);
      }
    };
    iterate(pointer);
    console.log('min is ', min);
    return min;
  }

  BST.prototype.getMax = function () {
    var max = 0;
    var pointer = this.root;
    var iterate = function (node) {
      if (node == null) {
        return
      } else {
        if (node.data > max) {
          max = node.data;
        }
        iterate(node.left);
        iterate(node.right);
      }
    };
    iterate(pointer);
    console.log('max is ', max);
    return max
  }

  BST.prototype.find = function (data) {
    var pointer = this.root;
    var check = data;
    var iterate = function (node, data) {
      if (node == null) {
        return
      } else {
        if (data < node.show()) {
          return iterate(node.left, data);
        } else if (data > node.show()) {
          return iterate(node.right, data);
        } else if (data == node.show()) {
          // console.log('in true');
          return true;
        } else {
          return false;
        }
      }
    };
    // console.log('iterate', iterate(pointer, check))
    return iterate(pointer, check);
  }

  BST.prototype.delete = function (data) {
    var remove = function (node, data) {
      if (this.root == null) {
        return null
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
          // node has one child
        } else if (node.left == null) {
          return node.right;
        } else if (node.right == null) {
          return node.left;
        }
        // node has two children
        var pointer = node.right;
        while (pointer.left != null) {
          pointer = pointer.left;
        }
        node.data = pointerNode.data;
        node.right = remove(node.right, pointerNode.data);
      }
      else if (data < node.data) {
        node.left = remove(node.left, data);
        return node;
      }
      else if (data > node.data) {
        node.right = remove(node.right, data);
        return node;
      }
    }

    return remove(this.root, data);

  }


  return BST;
})();

module.exports = BST;
