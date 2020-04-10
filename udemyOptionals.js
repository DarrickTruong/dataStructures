// ********************** Frequency Counter *************************


// Write a function called sameFrequency. Given two integers, find out if the two numbers have the same frequency of digits. 

function sameFrequency( one, two ) {
    // check if string lengths are the same
    // create an object with the character freqencies of string one
    // iterate string two, each time a character exists, subtract from that value
    // return true or false
    one = one.toString();
    two = two.toString();
    if ( one.length != two.length ) {
        return false
    }
    // create object 
    let char = {};
    for ( let i = 0; i < one.length; i++ ) {
        if ( one[i] in char ) {
            char[one[i]]++;
        } else {
            char[one[i]] = 1;
        }
    }
    console.log( char );
    // reference string two and object
    for ( let letter of two ) {
        if ( letter in char ) {
            char[letter]--;
        } else {
            return false
        }
    }
    return true
}
console.log( sameFrequency( 182, 281 ) );
console.log( sameFrequency( 34, 13 ) );
console.log( sameFrequency( 3589578, 5879385 ) );






// ********************** Multiple Pointer *************************

// write a function that takes in multiple variables and checks if there are any duplicates passed in. 

function areThereDuplicates( a, b, c, d ) {
    // created a sorted array with the arguments
    // use multiple pointers to see if argument and the next index match. 
    let sorted = Array.from( arguments ).sort()
    let j = 1
    for ( let arg of sorted ) {
        if ( arg === sorted[j] ) {
            return true
        } else {
            j++
        }
    }
    return false
}

console.log( areThereDuplicates( "a", "d", "c", "b" ) );
console.log( areThereDuplicates( 1, 2, 2 ) );
console.log( areThereDuplicates( "a", "d", "c", "dd" ) );





// write a function called averagePair. given a sorted array of integers and a target average. determine if there is a pair of values in the array where the average of the pair equals the target average. there may be more than one pair that matches the average target

function averagePair( arr, avg ) {
    if ( arr.length < 1 ) {
        return false
    }
    let runner = 1;
    for ( let number of arr ) {
        let test = ( number + arr[number] ) / 2;
        if ( test === avg ) {
            return true
        } else {
            runner++
        }
    }
    return false
}

console.log( averagePair( [1, 2, 3], 2.5 ) );
console.log( averagePair( [1, 3, 3, 5, 6, 7, 10, 12, 19], 8 ) );
console.log( averagePair( [-1, 0, 3, 4, 5, 6], 4.1 ) );
console.log( averagePair( [], 4 ) );




// write a function called isSubsequence which takes two strings and checks whether the characters in the first string forms a subsequence of characters in th second string. in other words, the function should check whether the characters in the first string appear somewhere in the strong string, without their order changing. 

function isSubsequence( str1, str2 ) {
    // use multiple pointers
    // use one pointer on str1, and use one on str2, if they match increment both, no match, then move str2 pointer
    // return true or false
    let pointer1 = 0;
    let pointer2 = 0;
    while ( pointer1 < str1.length && pointer2 < str2.length ) {
        if ( str1[pointer1] === str2[pointer2] ) {
            pointer1++;
            pointer2++;
        } else {
            pointer2++
        }
    }
    if ( pointer1 === str1.length ) {
        return true
    } else {
        return false
    }
}
console.log( isSubsequence( 'hello', 'hello world' ) );
console.log( isSubsequence( 'sing', 'string' ) );
console.log( isSubsequence( 'abc', 'acb' ) );





// write a function called isConsequetiveSubsequence which takes two strings and checks whether the characters in the first string forms a consequetive subsequence of characters in th second string. in other words, the function should check whether the characters in the first string appear somewhere in the strong string, without their order changing. 

function isConsequetiveSubsequence( str1, str2 ) {
    // will use sliding window, 
    // create a temporary string variable of str1.length
    // then move the window
    let test = "";
    for ( let i = 0; i < str1.length; i++ ) {
        test += str2[i];
    }

    // check and move window
    for ( let i = str1.length; i < str2.length; i++ ) {
        if ( str1 === test ) {
            return true
        } else {
            test = str2.slice( i - str1.length, i );
        }
    }
    return false;
}
console.log( isConsequetiveSubsequence( 'hello', 'hello world' ) );
console.log( isConsequetiveSubsequence( 'sing', 'string' ) );
console.log( isConsequetiveSubsequence( 'abc', 'cababcbac' ) );




