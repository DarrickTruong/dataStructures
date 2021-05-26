let flatten = (arr) => {
    // recursive
    // new arr variable to return
    // helper function

    let newArr = []

    function helper(arr1) {
        
        for (let i = 0; i<arr1.length; i++) {
            if (Array.isArray(arr1[i])){
                helper(arr1[i])
            } else {
                newArr.push(arr1[i])
            }
        }
    }
    helper(arr)
    return newArr
}

console.log(flatten([1, 2, 3, [4, 5] ]))// [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]