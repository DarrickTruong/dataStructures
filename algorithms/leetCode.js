/**
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * [@param](https://leetcode.com/rooparam) {ListNode} l1
 * [@param](https://leetcode.com/rooparam) {ListNode} l2
 * @return {ListNode}

 */

var addTwoNumbers = function (l1, l2) {
  let head, c = head, one = l1, two = l2, carry = 0;
  while (one || two) {
    let x = 0, y = 0, sum = carry, next, tmpNode;
    if (one.val) {
      x = one.val;
    }
    if (two.val) {
      y = two.val;
    }
    sum += x + y;
    carry = Math.floor(sum / 10);
    next = sum % 10;
    tmpNode = new ListNode(next);
    if (head == null) {
      head = new ListNode(next);
      c = head;
    } else {
      c.next = tmpNode;
      c = c.next;
    }
    if (one.next != null) {
      one = one.next;
    } else {
      one = false
    }
    if (two.next != null) {
      two = two.next;
    } else {
      two = false
    }
  }
  if (carry > 0) {
    let tmpNode = new ListNode(carry);
    c.next = tmpNode;
  }
  return head;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (myMap.has(complement)) {
      return [myMap.get(complement), i]
    }
    myMap.set(nums[i], i);
  }
};


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let n = s.length;
  let set = new Set();
  let ans = 0, i = 0, j = 0;
  while (i < n && j < n) {
    console.log(i, j);
    if (!set.has(s.charAt(j))) {
      set.add(s.charAt(j++));
      ans = Math.max(ans, j - i);
      console.log('add', set);
    } else {
      set.delete(s.charAt(i++));
      console.log('delete', set);
    }
  }
  return ans
};
lengthOfLongestSubstring('abcabccbb');
lengthOfLongestSubstring('pwwkew');

/**
 * DARRICK 
 * MISSING POSITIVE
 * 
 * 
 * 
 */
function missingPos(arr){
    if(arr.length===0) return 1;
    let pos = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>0){
            pos.push(arr[i]);
        }
    }
    if(pos.length===0) return 1;
    console.log(`pos online 15 ${pos}`);
    let min = arr[0], max = min;
    for(let i = 1; i<arr.length;i++) {
        if(pos[i]<min){
            min = pos[i];
        }
        if(pos[i]>max) max = pos[i];
    }
    if(min === 1) {
        console.log("inside if")
        for(let i = min; i<= max; i++){
            if(!(pos.includes(i))) {
                return i
            }
        } 
        return max+1;
    } else {
        console.log("inside else")
        return 1
    }
}

let ex1 = [1, 2, 0]; //3:
let ex2 = [3, 4, -1, 1]; //2
let ex3 = [7, 8, 9, 11, 12] // 1
let ex4 = [-7, -9, -11, 12] // 1

console.log(missingPos(ex1));
console.log();
console.log(missingPos(ex2));
console.log();
console.log(missingPos(ex4));
console.log();
console.log(missingPos([0,1,2,3,5,-55,-88,-97,-1,4]));



let n = 123;
console.log(n.charAt(0))



/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = x.toString();
    let rev = "";
    if (string.length <=1) {
        return true;
    }
    for (let i = 0; i < Math.floor(string.length/2); i++){
        rev += string.charAt(i);
    }
    console.log(rev);
    let j = 0;
    if (string.length%2 != 0){
        console.log('in odd');
        for (let i=Math.round(string.length/2); i < string.length; i++){
            console.log(i);
            console.log("string", string.charAt(i));
            console.log('rev', rev.charAt(rev.length-1-j));
            if(string.charAt(i) != rev.charAt(rev.length-1-j)){
                console.log("in if false");
                return false
            }
            j++;
        }
    }else{
        for(let i=string.length/2; i< string.length; i++){
            console.log("string", string.charAt(i));
            console.log('rev', rev.charAt(rev.length-1-j));
            if(string.charAt(i) != rev.charAt(rev.length-1-j)){
                console.log("in else false");
                return false
            }
            j++;
        }
    }
    return true;
};