// given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function

function maxSubarraySum( arr, num ) {
    // use sliding window
    // set a maxSum variable
    if ( arr.length < 1 || num > arr.length ) {
        return null
    }
    let maxSum = -Infinity;
    let tempSum = 0;
    for ( let i = 0; i < num; i++ ) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    // Move window
    for ( let i = num; i < arr.length; i++ ) {
        tempSum = tempSum + arr[i] - arr[i - num];
        if ( tempSum > maxSum ) {
            maxSum = tempSum;
        }
    }
    return maxSum
}
console.log( maxSubarraySum( [100, 200, 300, 400], 2 ) );
console.log( maxSubarraySum( [1, 4, 2, 10, 23, 3, 1, 0, 20], 4 ) );
console.log( maxSubarraySum( [-3, 4, 0, -2, 6, -1], 2 ) );
console.log( maxSubarraySum( [2, 3], 3 ) );




// write a function called minSubArrayLen which accepts two parameters, an array of positive integers and a positive integer. return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed too the function. if none, return 0

function minSubArrayLen( arr, num ) {
    // use a count variable
    // use a while loop inside a for loop
    if ( arr.length < 1 ) {
        return 0
    }
    let count = 0;

    for ( let i = 0; i < arr.length; i++ ) {
        let sum = arr[i];
        let runner = i + 1;
        if ( sum >= num ) {
            return count = 1;
        }

        while ( runner < arr.length ) {
            sum += arr[runner];
            // console.log(arr[i], arr[runner], sum);
            runner++

            if ( sum >= num ) {
                let tempCount = runner - i;
                if ( tempCount < count || count === 0 ) {
                    count = tempCount;
                }
                break
            }
        }
        sum = 0;
    }
    return count
}

