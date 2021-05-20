let areThereDuplicates = (...args) => {
    // create a sorted array of the arguments
    let sorted = args.sort()


    // use multiple pointers to see if there are any duplicates
    let i = 1
    for (let arg of sorted) {
        if (sorted[i] === arg) {
            return true
        }
        i++
    }

    // return true or false
    return false
}

// console.log(areThereDuplicates(1,2,3))
// console.log(areThereDuplicates(1,2,2))
// console.log(areThereDuplicates('a', 'b', 'c', 'a'))

let duplicates = (...args) => {
    return new Set(args).size != args.length
}

console.log(duplicates(1,2,3))
console.log(duplicates(1,2,2))
console.log(duplicates('a', 'b', 'c', 'a'))