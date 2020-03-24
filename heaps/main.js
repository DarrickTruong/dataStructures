const MinHeap = require('./heaps');
let minHeap = new MinHeap();

minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(10);
minHeap.insert(11);
minHeap.insert(9);
minHeap.insert(20);
minHeap.insert(14);
minHeap.insert(7);
console.log(minHeap);


const MinHeap = require('./heaps');
let minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(12);
minHeap.insert(8);
minHeap.insert(17);
minHeap.insert(13);
minHeap.insert(15);
minHeap.insert(10);
console.log(minHeap);
console.log(minHeap.remove());
console.log(minHeap);


const MinHeap = require('./heaps');
let minHeap = new MinHeap();
let arr = [20,3,8,14,9,6,2];
console.log(minHeap.heapify(arr));
