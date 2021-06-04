let capitalizeWords = (arr) => {
    // recursive

    // basecase
    // when arr has one element, return new array with element capitalized
    if( arr.length === 1 ) {
        return [arr[0].toUpperCase()]
    }

    let result = capitalizeWords(arr.slice(0, arr.length-1))

    let word = arr[arr.length - 1].toUpperCase()
    result.push(word)

    return result
}