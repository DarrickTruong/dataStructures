// ********************** Frequency Counter *************************


// Write a function called sameFrequency. Given two integers, find out if the two numbers have the same frequency of digits. 

function sameFrequency(one, two) {
    // check if string lengths are the same
    // create an object with the character freqencies of string one
    // iterate string two, each time a character exists, subtract from that value
    // return true or false
    one = one.toString();
    two = two.toString();
    if (one.length != two.length) {
        return false
    }
    // create object 
    let char = {};
    for (let i=0; i < one.length; i++) {
        if (one[i] in char) {
            char[one[i]]++;
        } else {
            char[one[i]] = 1;
        }
    }
    console.log(char);
    // reference string two and object
    for (let letter of two) {
        if (letter in char) {
            char[letter]--;
        } else {
            return false
        }
    }
    return true
}
console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 13));
console.log(sameFrequency(3589578, 5879385));






// ********************** Multiple Pointer *************************

// write a function that takes in multiple variables and checks if there are any duplicates passed in. 

function areThereDuplicates(a, b, c, d) {
    // created a sorted array with the arguments
    // use multiple pointers to see if argument and the next index match. 
    let sorted = Array.from(arguments).sort()
    let j = 1
    for (let arg of sorted) {
        if (arg === sorted[j]) {
            return true
        } else {
            j++ 
        }
    }
    return false
}

console.log(areThereDuplicates("a", "d", "c", "b"));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "d", "c", "dd"));





// write a function called averagePair. given a sorted array of integers and a target average. determine if there is a pair of values in the array where the average of the pair equals the target average. there may be more than one pair that matches the average target

function averagePair(arr, avg) {
    if (arr.length < 1) {
        return false
    }
    let runner = 1;
    for (let number of arr) {
        let test = (number + arr[number])/2;
        if (test === avg) {
            return true
        } else {
            runner++
        }
    }
    return false
}

console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([], 4));




// write a function called isSubsequence which takes two strings and checks whether the characters in the first string forms a subsequence of characters in th second string. in other words, the function should check whether the characters in the first string appear somewhere in the strong string, without their order changing. 

function isSubsequence(str1, str2){
    // use multiple pointers
    // use one pointer on str1, and use one on str2, if they match increment both, no match, then move str2 pointer
    // return true or false
    let pointer1 = 0; 
    let pointer2 = 0;
    while(pointer1 < str1.length && pointer2 < str2.length) {
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++;
            pointer2++;
        } else {
            pointer2++
        }
    }
    if (pointer1 === str1.length) {
        return true
    } else {
        return false
    }
}
console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'string'));
console.log(isSubsequence('abc', 'acb'));





// write a function called isConsequetiveSubsequence which takes two strings and checks whether the characters in the first string forms a consequetive subsequence of characters in th second string. in other words, the function should check whether the characters in the first string appear somewhere in the strong string, without their order changing. 

function isConsequetiveSubsequence(str1, str2) {
    // will use sliding window, 
    // create a temporary string variable of str1.length
    // then move the window
    let test = "";
    for (let i=0; i <str1.length; i++) {
        test += str2[i];
    }

    // check and move window
    for (let i=str1.length; i < str2.length; i++) {
        if (str1 === test) {
            return true
        } else { 
            test = str2.slice(i-str1.length, i);
        }
    }
    return false;
}
console.log(isConsequetiveSubsequence('hello', 'hello world'));
console.log(isConsequetiveSubsequence('sing', 'string'));
console.log(isConsequetiveSubsequence('abc', 'cababcbac'));




// given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function

function maxSubarraySum(arr, num) {
    // use sliding window
    // set a maxSum variable
    if (arr.length <1 || num > arr.length) {
        return null
    }
    let maxSum = -Infinity;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    // Move window
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i-num];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum
}
console.log(maxSubarraySum([100,200,300,400], 2));
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));
console.log(maxSubarraySum([2,3], 3));




// write a function called minSubArrayLen which accepts two parameters, an array of positive integers and a positive integer. return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed too the function. if none, return 0

function minSubArrayLen(arr, num) {
    // use a count variable
    // use a while loop inside a for loop
    if (arr.length < 1) {
        return 0
    }
    let sum = 0;
    let runner = 1;
    for (let i=0; i < arr.length; i++) {
        sum += arr[runner]
        if (sum >= num) {
            count = runner - i;
            runner = i + 1;
        } 
    }
}

