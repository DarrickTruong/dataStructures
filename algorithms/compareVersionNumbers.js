// Compare two version numbers version1 and version2.
// If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.

// You may assume that the version strings are non - empty and contain only digits and the.character.

// The . character does not represent a decimal point and is used to separate number sequences.

// For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second - level 
// revision of the second first - level revision.

// You may assume the default revision number for each level of a version number to be 0. For example, 
// version number 3.4 has a revision number of 3 and 4 for its first and second level revision number.Its third and fourth level revision number are both 0.


// Example 1:

// Input: version1 = "0.1", version2 = "1.1"
// Output: -1
// Example 2:

// Input: version1 = "1.0.1", version2 = "1"
// Output: 1
// Example 3:

// Input: version1 = "7.5.2.4", version2 = "7.5.3"
// Output: -1
// Example 4:

// Input: version1 = "1.01", version2 = "1.001"
// Output: 0
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”
// Example 5:

// Input: version1 = "1.0", version2 = "1.0.0"
// Output: 0
// Explanation: The first version number does not have a third level revision number, which means its third level revision number is default to "0"


function compareVersionNumbers(version1, version2) {
    // iterate thru each string comparing values at each index
    // return 1 if version1 > version2, return -1 if version2 > version1, otherwise return 0

    // let str1 = helper(version1);
    // let str2 = helper(version2);
    // while (str1.length != str2.length) {
    //     if (str1.length < str2.length) {
    //         str1+="0";
    //     }
    //     if (str2.length < str1.length) {
    //         str2+="0";
    //     }
    // }
    // console.log(str1);
    // console.log(str2);
// version 1
    // let one = parseInt(str1);
    // let two = parseInt(str2);
    // if (one > two) {
    //     return 1
    // } else if (one < two) {
    //     return -1
    // } else {
    //     return 0
    // }
// version 2
    // let greater = 0;
    // let i = 0;
    // while (str1 || str2) {
    //     if (str1[i] > str2[i]) {
    //         greater = 1;
    //         break;
    //     } else if (str1[i] < str2[i]) {
    //         greater = -1;
    //         break
    //     } else {
    //         greater = 0;
    //         i++;
    //     }
    // }

    // helper returns str without "." and leading 0's
    // function helper(version) {
    //     let str="";
    //     for (let i = 0; i < version.length; i++) {
    //         // console.log(version[i]);
    //         if (version[i] === ".") continue;
    //         else if (version[i] === "0") {
    //             if (version[i + 1] === "." || i===(version.length-1)) {
    //                 str += version[i];
    //             } else { continue }
    //         } else {
    //             str += version[i];
    //         }
    //     }
    //     return str
    // }

// version 3
    let one = version1.split(".");
    let two = version2.split(".");
    // one = helper(one)
    // two = helper(two)
    // console.log(one);
    // console.log(two);
    while (one.length != two.length) {
        if (one.length < two.length) {
            one.push("0")
        } else {
            two.push("0")
        }
    }
    // console.log(one);
    // console.log(two);
    let i = 0;
    while(i < one.length) {
        let int1 = parseInt(one[i]);
        let int2 = parseInt(two[i]);
        console.log(int1, int2);
        if (int1 > int2) {
            return 1
        } else if (int1 < int2) {
            return -1 
        } else { i++ }
    }
    return 0
}
// remove leading zeros
// no need bc of parseInt()
// function helper(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = (arr[i]*1).toString();
//     }
//     return arr
// }

// console.log(compareVersionNumbers(".1", "1.1")); // returns -1
// console.log(compareVersionNumbers("1.0.1", "1")); // returns 1
// console.log(compareVersionNumbers("7.5.2.4", "7.5.3")); // returns -1
// console.log(compareVersionNumbers("1.01", "1.001")); // returns 0
// console.log(compareVersionNumbers("1.0", "1.0.0")); // returns 0
// console.log(compareVersionNumbers("1.1", "1.10")); // returns -1
console.log(compareVersionNumbers("1.2", "1.10")); // returns -1







