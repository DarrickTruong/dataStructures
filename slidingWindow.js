let maxSubArraySum = (arr, num) => {

    if(arr.length < 1) return null

    // declare sum variables
    let maxSum = 0
    let tempSum = 0

    // get maxSum by looping num times
    for (let i = 0; i<num; i++) {
        maxSum += arr[i]
    }

    // iterate the rest of the arr adding the next number and subtracting the first value and store max
    tempSum = maxSum
    for (let i = num; i<arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3))