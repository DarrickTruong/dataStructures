let maxSubArraySum = (arr, num) => {

    // sliding window

    // edge
    if (num > arr.length) {
        return null
    }

    // max variable
    
    // Move window - iterate array add next number and subtract first number
    let total=0
    for (let i = 0; i<num; i++) {
        total += arr[i]
    }
    let max = total

    for (let i = num; i<arr.length; i++) {
        // add next num
        total += arr[i]
        // subtract first num
        total -= arr[i-num]

        if (total > max) {
            max = total
        }
    }

    return max
}

console.log(maxSubArraySum([100,200,300,400], 2))
console.log(maxSubArraySum([1,4,2,10,23,3,1,0,20], 4))
console.log(maxSubArraySum([-3,4,0,-2,6,-1], 2))
console.log(maxSubArraySum([3,-2,7,-4,1,-1,4,-2,1], 2))
console.log(maxSubArraySum([2,3], 3))