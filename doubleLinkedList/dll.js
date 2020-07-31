let Node = require("./node.js");

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.previous;
      this.tail.next = null;
      poppedNode.previous = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.previous = null; 
      oldHead.next = null;
    }
    this.length--;
    return oldHead
  }

  unshift(val) {
    if (!this.head) return this.push(val);
    else {
      let newNode = new Node(val);
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
      return this
    }
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx <= this.length/2)
  }
}



let dll = new DoubleLinkedList();

// console.log(dll.push(1));
// console.log(dll.push(2));
console.log(dll.unshift(0));
