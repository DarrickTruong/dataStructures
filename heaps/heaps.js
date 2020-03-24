const MinHeap = (function () {
    function MinHeap() {
        this.heap = [];
    }
    MinHeap.prototype.insert = function insert(val) {
        // your code here
        if (this.heap.length < 1) {
            this.heap[0] = undefined;
        }
        this.heap.push(val);
        let newInd = this.heap.length - 1;
        let parent = Math.floor(newInd / 2);
        while (this.heap[newInd] < this.heap[parent]) {
            console.log(newInd, this.heap[newInd], parent, this.heap[parent]);
            let temp = this.heap[newInd];
            this.heap[newInd] = this.heap[parent];
            this.heap[parent] = temp;
            newInd = parent;
            parent = Math.floor(newInd / 2);
        }
    }

    MinHeap.prototype.remove = function remove() {
        
        let temp = this.heap[1];
        let last = this.heap.length - 1;
        this.heap[1] = this.heap[last];
        this.heap[last] = temp;
        let popped = this.heap.pop();

        let parent = 1;
        let children = Math.floor(1 * 2);
        let run = true;
        while (run) {
            console.log(this.heap[parent], this.heap[children], this.heap[children+1]);
            if (this.heap[parent] > this.heap[children] && this.heap[parent] > this.heap[children + 1]) {
                if (this.heap[children] < this.heap[children + 1]) {
                    temp = this.heap[parent];
                    this.heap[parent] = this.heap[children];
                    this.heap[children] = temp;
                    parent = children;
                    children = Math.floor(parent * 2);
                } else {
                    temp = this.heap[parent];
                    this.heap[parent] = this.heap[children + 1];
                    this.heap[children + 1] = this.heap[parent];
                    parent = children + 1;
                    children = Math.floor(parent * 2);
                }
            } else if (this.heap[parent] > this.heap[children]) {
                temp = this.heap[parent];
                this.heap[parent] = this.heap[children];
                this.heap[children] = temp;
                parent = children;
                children = Math.floor(parent*2);
            } else if (this.heap[parent] > this.heap[children+1]) {
                temp = this.heap[parent];
                this.heap[parent] = this.heap[children+1];
                this.heap[children+1] = temp;
                parent = children+1;
                children = Math.floor(parent*2);
            } else {
                run = false;
            }
        }
        return popped;
    }
    return MinHeap
})();
module.exports = MinHeap