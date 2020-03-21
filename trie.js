function Node(value) {
    this.chr = new Map();
    this.value = value;
}

let Trie = (function () {
    function Trie() {
        this.root = new Node();
    }
    Trie.prototype.insert = function (word, value) {
        // your code here
        let pointer = this.root;
        for (let i = 0; i < word.length; i++) {
            // console.log(i, pointer);
            let currentLetter = word.charAt(i)
            let children = pointer.chr.get(currentLetter);
           if (children == null) {
               children = new Node;
               pointer.chr.set(currentLetter, children)
            //    console.log(pointer)
            }
            pointer = children;
        }
        pointer.value = value
        // console.log(pointer.value)
    }
    Trie.prototype.get = function (word) {
        // your code here (outputs value of word)
        let pointer = this.root;
        for (let i = 0; i < word.length; i++) {
            let currentLetter = word.charAt(i);
            let children = pointer.chr.get(currentLetter);
            if (children == null) {
                return false;
            } else {
                pointer = children;
            }
        }
        return pointer.value;
    }
    return Trie;
})();
module.exports = Trie;
