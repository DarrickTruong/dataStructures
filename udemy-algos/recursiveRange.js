let recursiveRange = (number) => {

    if (number === 0) return 0

    return number + recursiveRange(number - 1)
}

console.log(recursiveRange(6))
console.log(recursiveRange(10))


let recursiveRangeWithHelper = (number) => {
    let addition = 0

    function helper(num) {
        if (num === 0) {
            return
        }

        addition += num

        helper(num - 1)
    }

    helper(number)
    return addition
}

console.log(recursiveRangeWithHelper(6))
console.log(recursiveRangeWithHelper(10))