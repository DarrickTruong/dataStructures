/**290. Word Pattern
 * Given a pattern and a string str, find if str follows the same pattern.
 * 
 * Here follow means a full match, such that there is a bijection 
 * between a letter in pattern and a non-empty word in str.
 * 
 * Example 1:
 * 
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 * Example 2:
 * 
 * Input:pattern = "abba", str = "dog cat cat fish"
 * Output: false
 * Example 3:
 * 
 * Input: pattern = "aaaa", str = "dog cat cat dog"
 * Output: false
 * Example 4:
 * 
 * Input: pattern = "abba", str = "dog dog dog dog"
 * Output: false
 */

const wordPattern = (pattern, str) => {
    let dict = {};
    let dict2 = {}; // make one with words as keys, and one with letters as keys
    let str1 = str.split(" ");
    // console.log(str1);
    if (pattern.length != str1.length) { return false; }

    for (let i = 0; i < pattern.length; i++) {
        if (!(str1[i] in dict)) {
            dict[str1[i]] = pattern[i];
            if (!(pattern[i] in dict2)) {
                dict2[pattern[i]] = str1[i]
            } else {
                if (dict2[pattern[i]] != dict[str1]) {
                    return false
                }
            }
            
        }
        if (str1[i] in dict) {
            if (dict[str1[i]] != pattern[i]) {
                return false;
            }
        }
        // console.log("dict",  dict)
        // console.log("dict2", dict2)
    }
    return true;


}
console.log(wordPattern("abcabc", "dog cat cow dog cat cow")); // true
console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("abba", "dog cat cat fish")); // false
console.log(wordPattern("abba", "dog dog dog dog")); // false

// console.log(wordPattern("abba", "dog dog dog")); // false 
// that was an edge case I just missed

// we want each letter to match to one and only one word string
// it has nothing to do with the first letter of the word lol 

// so the whole word represents one letter in the pattern?
// yes 
// okay thanks for the hint