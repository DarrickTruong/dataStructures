// ********************** Frequency Counter *************************



// Write a function called "same", which accepts two arrays. 
// the function should return true if every value in the array 
// has it's corresponding value squared in the second array. 
// The frequency of values must be the same. 

function same( arr1, arr2 ) {
    if ( arr1.length != arr2.length ) {
        return false
    }

    let arr1Dict = {};
    // create object with frequency of squared values
    for ( let num of arr1 ) {
        if ( arr1Dict[Math.pow( num, 2 )] > 0 ) {
            arr1Dict[Math.pow( num, 2 )]++
        } else {
            arr1Dict[Math.pow( num, 2 )] = 1
        }
    }
    // console.log(arr1Dict);
    // check object to see if arr2 values are in object
    for ( let num of arr2 ) {
        if ( !arr1Dict[num] ) {
            return false;
        } else {
            arr1Dict[num]--;
        }
    }
    // check if frequencies match
    // for ( let num in arr1Dict ) {
    //     if ( arr1Dict[num] != 0 ) {
    //         return false
    //     }
    // }
    return true
}
console.log( same( [1, 2, 3], [4, 1, 9] ) );
console.log( same( [1, 2, 3], [1, 9] ) );
console.log( same( [1, 2, 3], [4, 4, 9] ) );



// Write a function called "anagram", to determine if the second string is an anagram of the first. An anagram is a word or phrase that is formed by rearranging the letters of another. Must include same characters and same frequency 
function anagram( str1, str2 ) {
    // check is strings are equal length
    // create object with character frequency from str1 
    // loop thru str2 and reference object to match characters and frequency
    // return true or false
    if ( str1.length != str2.length ) {
        return false
    }

    let charDict = {};
    for ( let char of str1 ) {
        // check if char key in object
        if ( charDict[char] > 0 ) {
            charDict[char]++;
        } else {
            charDict[char] = 1;
        }
    }
    console.log( charDict )
    for ( let char of str2 ) {
        // check if char in object
        if ( !charDict[char] ) {
            return false
        } else {
            charDict[char]--;
        }
    }
    return true
}
console.log( anagram( " ", " " ) );
console.log( anagram( "aaz", "zza" ) );
console.log( anagram( "arc", "car" ) );
console.log( anagram( "qwerty", "ytreqw" ) );
console.log( anagram( "timetwisttext", "texttwisttime" ) );

for ( let i = 0; i < 10; i++ ) {
    console.log( i * 1.33 )
}





// ********************** Multiple Pointers *************************



// Write a function called "sumZero" which accepts a sorted array of integers. the function should find the first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair does not exist 
function sumZero( arr ) {
    // two pointers on each end
    // check if the sum of the two numbers is positive or negative. if positive move pointer on the right, if negative more the pointer on the left
    // return arr or undefined
    let smallInd = 0;
    let largeInd = arr.length - 1;
    while ( smallInd < largeInd ) {
        let sum = arr[smallInd] + arr[largeInd];
        if ( sum > 0 ) {
            largeInd--;
        } else if ( sum < 0 ) {
            smallInd++;
        } else {
            return [arr[smallInd], arr[largeInd]]
        }
    }
    return undefined
}
console.log( sumZero( [-3, -1, 0, 1, 2] ) );
console.log( sumZero( [-3, -1, 0, 2, 4] ) );
console.log( sumZero( [-4, -3, -2, 0, 1] ) );
console.log( sumZero( [-4, -3, -2, -1, 0, 1, 2] ) );
console.log( sumZero( [-4, -3, -2, -1, 0, 5, 6, 7] ) );



function countUnique( arr ) {
    // two pointers at the beginning. one moves forward to net index, check to see if the value if the same with the other index
    // return counter + 1
    if ( arr.length < 1 ) {
        return 0
    }
    let count = 0;
    let runner = 1;
    for ( runner; runner < arr.length; runner++ ) {
        // if unique number, move count forward
        if ( arr[count] != arr[runner] ) {
            count++;
            arr[count] = arr[runner]
        }

    }
    return count + 1;
}

console.log( countUnique( [1, 1, 1, 1, 2] ) );
console.log( countUnique( [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] ) );
console.log( countUnique( [] ) );
console.log( countUnique( [-2, -1, -1, 0, 1] ) );






// ********************** Sliding Window *************************



// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elemenets in the array.

function maxSubarraySum(arr,n) {
    // need a maxSum and a tempSum variable
    // create the first maxSum with a for loop of n iterations
    // use the sliding window to iterate throw the loop one time, adding one the next value and subtracting the first value of the window. 
    // make sure not to run out loop outside the arr (arr.length - n)
    // What if negative integers?
    // what if empty arr?
    // return maxSum
    if (arr.length < 1 || arr.length < n) {
        return null
    }

    let maxSum = -Infinity;
    let tempSum = 0;
    // set maxSum
    for (let i=0; i < n; i++) {
        tempSum += arr[i];
    }
    maxSum = Math.max(maxSum, tempSum);
    // sliding window 
    for(let i = n; i < arr.length ; i++){
        tempSum = tempSum + arr[i] - arr[i-n];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}
console.log(maxSubarraySum([1,2,5,2,8,1,5],2));
console.log(maxSubarraySum([1,2,5,2,8,1,5],4));
console.log(maxSubarraySum([4,2,1,6],1));
console.log(maxSubarraySum([4,2,1,6,2],4));
console.log(maxSubarraySum([],4));







// ********************** Divide and Conquer *************************






// ************************** Recursion **********************************

// write a function called power which accepts a base and an exponent. the function should return the power of the base to the exponent. this function should mimic the functionality of Math.pow() do not worry about negative bases and exponents

function power(base, exponent) {
    if (exponent === 0) return 1;
    exponent--;
    return (base * power(base, exponent));
}

console.log(power(2, 3));
console.log(power(5, 2));
console.log(power(10, 3));



// write a function factorial which accepts a number and returns the factorial of that number. a factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) is equal to 24, because 4*3*2*1 equals 24. factorial zero (0!) is always 1. 

function factorial(number) {
    if (number === 0) return 1;
    return (number * factorial(number-1));
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7))



//  write a function called productOfArray which takes an array of numbers and returns the product of them all.

function productOfArray(arr) {
    let product = 1;

    function helper(nums) {
        if (nums.length < 1){
            return
        }
        // console.log(nums);
        product *= nums[0];

        let numbers = nums.splice(1);
        helper(numbers);
    }
    helper(arr);
    return product;
}
console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,2,3,10]));



// write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

function recursiveRange(number) {
    let total = 0;
    function helper(add){
        if (add > number) {
            return
        }
        total += add
        helper(add+1)
    }
    helper(1);
    return total
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));

function recursiveRange(number) {
    function helper(add){
        if (add === number) {
            return number
        }
        return add + helper(add+1)
    }
    return helper(1)
}
console.log(recursiveRange(6));
console.log(recursiveRange(10));


// recursive fibonacci. write a recursive function called fib which accepts a number and returns the nth number in the fibonacci sequence. recall that the fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8 which starts with 1 and 1 and where every number thereafter is equal to the sum of the previous two numbers
function fib(nth) {
    if (nth === 0) return 0;
    if (nth === 1) return 1;
    return fib(nth-1) + fib(nth-2)
}
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
