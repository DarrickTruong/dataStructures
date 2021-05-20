
let averagePair = (arr, target) => {

    // // edge
    // if (arr.length === 0) return false

    // // multiple pointers
    // let p1 = 0, p2 = arr.length-1

    // // while loop 
    // while (p1 < p2) {

    //     let avg = (arr[p1]+arr[p2])/2

    //     // if avg of pair equals target
    //     if (avg === target) return true

    //     // if avg is less than target, increment p1
    //     else if (avg < target) p1++

    //     // if avg is greater than targer, decrement p2
    //     else if (avg > target) p2--
    // }

    // // if no pair avg equal target
    // return false


    if (arr.length < 1) {
        return false
    }
    // let runner = 1;
    for (let number of arr) {
        let test = (number + arr[number]) / 2;
        // console.log(runner)
        // console.log(arr[number]+ "\n")
        console.log(test)
        if (test === target) {
            return true
        }
        // else {
        //     runner++
        // }
    }
    return false
}

console.log(averagePair([1, 2, 3], 2.5))
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
console.log(averagePair([], 4))
