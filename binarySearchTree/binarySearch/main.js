const BST = require('./bst');
let bst = new BST();

bst.insert(10).insert(12).insert(7).insert(15).insert(7).insert(6).insert(8).insert(20).insert(13).insert(14)
// console.log(bst);
// console.log(bst.root.left);
// console.log(bst.root.right);
// bst.inOrderTraversal(bst.root);
// console.log();
// bst.preOrderTraversal(bst.root);
// console.log();
// bst.postOrderTraversal(bst.root);

// console.log(bst.depth(bst.root));
console.log(bst.delete(10));
