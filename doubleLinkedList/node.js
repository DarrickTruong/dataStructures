let Node = (function() {
    function Node(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
    
    return Node
})();

module.exports = Node; 
