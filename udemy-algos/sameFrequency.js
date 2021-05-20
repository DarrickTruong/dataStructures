
let sameFreq = (int, int2) => {
    // convert int to strings
    let str1 = int.toString()
    let str2 = int2.toString()

    // check if string lengths are equal
    if (str1.length != str2.length) {
        return false
    }

    // create object of char freq for str1
    let dict = {}
    for (let char of str1) {
        dict[char] = (dict[char] || 0) + 1
    }

    // iterate str2 and check, if exist, subtract from that value 
    for (let char of str2) {
        if (!dict[char]) {
            return false
        }
        dict[char]--
    }
    return true
}

console.log(sameFreq(182, 281))
console.log(sameFreq(34, 12))
console.log(sameFreq(3589578, 5879385))
console.log(sameFreq(22, 222))