console.log( minSubArrayLen( [2, 3, 1, 2, 4, 3], 7 ) );
console.log( minSubArrayLen( [2, 1, 6, 5, 4], 9 ) );
console.log( minSubArrayLen( [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52 ) );
console.log( minSubArrayLen( [1, 4, 16, 22, 5, 7, 8, 9, 10], 39 ) );
console.log( minSubArrayLen( [1, 4, 16, 22, 5, 7, 8, 9, 10], 55 ) );
console.log( minSubArrayLen( [4, 3, 3, 8, 1, 2, 3], 11 ) );
console.log( minSubArrayLen( [1, 4, 16, 22, 5, 7, 8, 9, 10], 95 ) );



// write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters

function findLongestSubstring( string ) {
    // use sliding window and frequency counter (create object with characters)
    // return count
    if ( string.length < 1 ) {
        return 0
    }
    let count = 0;
    let charDict = {};
    let start = 0;

    for ( let i = 0; i < string.length; i++ ) {
        let char = string[i];

        if ( charDict[char] ) {
            start = Math.max( start, charDict[char] );
        }
        count = Math.max( count, i - start + 1 );
        charDict[char] = i + 1;
    }

    return count;
}

console.log( findLongestSubstring( "longestsubstring" ) );
console.log( findLongestSubstring( "thisishowwedoit" ) );
console.log( findLongestSubstring( "" ) );
console.log( findLongestSubstring( "cac" ) );
console.log( findLongestSubstring( "rithmschool" ) );
console.log( findLongestSubstring( "thisisawesome" ) );
console.log( findLongestSubstring( "thecatinthehat" ) );
console.log( findLongestSubstring( "bbbb" ) );


// ******************* Recursion *********************

// Write a recursion function called reverse which accepts a string and returns a new string in reverse

function reverse( string ) {
    let i = string.length - 1;
    let answer = "";

    function helper( word, index ) {
        console.log( "inhelper", index )
        if ( index < 0 ) {
            return answer
        }
        while ( index >= 0 ) {
            answer += word[index];
            console.log( word[index] );
            index--;
            console.log( "index", index );
            return helper( word, index );
        }
    }

    return helper( string, i );
}
console.log( reverse( "awesome" ) );
console.log( reverse( "rithmschool" ) );

function reverse( str ) {
    if ( str.length <= 1 ) return str;
    return reverse( str.slice( 1 ) ) + str[0];
}
console.log( reverse( "awesome" ) );
console.log( reverse( "rithmschool" ) );


// write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). otherwise it returns false

function isPalindrome( string ) {
    if ( string.length <= 1 ) return true;
    // console.log(string.charAt(0), string.charAt(string.length-1));
    if ( string.charAt( 0 ) === string.charAt( string.length - 1 ) ) {
        // console.log(string.slice(1, (string.length-1)));
        return isPalindrome( string.slice( 1, ( string.length - 1 ) ) );
    } else {
        return false
    }
}

console.log( isPalindrome( "tacocat" ) );
console.log( isPalindrome( "123321" ) );
console.log( isPalindrome( 'awesome' ) ); // false
console.log( isPalindrome( 'foobar' ) ); // false
console.log( isPalindrome( 'tacocat' ) ); // true
console.log( isPalindrome( 'amanaplanacanalpanama' ) ); // true
console.log( isPalindrome( 'amanaplanacanalpandemonium' ) ); // false


// write a recurisve function called someRecursive which accepts an array an a callback. the function returns true if a single value in the array returns true when passed to the callback. otherwise it returns false

const isOdd = val => ( ( val % 2 ) != 0 ) ? true : false;
function someRecursive( arr, callback ) {
    if ( arr.length === 0 ) return false;
    if ( callback( arr[0] ) ) return true;
    return someRecursive( arr.slice( 1 ), callback );

}
console.log( someRecursive( [4, 6, 8] ), val => val > 10 );
console.log( someRecursive( [1, 2, 3, 4] ), isOdd( val ) );
console.log( someRecursive( [4, 6, 8, 9] ), isOdd );
console.log( someRecursive( [4, 6, 8] ), isOdd );


// write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened 

function flatten( arr ) {
    let newArr = [];

    for ( let i = 0; i < arr.length; i++ ) {
        if ( Array.isArray( arr[i] ) ) {
            newArr = newArr.concat( flatten( arr[i] ) );
        } else {
            newArr.push( arr[i] );
        }
    }
    return newArr;
}
console.log( flatten( [1, 2, 3, [4, 5]] ) ); // [1, 2, 3, 4, 5]
console.log( flatten( [1, [2, [3, 4], [[5]]]] ) ); // [1, 2, 3, 4, 5]
console.log( flatten( [[1], [2], [3]] ) ); // [1,2,3]
console.log( flatten( [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]] ) ); // [1,2,3


// write a recursion function called capitalizeFirst. given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst( arr ) {
    if ( arr.length === 0 ) {
        return
    } else {
        console.log( arr );
        arr[0] = arr[0].charAt( 0 ).toUpperCase() + arr[0].slice( 1 );
        capitalizeFirst( arr.slice( 1 ) );
    }
    return arr
}
console.log( capitalizeFirst( ['car', 'taco', 'banana'] ) ); // ['Car','Taco','Banana']

function capitalizeFirst( array ) {
    if ( array.length === 1 ) {
        return [array[0][0].toUpperCase() + array[0].substr( 1 )];
    }

    const res = capitalizeFirst( array.slice( 0, -1 ) );
    console.log( 'first', array.slice( 0, -1 ) );

    const string = array.slice( array.length - 1 )[0][0].toUpperCase() + array.slice( array.length - 1 )[0].substr( 1 );
    res.push( string );
    console.log( 'after', res );

    return res;
}
console.log( capitalizeFirst( ['car', 'taco', 'banana'] ) ); // ['Car','Taco','Banana']


// write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects. 

const isPlainObject = function ( obj ) {
    return Object.prototype.toString.call( obj ) === '[object Object]';
}

function nestedEvenSum( object1 ) {
    let sum = 0;
    function helper( object2 ) {
        for ( let key in object2 ) {
            if ( object2[key] % 2 === 0 ) {
                sum += object2[key];
            }
            if ( isPlainObject( object2[key] ) ) {
                helper( object2[key] )
            }
        }
    }
    helper(object1)
    return sum;
}
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10