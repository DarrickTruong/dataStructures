var createDict = function (array) {
    //do you want to practice making a dictionary of how many of each in the given array? sure! let me see if i can do it
    let dict = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i] in dict) {
            dict[array[i]]++
        } else {
            dict[array[i]] = 1
        }
    }
    return dict;
};

// before running think about/remember how if statement work
/**if we do something like this
 * 
 * if(condition){
 *   // go here
 * } else  {
 *  // alternately go here 
 * }
 * 
 */
/**
 * so something like this 
 * 
 * for(let i = 1 ; i <= 10; i++) {  // this will print all numbers AND print I am over 5 if condition is met
 *  if(i >= 5) {
 *      print("I am over 5")
 * }
 * print(i);
 * 
 * }
 * // for loop above out put
 * // 1,2,3,4,over 5,5 over 5, 6, over 5, 7.....
 * 
 * 
 * for(let i = 1 ; i <= 10; i++) {  // this will only print I am over five if condition is met
 *  if(i >= 5) {
 *      print("I am over 5")
 *  } else {                        // if cond is not met it will print i
 *      print(i);
 *  }
 * 
 * }
 * // this for loop prints
 * // 1,2,3,4,over 5,over 5,over 5,over 5,over 5,
 * 
 * 
 */
//  console.log(createDict([1,2,1,3,2,1,4]));

/**771. Jewels and Stones
* You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
* Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
* 
* The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, 
* so "a" is considered a different type of stone from "A".
* 
* Example 1:
* Input: J = "aA", S = "aAAbbbb"
* Output: 3
* 
* Example 2:
* Input: J = "z", S = "ZZ"
* Output: 0
* Note:
* S and J will consist of letters and have length at most 50.
* The characters in J are distinct. 
*/
/**
 
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {

    // Darrick? lol talk out loud, do you understand the prompt? 
    // this is always the hardest part for me and i spend a lot of time on it 
    // i think so, so J represents the stones that are also jewels... okay i think i get it. 
    // so we want to return the total of number of stones that we have that are also jewels? 
    //  so im thinking we create a dictionary of the different jewels ? and 
    // then we iterate thru the S string and if the character matches one of the keys in our dictionary then we add 1 to that 
    // are we all gonna do it? 
    // sure I will do my own copy on the bottom, a little different 
    // then we can "present" at the end. i almost feel like we could open a chat somewhere to talk to each
    // other at the end
    // try to make comments to yourself and others as you flow though the code
    // i am down for the same plan, the chat from live share is open, i also have my slack open

    // are you going to use MAP, lia/ ritz? 
    // okay dope 
    // i'm going to use dict as you did above, my code will be similar to yours; 
    // i think the map is more efficient but i would have to look stuff up... imma start with the dict to see if i can get it right
    // i think we have similar strategies, but if you are more comfortable using map, do what you need to solve 
    // i'm just comfortable with it lol, go for what you are comfy with :)

    // create dictionary of jewels
    let jewelDic = {};
    for (let i = 0; i < J.length; i++) {
        jewelDic[J[i]] = 0;
    }
    // increment if stone is jewel
    for (let i = 0; i < S.length; i++) {
        if (S[i] in jewelDic) {

            jewelDic[S[i]] += 1;
        }
    }


    let sum = 0;
    for (key in jewelDic) {
        sum += jewelDic[key]
    }
    // okay this looks good :))
    return sum;
};

// example 1: 3
console.log(numJewelsInStones("aA", "aAAbbbb"));

// example 2: 0
console.log(numJewelsInStones("z", "ZZ"));


/**
 * // can i do this? 
        // right here... can i do this? 
        // this is really messy, with all the comments, lol Darrick find the chat
        // the VSLiveShare chat
        // yes since we are gaurnetee that the J has unique characters :)
        // oh! idk if you can do this with out a value........
        // should i pull some out?
    
    // hey Darrick you here
    // line 102, is wrong, the "key" is the iterator, we want the stone, :)))))), 
    // damn youre good 
    // also do you want to store 0? I guess it doesn't matter
    // i think 0 bc its not guaranteed that you have that stone/jewel right? 
    // correct, we don't ever need to access it, or change it, you can see
    //  with the rest of your code you only used the "in" property to look at the keys 
    // so i can instantiate the key without a value? i forget
    // wait wait wait, okay I see what you want to do with the other loops 
    // zero is a value as well, isn't it?

    // alternatively you can just iterate though the stones in S
    // if, it is a gem, add to the sum, we don't really NEED to increment 
    // it cuts a for loop out, but what you wrote in perfectly correct too
    // damn thats easier and better
    
    // the best practice is to get a working code and then go back and optimize
    // thanks ritz!
    // add up all stone jewels
    //  wait can you go back up to the jewelDic*/




var ritzJewels = function (J, S) {
    let sLen = S.length;    // easier reference of the lengths in the loops below
    let jLen = J.length;
    let dict = {};
    for (let i = 0; i < sLen; i++) {      // iterate through string S
        if (S[i] in dict) {               // create a dictionary of the # of each element
            dict[S[i]]++;
        } else { dict[S[i]] = 1; }
    }
    let ans = 0;
    for (let i = 0; i < jLen; i++) {      // iterate through string J 
        if (J[i] in dict) {               // if the element is in the dictionary
            ans += dict[J[i]];          // add that to the running total
        }
    }
    return ans;
};

// Runtime: 84 ms, faster than 55.62% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 37.4 MB, less than 32.43% of JavaScript online submissions for Jewels and Stones.

// // example 1: 3
// console.log(ritzJewels("aA", "aAAbbbb"));

// // example 2: 0
// console.log(ritzJewels("z", "ZZ"));
















const liaGem = (J, S) => {
    // double for looping
    //  itterate though all of your stones, cross checking with all the 
    // jems to see if there is a match, 
    let count = 0;
    for (let stone of S) {
        for (let jem of J) {
            if (stone == jem) {
                count++;
            }
        }
    }
    return count;
    /**
     * Runtime: 72 ms, faster than 93.25% of JavaScript online submissions for Jewels and Stones.
     * Memory Usage: 38.6 MB, less than 9.15% of JavaScript online submissions for Jewels and Stones.
     */
}
const liaGem2 = (J, S) => {
    // make a dict of all the stones in your hand where
    // key is the stone name, and val is the amount
    let myPocket = {};
    for (let stone of S) {
        if (stone in myPocket) {
            myPocket[stone]++;
        } else {
            myPocket[stone] = 1;
        }
    }
    // now that we have a dict named my pocket, 
    // I am going to check to see if the keys/unique stones of myPocket
    // are in fact jems, by using a built in function on strings
    // for(let key in dict){}
    let numOfGems = 0;
    for (let stone in myPocket) {
        if (J.indexOf(stone) != -1) { // this is kinda like an existence check
            numOfGems += myPocket[stone]; // so if it is a jem, I know how many were in my pocket, and can add to the count
        } else {
            // else I just did a log to print out 
            console.log("stone", stone, "is not a gem even though I have", myPocket[stone], "amount");
        }
    }
    return numOfGems;
    /**Runtime: 80 ms, faster than 71.66% of JavaScript online submissions for Jewels and Stones.
     * Memory Usage: 38.6 MB, less than 8.86% of JavaScript online submissions for Jewels and Stones.
     * 
     */
}