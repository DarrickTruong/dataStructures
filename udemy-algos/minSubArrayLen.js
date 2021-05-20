let minSubArrayLen = (arr, sum) =>{
    // sliding window
    // minimum subArray.length where subArraySum >= sum
    
    // subArraySum variable, count variable
    
    let count = 0
    let subArraySum = 0
    // find out if subarraysum >= sum
    for (let i=0; i<arr.length; i++){
        // set subArraySum and count
        subArraySum = arr[i]
        if (subArraySum >= sum) {
            return 1
        }

        let runner = i+1

        while (runner < arr.length) {
            subArraySum += arr[runner]
            runner++
            if (subArraySum >= sum) {
                let tempCounter = runner-i
                if (count === 0) {
                    count = tempCounter
                } else if (tempCounter<count) {
                    count = tempCounter
                }
                break
            }
        }


    }
    // return 0 if nothing greater than sum
    return count
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7))
console.log(minSubArrayLen([2,1,6,5,4], 9))
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52))
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39))
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55))
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11))
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95))


