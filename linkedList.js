var Node = require('./node');

var SinglyLinkedList = (function () {
    function SinglyLinkedList() {
        this.head = new Node("head");
    }
    SinglyLinkedList.prototype.find = function (element) {
        // find element(ie. val) in SLL
        var currentNode = this.head;
        while (currentNode.next != null && currentNode.element != element) {
            currentNode = currentNode.next;
        }
        console.log('current', currentNode);
        return currentNode;
    }
    SinglyLinkedList.prototype.insert = function (newElement, element) {
        // insert after element/val
        var newNode = new Node(newElement);
        var currentNode = this.find(element);
        if (currentNode.next == null) {
            currentNode.next = newNode;
        } else {
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        // console.log(newNode);
    }
    SinglyLinkedList.prototype.display = function () {
        var currentNode = this.head;
        if (currentNode == null) {
            return 0;
        }
        while (currentNode.next != null) {
            currentNode = currentNode.next;
            console.log(1, currentNode.element);
        }
    }
    SinglyLinkedList.prototype.findPrevious = function (element) {
        // find the node before the element
        currentNode = this.head;
        while (currentNode.next != null && currentNode.next.element != element) {
            // console.log(currentNode.next.element, element);
            currentNode = currentNode.next;
        }
        // console.log('previous node', currentNode);
        return currentNode;
    }
    SinglyLinkedList.prototype.remove = function (element) {
        previousNode = this.findPrevious(element);
        currentNode = previousNode.next;
        if (currentNode.next == null) {
            previousNode.next = null;
        } else {
            previousNode.next = currentNode.next;
            currentNode.next = null;
        }
    }
    return SinglyLinkedList;
})();
module.exports = SinglyLinkedList;





