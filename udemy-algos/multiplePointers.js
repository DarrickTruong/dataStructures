let countUniqueValues = (arr) => {
    if (arr.length < 1) {
        return 0
    }
    // declare count variable
    let count = 1

    // two pointers on same idx
    let p1 = 0, p2 = 1

    // move one pointer and compare the values each time, if different values, increment counter
    while (p1 < arr.length && p2 < arr.length) {
        if (arr[p1] == arr[p2]) p2++

    // move the first pointer to the second pointer location
        else if (arr[p1] != arr[p2]) {
            p1 = p2
            count++
            p2++
        }
    }
    return count
}

console.log(countUniqueValues([1,1,1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([1]))
console.log(countUniqueValues([-2,-1,-1,0,1]))