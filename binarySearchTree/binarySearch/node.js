const Node = (function(){
    function Node(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    Node.prototype.show = function() {
        return this.val;
    }
    return Node;
})();
module.exports = Node;