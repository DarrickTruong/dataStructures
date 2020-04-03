/**
 * Oh I see 
 */
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





const BST = require('./bst');

const myBTS = new BST();
myBTS.insert(100);
const vals = [200, 300, 50, 40, 30, 20, 45, 55, 51, 57, 59, 22, 110, 101, 220, 225];
for (let n of vals) {
    myBTS.insert(n);
}
myBTS.inOrderTraversal(myBTS.root);
// [
//     20,  22,  30,  40,  45,  50,
//     51,  55,  57,  59, 100, 101,
//    110, 200, 220, 225, 300
// ]

// who did you display your inorder traversal? did you console.log inside the function?

// console.log(myBTS.postOrder());
// [
//     22,  20,  30,  45,  40,  51,
//     59,  57,  55,  50, 101, 110,
//    225, 220, 300, 200, 100
// ]

console.log(myBTS.delete(55)); // has two children
//  okay i guess my code sucks.. aha something happened with two children
// now you see why I have so many console logs
//  yes i see... but i just fixed... it ... i noticed i returned node for all of the other 
// cases but not for two children... so i added return node and it worked..
// GREAT so let's look at it again


// console.log(myBTS.delete(225)); // has no children
// no children worked!!! yesss... ahha //Yay

// console.log(myBTS.delete(110)); // has left child
// left child worked too // cool

// console.log(myBTS.delete(57)); // has right child
// this worked as well // good
// ya two children is a bitch
// 


// uncomment and run each at time
// cant you run the code too? okay i will


myBTS.inOrderTraversal(); // I set the default parameters for you to be this.root
// myBTS.inOrderTraversal(); should run without having to pass a var in 
// you ufcked up my code!ajahha
// fucked it up in the right way
// don't worry it liked it, how fucking rude don't type over me
// typical men
// ohhh nicee
// what?!?! you changed my code... my beautiful code



/***
 * If it was so beautiful why did it take you so long to fix
 * 
 * 
 * I am sorry feelin' sassy being cooped up all day and night
 * I am too social for shelter in place
 * 
 * damn *very sad face* 
 * 
 * okay i think we can go back to the delete on your screen?
 * 
 * okay so yours works all the way?
 */