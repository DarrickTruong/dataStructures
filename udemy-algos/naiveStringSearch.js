let naiveStringSearch = (searchString, target) => {
    // loop searchString
    // loop target

    // count variable to return
    let count = 0

    //while loop 
    let s1 = 0
    let t1 = 0

    while(s1 < searchString.length) {
        
        if (searchString[s1] === target[t1]) t1++
        else {
            if (searchString[s1] === target[0]) {
                t1 = 1
            }
        }

        if (t1 === target.length) {
            count++
            t1=0
        }

        s1++
    }

    return count
}

console.log(naiveStringSearch("helloworldwoworld", "world"))