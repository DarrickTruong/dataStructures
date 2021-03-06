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
            // console.log(newInd, this.heap[newInd], parent, this.heap[parent]);
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
            // console.log('in remove', this.heap, 'parent', this.heap[parent], 'children', this.heap[children], this.heap[children + 1]);
            if (this.heap[parent] > this.heap[children] && this.heap[parent] > this.heap[children + 1]) {
                // console.log('in both');
                if (this.heap[children] < this.heap[children + 1]) {
                    temp = this.heap[parent];
                    this.heap[parent] = this.heap[children];
                    this.heap[children] = temp;
                    parent = children;
                    children = Math.floor(parent * 2);
                } else {
                    temp = this.heap[parent];
                    this.heap[parent] = this.heap[children + 1];
                    this.heap[children + 1] = temp;
                    parent = children + 1;
                    children = Math.floor(parent * 2);
                }
            } else if (this.heap[parent] > this.heap[children]) {
                // console.log('in children');
                temp = this.heap[parent];
                this.heap[parent] = this.heap[children];
                this.heap[children] = temp;
                parent = children;
                children = Math.floor(parent * 2);
            } else if (this.heap[parent] > this.heap[children + 1]) {
                // console.log('in children + 1');
                temp = this.heap[parent];
                this.heap[parent] = this.heap[children + 1];
                this.heap[children + 1] = temp;
                parent = children + 1;
                children = Math.floor(parent * 2);
            } else {
                // console.log('exit', this.heap);
                run = false;
            }
        }
        return popped;
    }
    MinHeap.prototype.heapify = function heapify(arr) {
        if (arr[0] != undefined) {
            // console.log('in');
            arr.push(undefined);
            let temp = arr[0];
            arr[0] = arr[arr.length - 1];
            arr[arr.length - 1] = temp;
        }
        for (let i = 0; i < Math.floor(arr.length-1) ; i++) {
            let children = (arr.length - 1 - i);
            let parent = Math.floor(children/2)
            // console.log('in heapify', arr[parent], arr[children]);
            if (arr[parent] > arr[children]) {
                let temp = arr[parent];
                arr[parent] = arr[children];
                arr[children] = temp;
            }
        }
        this.heap = arr;
        return this.heap;
    }
    MinHeap.prototype.sort = function sort(arr) {
        let heaped = new MinHeap();
        for (let i = 0; i < arr.length; i++) {
            heaped.insert(arr[i]);
        }
        // console.log(heaped.heap)
        let sorted = [];
        while (heaped.heap.length > 1) {
            let lowest = heaped.remove();
            sorted.push(lowest);
        }
        return sorted
    }
    return MinHeap
})();
module.exports = MinHeap