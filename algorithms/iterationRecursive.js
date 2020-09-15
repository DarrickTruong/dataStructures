// iSum(1) = 1                  => 1
// iSum(2) = 1 + 2              => 3
// iSum(3) = 1 + 2 + 3          => 6
// iSum(4) = 1 + 2 + 3 + 4      => 10
// iSum(5) = 1 + 2 + 3 + 4 + 5  => 15
// solve by iteration
function iSum(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}
console.log(iSum(5))
console.log(iSum(500))

// solve above by recursion
function iSum(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + iSum(n - 1)
    }
}
console.log(iSum(5))
console.log(iSum(500))



// iFactorial(1) = 1                  => 1
// iFactorial(2) = 2 * 1              => 2
// iFactorial(3) = 3 * 2 * 1          => 6
// iFactorial(4) = 4 * 3 * 2 * 1      => 24
// iFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120
// solve by iteration
function iFactorial(n) {
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product *= i
    }
    return product
}
console.log(iFactorial(5))

// solve above by recursion
function iFactorial(n) {
    if (n === 1) {
        return 1
    } else {
        return n * iFactorial(n - 1)
    }
}
console.log(iFactorial(5))



// iFibonacci(0) = 0           => 0
// iFibonacci(1) = 1           => 1
// iFibonacci(2) = 1           => 1
// iFibonacci(3) = 1 + 1       => 2
// iFibonacci(4) = 1 + 2       => 3
// iFibonacci(5) = 2 + 3       => 5
// iFibonacci(6) = 3 + 5       => 8
// solve by iteration
function iFibonacci(n) {
    let fib = [0, 1];
    for (let i = 0; i < n; i++) {
        fib.push(fib[0] + fib[1])
        fib.shift();
    }
    return fib[0]
}
console.log(iFibonacci(6))

// solve above by recursion
function rFibonacci(n) {
    if (n === 1) {
        return 1
    }
    else if (n === 0) {
        return 0
    } else {
        return rFibonacci(n - 1) + rFibonacci(n - 2)
    }
}
console.log(rFibonacci(6))


// var arr = [-90, -19, 0, 2, 12, 29, 33, 190, 320];
// rBS(arr, 5)              => false
// rBS(arr, 12)             => 4
// rBS(arr, 0)              => 2
// rBS(arr, 190)            => 7
// solve recursively
function findMidPoint(start, end) {
    return Math.floor((max + min) / 2)
}
function rBS(array, target, start, end) {
    if (start > end) {
        return false
    } else {
        midpoint = Math.floor((end + start) / 2)
        // console.log('midpoint', midpoint);
        if (array[midpoint] > target) {

            return rBS(array, target, start, midpoint - 1)
        }
        else if (array[midpoint] < target) {
            return rBS(array, target, midpoint + 1, end)
        } else {
            return midpoint
        }
    }
}
let arr = [-90, -19, 0, 2, 12, 29, 33, 190, 320];
console.log(rBS(arr, 12, 0, arr.length - 1))            //=> 4
console.log(rBS(arr, 0, 0, arr.length - 1))            //=> 2
console.log(rBS(arr, 190, 0, arr.length - 1))            //=> 7
console.log(rBS(arr, 5, 0, arr.length - 1))            //=> false

// var arr = [-90, -19, 0, 2, 12, 29, 33, 190, 320];
// iBS(arr, 5)              => false
// iBS(arr, 12)             => 4
// iBS(arr, 0)              => 2
// iBS(arr, 190)            => 7
// Solve with iteration

function iBS(array, target) {
    midpoint = Math.floor((array.length - 1 + 0) / 2);
    start = 0;
    end = array.length - 1;
    console.log(midpoint, start, end);
    while (start < end) {
        if (array[midpoint] < target) {
            start = midpoint + 1;
            midpoint = Math.floor((start + end) / 2);
            console.log(midpoint, start, end);
        }
        else if (array[midpoint] > target) {
            end = midpoint - 1;
            midpoint = Math.floor((start + end) / 2);
            console.log(midpoint, start, end);
        } else {
            return midpoint
        }
    }
    return false
}

var arr = [-90, -19, 0, 2, 12, 29, 33, 190, 320];
console.log(iBS(arr, 5))            //=> false
console.log(iBS(arr, 12))            //=> 4
console.log(iBS(arr, 0))            //=> 2
console.log(iBS(arr, 190))            //=> 7



