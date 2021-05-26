

let someRecursive = (arr, callback) => {
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

    // base cases
    if (arr.length < 1) return false
    if (callback(arr[0]) === true) return true

    return someRecursive(arr.slice(1, arr.length), callback)
}

const isOdd = val => val % 2 !==0

console.log(someRecursive([1,2,3,4], isOdd))
console.log(someRecursive([2,4,5], isOdd))
console.log(someRecursive([2,4,6], isOdd))
console.log(someRecursive([2,4,6], val => val>10))






















// const isOdd = val => ((val%2) !=0 0) ? true:false;
// function someRecursive( arr, callback ) {
//     if ( arr.length === 0 ) return false;
//     if ( callback( arr[0] ) ) return true;
//     return someRecursive( arr.slice( 1 ), callback );

// }