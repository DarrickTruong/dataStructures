let isSubsequence = (str1, str2) => {
    //multiple pointers
    let pointer1=0, pointer2=0
    // loop while pointer1 < str1.length && pointer2 < str2.length
    while(pointer1<str1.length && pointer2<str2.length) {
        if (str1[pointer1] === str2[pointer2]){
            pointer1++
            pointer2++
        } else {
            pointer2++
        }
    }

    if (pointer1 === str1.length) {
        return true
    } else {
        return false
    }


}

console.log(isSubsequence('hel', 'wehello'))
console.log(isSubsequence('sing', 'string'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));