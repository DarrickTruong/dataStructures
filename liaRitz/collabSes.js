/**
 * okay Darrick? OKAY
 * 
 * cool so let's start with a few questions
 * 
 * do you remember how to access an element in an array inside a for loop?
 * 
 * do you remember how to access the index of a single element in side of a for loop?
 * 
 * yes yes
 * 
 * cool, so you could do a quick sum for loop over an array
 * 
 * you want me to add up all the numbers in that array?
 * yes
 */
let example = [1, 1, 1, 1, 2];
function addNums(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}
// console.log(addNums(example));
console.log("did I run?");

/**
 * cool :) I like the use of sum starting with ex[0]
 * and starting the for loop at 1
 * 
 * :P okay, so just as a note, the parameter 
 * example(the one after the word addNums()) doesn't have to
 * match YES! :) 
 * 
 * so you remember the .length attribute, what does it do again?
 * returns the length of an array/string
 * good!
 * 
 * okay do you remember another built in functions on arrays, string or dict?
 * not off top :(
 * it's okay, I look at lot up
 * 
 * there's some like 
 * 
 * oh yea
 * .slice()
 * .splice()
 * .push()
 * .pop()
 * 
 * 
 * remember your if statements
 * yes
 * 
 * so if i asked you to quickly write a function that returns 
 * me only numbers greater than some num but less 
 * than another you could do it
 * 
 * do it
 * 
 * i think i could do that 
 */
let example2 = [10, 22, 33, 5, 6, 9, 100], upperBound = 50, lowerBound = 7;
function returnBetween(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lowerBound && arr[i] < upperBound) {
            answer.push(arr[i]);
        }
    }
    return answer
}
/****************************************************** */
// https://leetcode.com/problems/plus-one/
// this one was tricky, only because of the 9 + 1 exception
/**66. Plus One
 * Given a non-empty array of digits representing a non-negative  
 * integer, increment one to the integer.
 * 
 * The digits are stored such that the most significant digit is at  
 * the head of the list, and each element in the array contains a
 * single digit.
 * 
 * You may assume the integer does not contain any leading zero,
 * except the number 0 itself.
 * 
 * Example 1:
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * 
 * Example 2:
 * Input: digits = [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * 
 * Example 3:
 * Input: digits = [0]
 * Output: [1]
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
};
/********************************************************* */
// this might be another good one
// https://leetcode.com/problems/merge-sorted-array/
/**88. Merge Sorted Array
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * 
 * Note:
 * The number of elements initialized in nums1 and nums2 are m and n respectively.
 * You may assume that nums1 has enough space (size that is equal to m + n) 
 * to hold additional elements from nums2.
 * 
 * Example:
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * Output: [1,2,2,3,5,6]
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
};
/********************************************************* */
// DARRICK! the last step is to submit it on leetcode under your own account :)
// console.log(returnBetween(example2));

// https://leetcode.com/problems/two-sum/
/**1. Two Sum
 * Given an array of integers nums and and integer 
 * target, return the indices of the two numbers 
 * such that they add up to target.
 * 
 * You may assume that each input would have exactly 
 * one solution, and you may not use the same element twice.
 * 
 * You can return the answer in any order.
 * 
 * Example 1:
 * 
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Output: Because nums[0] + nums[1] == 9, we return [0, 1]
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
// console.log(twoSum([1, 2, 3, 3, 4, 5], 7));

// did you guys find one? i dont know what to look for honestly