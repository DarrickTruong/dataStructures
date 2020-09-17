/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    if (!s || typeof s != "string") {
        return 0;
    }
    let count = 0;
    let index = s.length-1;  
    for (let i = index; i >=0; i--) {
        if (s[i] === " " && count === 0) {
            continue;
        } 
        if (s[i] === " ") {
            break;
        } else {
            count++;
        }
    }
    return count;
};

console.log(lengthOfLastWord("Hello World"), "should be 5")