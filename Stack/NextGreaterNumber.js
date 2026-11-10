// The solution iterates over each index in the input array.
//  For each index, it checks if the element at that index is the next greater element for any previous elements in the array. 
// In order to perform that check efficiently, we'll use a monotonic decreasing stack.
//https://www.hellointerview.com/learn/code/stack/monotonic-stack

//We start by initializing our stack and our results array, 
// with each value in the results array initialized to -1. Our stack stores the indexes of the elements in the input array that have not yet found their next greater element.

/**
 * 
 *Iteration
We then iterate over the input array. To check if the current element nums[i] is the next greater element for any of the previous elements in the array, we compare the current element with the element at the index at the top of the stack nums[stack[-1]].
If the stack is empty, or if nums[i] is less than nums[stack[-1]], we push the current index onto the stack.
 */

function nextGreaterNumber(nums){
    let n = nums.length;
    let result = new Array(n).fill(-1);
    let stack =[]
    for(let i =0; i < n; i++){
//nums[stack[stack.length-1]]
// we are storing the index of nums in sstack, the value pushed is at bottom of stack
//you reach the end of the nums and stack still has few numbers left that means for them there is no greater number available in nums, keep -1
        while(stack.length >0 && nums[i] > nums[stack[stack.length-1]]){
            const index = stack.pop();
            result[index] = nums[i];
        }
        stack.push(i);
    }
return result;
}