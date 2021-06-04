let capitalizeFirst = (arr) => {
    // recursive

    // basecase
    if (arr.length === 1) {
        // first [0] is 0 index, second [0] is first char of string
        return [arr[0][0].toUpperCase() + arr[0].slice(1)]
    }

    // when basecase is reached, result is an array with one element
    let result = capitalizeFirst(arr.slice(0, arr.length - 1))

    // last element in the array
    let string = arr[arr.length - 1][0].toUpperCase() + arr[arr.length - 1].slice(1)

    result.push(string)

    return result


}