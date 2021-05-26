let reverse = (string1) => {

    // recursive
    // base case
    if (string1.length <= 1) {
        return string1[0]
    }

    // console.log(string1.length)
    return string1[string1.length-1].concat( reverse( string1.substring(0, string1.length-1) ) )
}

let string = "hello"

console.log(reverse("awesome"))
console.log(reverse("rithmschool"))


let reverseWithHelper = (string2) => {

    // recursive
    // string variable
    let revStr = ""
    // helper function

    function helper(str) {

        // base case
        if (str.length < 1) return

        // concat to string variable
        revStr += str[str.length-1]

        // recursive call
        helper(str.substring(0, str.length-1))
    }

    helper(string2)
    return revStr
}

console.log(reverseWithHelper("awesome"))
console.log(reverseWithHelper("rithmschool"))