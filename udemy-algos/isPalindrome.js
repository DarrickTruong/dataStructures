let isPalindrome = (str) => {
    // recursive
    // base case

    // console.log(`length ${str.length}`)
    if (str.length <= 1) {
        return true
    }


    if (str[0] === str[str.length-1]){
        return isPalindrome(str.substring(1, str.length-1))
    } else {
        return false
    }
}

console.log(isPalindrome("awesome"))
console.log(isPalindrome("foodbar"))
console.log(isPalindrome("tacocat"))
console.log(isPalindrome("amanaplanacanalpanama"))
console.log(isPalindrome("amanaplanacanalpandemonium"))

// console.log("yo".substring(1,"yo".length-1).length)
// console.log("y".substring(1,"yo".length-1))

