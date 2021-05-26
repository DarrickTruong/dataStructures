let productOfArray = (array) => {

    // recursive
    // base case
    if (array.length === 1) {
        return array[0]
    }
    return array[0] * productOfArray(array.slice(1))
}

console.log(productOfArray([1,2,3]))
console.log(productOfArray([1,2,3,10]))


let productOfArrayWithHelper = (array) => {

    let product = 1

    function helper(nums) {
        if (nums.length <= 0) {
            return
        }
        product *= nums[0]

        helper(nums.slice(1))
    }

    helper(array)
    return product
}

console.log(productOfArrayWithHelper([1,2,3]))
console.log(productOfArrayWithHelper([1,2,3,10]))