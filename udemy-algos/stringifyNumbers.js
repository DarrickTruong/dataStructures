// let stringifyNumbers = (object) => {

//     let newObject = {}
//     // recursive

//     // basecase

//     for (let key in object) {
//         let val = object[key]

//         if (typeof val === "object" && !Array.isArray(val)) {
//             newObject[key] = stringifyNumbers(val)
//         } else if (typeof val === "number") {
//             newObject[key] = val.toString()
//         } else if (Array.isArray(val)) {
//             let array = []
//             for (let i = 0; i < val.length; i++) {
//                 if (typeof val[i] === "number") {
//                     array[i] = val[i].toString()
//                 } else {
//                     array[i] = val[i]
//                 }
//             }
//             newObject[key] = array
//         } else {
//             newObject[key] = val
//         }
//     }

//     return newObject

let stringifyNumbers = (object) => {
    // recursive
    // iterate object
    // handle object, arrays, numbers, all others

    let newObj = {}

    // iterate object
    for (let key in object) {
        let val = object[key]

        // if object
        if (typeof val === "object" && !Array.isArray(val)) {
            newObj[key] = stringifyNumbers(val)
        }
        // if array
        else if (Array.isArray(val)) {
            let newArr = []

            // iterate arr
            for (let value of val) {
                // int, other

                // if number
                if (typeof value === "number") {
                    newArr.push(value.toString())
                }
                // all other data types
                else {
                    newArr.push(value)
                }
            }
            newObj[key] = newArr
        }
        // if number, convert to string
        else if (typeof val === "number") {
            newObj[key] = val.toString()
        }
        // all other data types
        else {
            newObj[key] = val
        }
    }

    return newObj
}