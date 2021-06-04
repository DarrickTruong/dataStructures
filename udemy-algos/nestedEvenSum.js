let nestedEvenSum = (object) => {

    // recursive

    // base cases

    // need sum var to return
    let sum = 0

    // use helper function

    function helper(obj) {
        for (let key in obj) {
            console.log(obj)

            let val = obj[key]

            // val is an object, call helper function with val object
            if (typeof val === "object") {
                helper(val)
            } else {
                if (val % 2 ===0) {
                    sum += val
                }
            }
        }
    }

    helper(object)
    return sum

}

let object = {
    a: "hello",
    b: "ho"
}

nestedEvenSum(object)