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
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let current;
    if (idx <= this.length/2) {
      current = this.head;
      while(idx) {
        current = current.next;
        idx--
      }
    } else {
      current = this.tail;
      let reverseIdx = this.length-1;
      while (reverseIdx !== idx) {
        current = current.previous;
        reverseIdx--;
      }
    }
      return current;
  }

  set(idx, newVal) {
    let node = this.get(idx);
    if (node) {
      node.val = newVal;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    
    let newNode = new Node(val);
    let previousNode = this.get(idx-1);
    let afterNode = previousNode.next;

    previousNode.next = newNode, newNode.previous = previousNode;
    newNode.next = afterNode, afterNode.previous = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return this.shift();
    if (idx === this.length-1) return this.pop();

    let removeNode = this.get(idx);
    let previousNode = removeNode.previous;
    let afterNode = removeNode.next;

    previousNode.next = afterNode, afterNode.previous = previousNode;
    removeNode.previous = null, removeNode.next = null;
    
    this.length--;
    return removeNode;
  }

  reverse() {
    if (!this.head) return undefined;
    let current = this.head;
    while(current != null) {
      let prevNode = current.previous; 
      current.previous = current.next;
      current.next = prevNode;
      if (prevNode != null) prevNode.previous = current;
      current = current.previous;
    }
    let oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;
    return "reversed " , this;
  }
}



let dll = new DoubleLinkedList();

console.log(dll.push(1));
console.log(dll.push(2));
console.log(dll.push(3));
console.log('normal', dll);
// console.log(dll.set(0, "works"));
// console.log(dll.insert(1, "great"));
console.log(dll.reverse());
console.log(dll.reverse());
