let binarySearch = (arr, target) => {

    //while loop
    
    // if target < val search first half of arr
    // if target > val search second half
    // if target === val
    let left = 0
    let right = arr.length-1
    

    while(left <= right) {
        let mid = Math.floor((left+right)/2)
        // console.log("left= "+left + " right= " + right + " mid= " + mid)
        if (target < arr[mid]) {
            right = mid - 1
        } else if (target > arr[mid]) {
            left = mid + 1
        } else if (target === arr[mid]) {
            return mid
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5], 4))
