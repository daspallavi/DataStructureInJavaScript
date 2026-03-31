/**
* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

 * You must write an algorithm that runs in O(n) time and without using the division operation.
* Example 1:
* Input: nums = [1,2,3,4]
* Output: [24,12,8,6]
*/




/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let answer = new Array(n).fill(1);
    let left = 1;
    for(let i = 0; i < nums.length; i++){
        answer[i] = left;
        left = left * nums[i]
    }

    let right = 1 
    for(let i =n-1; i>=0; i--){
        answer[i] = answer[i] * right;
        right = right * nums[i];
    }

    return answer;
};
