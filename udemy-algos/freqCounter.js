// write a function called same, which accepts two arrays. 
// the function should return true if every value in the 
// array has it's corresponding value squared in the second
// array. the frequency of values must be the same

let same = (arr1, arr2) => {
    // check edge case, equal lengths
    if (arr1.length != arr2.length) {
        return false
    }

    // create object to check against
    let object1 = {}

    // loop through first arr to populate object
    for (num of arr1) {
        // if (object1[num]) object1[num]++
        // object1[num] = 1
        object1[num] = (object1[num] || 0) + 1
    }

    // loop through second arr to check against the object
    for (num of arr2) {
        if (object1.hasOwnProperty(Math.sqrt(num))) {
            object1[Math.sqrt(num)]--
        }
    }
    // console.log(Object.values(object1))
    // return true or false
    for (num of Object.values(object1)) {
        if (num != 0) {
            return false
        }
    }

    return true
}

// console.log(same([1, 2, 3], [4, 1, 9])) //O(3n)
// console.log(same([1, 2, 3], [1, 9]))
// console.log(same([1, 2, 1], [4, 4, 1]))


let anagram = (str1, str2) => {
    //check edge cases, str lengths
    if (str1.length !== str2.length) {
        return false
    }
    
    // create object to compare
    let object1 = {}
    // iterate through str to popular object
    for (let char of str1) {
        object1[char] = (object1[char] || 0) + 1
    }

    // iterate second str to compare to object
    for (let char of str2) {
        if (!object1[char]) {
            return false
        }
        object1[char]--
    }
    
    // return true or false
    return true
}

console.log(anagram('', ''))
console.log(anagram('aaz', 'zza'))
console.log(anagram('anagram', 'nagaram'))
console.log(anagram('rat', 'car'))
console.log(anagram('awesome', 'awesom'))
console.log(anagram('qeywrt', 'qwerty'))
console.log(anagram('texttwisttime', 'timetwisttext'))