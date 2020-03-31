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