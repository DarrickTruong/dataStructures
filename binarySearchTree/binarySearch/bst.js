const Node = require('./node');

const BST = (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.insert = function (val) {
        if (this.root === null) {
            this.root = new Node(val);
        } else {
            let current = this.root;
            while (current != null) {
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = new Node(val);
                        break
                    }
                    current = current.left;
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = new Node(val);
                        break
                    }
                    current = current.right;
                } else {
                    // val = current.val
                    console.log(val, 'already exists in tree');
                    break
                }
            }
        }
        return this;
    }

    BST.prototype.inOrderTraversal = function (node) {
        if (!node) {
            return
        } else {
            this.inOrderTraversal(node.left);
            console.log(node.show());
            this.inOrderTraversal(node.right);
        }
    }

    BST.prototype.preOrderTraversal = function (node) {
        if (!node) {
            return
        }
        console.log(node.show());
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    BST.prototype.postOrderTraversal = function (node) {
        if (!node) {
            return
        }
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.show());
    }

    BST.prototype.depth = function (node) {
        if (!node) {
            return 0;
        }
        let leftDepth = this.depth(node.left);
        let rightDepth = this.depth(node.right);
        // console.log('left', leftDepth, 'right', rightDepth);
        if (leftDepth > rightDepth) {
            return leftDepth + 1;
        } else {
            return rightDepth + 1;
        }
    }

    BST.prototype.delete = function (val) {
        var remove = function (node, val) {
            if (node === null) {
                return null
            }
            if (node.val === val) {
                // no children
                if (!node.left && !node.right) {
                    return null
                }
                // one child
                else if (!node.left) {
                    return node.right
                }
                else if (!node.right) {
                    return node.left
                }
                // two children
                let pointer = node;
                pointer = pointer.right;
                // traverse left on the right tree branch
                while (pointer.left) {
                    pointer = pointer.left
                }
                // set node = left most leaflet from right branch
                node.val = pointer.val;
                // now remove the left most leaflet from the right branch
                node.right = remove(node.right, pointer.val)
            } else if (val < node.val) {
                node.left = remove(node.left, val);
                return node
            } else if (val > node.val) {
                node.right = remove(node.right, val);
                return node
            }
        }
        return remove(this.root, val);
    }


    return BST;
})();
module.exports = BST;