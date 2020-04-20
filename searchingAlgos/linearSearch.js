// write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. if the value does not exist in the array, return -1

function linearSearch(arr, value) {
    for (let ind=0; ind < arr.length; ind++) {
        // console.log(ind);
        if (arr[ind] === value) return ind;
    }
    return -1
}

console.log(linearSearch([10,15,20,25,30], 15));
console.log(linearSearch([9,8,7,6,5,4,3,2,1,0], 4));
console.log(linearSearch([100], 100));
console.log(linearSearch([1,2,3,4,5], 6));
console.log(linearSearch([9,8,7,6,5,4,3,2,1], 10));
console.log(linearSearch([100],200));



// write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. otherwise, return -1

function binarySearch(arr, value) {
    if (arr.length < 1) return -1;

    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((start+end)/2);

    if (arr[mid] === value) {
        return mid
    } else if (value < arr[mid]) {
        return binarySearch(arr.slice(0, mid-1), value);
    } else {
        return binarySearch(arr.slice(mid+1, arr.length-1), value)
    }
}