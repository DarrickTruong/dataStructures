// iterate thru array nums
// return a number


const maxProduct = function(nums) {
    if (nums.length ==0) {
        return -1
    }

    let final_max, cur_max, cur_min; 
    final_max = cur_max = cur_min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let temp = cur_max;
        cur_max = Math.max(cur_max*nums[i], cur_min*nums[i], nums[i]);
        cur_min = Math.min(temp*nums[i], cur_min*nums[i], nums[i]);
        final_max = Math.max(final_max, cur_max);
    }
    return final_max
}