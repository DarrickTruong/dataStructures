class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return null;
    } else {
      if (this.head === this.tail) {
        let popped = this.head;
        this.head = null;
        this.tail = null;
        this.length--;
        return popped;
      }
      var current = this.head;
      while (current.next) {
        var pre = current;
        current = current.next;
      }
      pre.next = null;
      this.tail = pre;
      this.length--;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return null
    }
    let remove = this.head;
    this.head = this.head.next;
    remove.next = null;
    this.length--;
    return remove;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx){
      if(idx > this.length-1 || !this.head){
          return null
      }
      let current = this.head;
      while (idx>0){
          current = current.next;
          idx--;
      }
    return current
  }

  set(idx, newVal) {
    let foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = newVal;
      return true
    }
    return false
  }

  insert(idx, val) {
    if (idx > this.length || idx < 0) {
      return false;
    } else if (idx === this.length) {
      return !!this.push(val);
    } else if (idx === 0) {
      return !!this.unshift(val);
    } else {
      let newNode = new Node(val);
      let previous = this.get(idx-1);
      let next = previous.next;
      previous.next = newNode;
      newNode.next = next;
      this.length++;
      return true;
    }
   }

   remove(idx) {
     if (idx < 0 || idx >= this.length) {
       return undefined
     } else if (idx === this.length - 1) {
       return this.pop();
     } else if (idx === 0) {
       return this.shift();
     } else {
       let previous = this.get(idx-1);
       let removed = previous.next;
       previous.next = removed.next;
       removed.next = null;
       this.length--;
       return removed
     }
   }

   reverse() {
     if (!this.head) {
       return null
     }
     let current = this.head;
     this.head = this.tail;
     this.tail = current;
     let previous = null; 
     let next; 
     while (current) {
       next = current.next;
       current.next = previous;
       previous = current;
       current = next; 
     }
     return this
     
   }
}

let sll = new SLL();

console.log(sll.push(1));
console.log(sll.push(2));
console.log(sll.push(3));

// console.log(sll.pop());
// console.log(sll.pop());
// console.log(sll.pop());
// console.log(sll);

// console.log(sll.push(1));
// console.log(sll.push(2));
// console.log(sll.push(3));
// console.log(sll.unshift(4));
// console.log(sll.get(0));
// console.log(sll.get(1));
// console.log(sll.get(2));
// console.log(sll.get(3));
// console.log(sll.get(4));
// console.log(sll.set(0, 0));
// console.log(sll.get(0));

console.log(sll.reverse());
console.log(sll)


