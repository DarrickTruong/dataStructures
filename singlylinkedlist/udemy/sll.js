class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
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
    };

    pop(){
        if(!this.head){
            return null
        } else {
            if (this.head === this.tail) {
                let popped = this.head;
                this.head = null;
                this.tail = null;
                this.length--;
                return popped;
            }
            var current = this.head;
            while(current.next) {
                var pre = current;
                current = current.next;
            }
            pre.next = null;
            this.tail = pre;
            this.length--;
        }
        return current;
    }
}

let sll = new SLL();

console.log(sll.push(1))
console.log(sll.push(2));
console.log(sll.push(3));

console.log(sll.pop());
console.log(sll.pop());
console.log(sll.pop());
console.log(sll);


