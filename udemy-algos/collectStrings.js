let collectStrings = (object) => {
    // recursive
    // return array
    // helper function?

    let newArr=[]

    function helper(obj) {
        // iterate object
        for (let key in object) {
            let val = obj[key]

            // handle object and string

            // if object
            if (typeof val === "object") {
                helper(val)
            }
            // if string
            else if (typeof val === "string") {
                newArr.push(val)
            }
        }
    }
    helper(object)


    return newArr
}