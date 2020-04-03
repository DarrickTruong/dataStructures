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

    BST.prototype.inOrderTraversal = function (node = this.root) {
        if (!node) {
            return
        } else {
            this.inOrderTraversal(node.left);
            console.log(node.show());
            this.inOrderTraversal(node.right);
        }
    }

    BST.prototype.preOrderTraversal = function (node = this.root) {
        if (!node) {
            return
        }
        console.log(node.show());
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    BST.prototype.postOrderTraversal = function (node = this.root) {
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
            // edge case for empty tree
            if (node === null) {
                return null
            }
            // if we have found the node we are trying to remove
            if (node.val === val) {
                // no children
                // the no children worked?
                // why didn't you have to reassign the prev node to point to null?
                // basically you're setting the node to null, 
                // which means the previous node it was pointing to is now null
                // hum...
                if (!node.left && !node.right) {
                    return null // oooohh this is an important part
                    // recalling back to line 123
                }
                // one child
                else if (!node.left) { // only has right child
                    return node.right 
                }
                else if (!node.right) { // only has left child
                    return node.left 
                    // the returned node is getting reassigned to the previous node.... is that what I am getting at???
                }
                // two children
                let pointer = node; // this pointer variable is going to run and get the smallest val next in line
                pointer = pointer.right;
                // traverse left on the right tree branch
                while (pointer.left) { 
                    pointer = pointer.left
                }
                // set node = left most leaflet from right branch
                node.val = pointer.val;
                // now remove the left most leaflet from the right branch
                node.right = remove(node.right, pointer.val)
                return node //  which then gets reassinged to the previous node and "deletes" the current node we are on
            } else if (val < node.val) {
                node.left = remove(node.left, val); // this is where the reassinging is happening!!!
                return node
            } else if (val > node.val) {
                node.right = remove(node.right, val); // this is where the reassinging is happening!!!
                return node 
            }
        }
        return remove(this.root, val);
    }
    return BST;
})();
module.exports = BST;

/**
 * okay that was a little conveluted, but I think I got it. 
 * 
 * you feel good to be done till another day?
 * I am hungry
 * How do you feel about your code?
 * i feel decent about it... the way you described it just now, made it make more sense to me
 * recursion is still a little cloudy for me.... i understand the call stack but still is confusing sometimes
 * 
 * 
 * totally understandable 
 * this was fun
 * we should do it again soon
 * 
 * agreed
 * 
 * Have a good rest of your day :)
 * 
 * grassyass  you too.. enjoy your meal
 * 
 * 
 * 
 */


// lol whats happening?

// tryin to run in order traversal but its not showing anything... weird
// okay well want to just do something else then?
// you should pick a super easy algo on leet code and we will finish it fast
// then I can eat lunch :P

// okay i got it... i got it to delete 101

// what was wrong hahaha?
// i forgot to pass in the root node into the inorder traversal... i guess thats how i wrote it... 

// ahha i do... just a noob.. fuck
// lol test your code man :P

// or just preset the variable to this.root
// I changed it for you 
