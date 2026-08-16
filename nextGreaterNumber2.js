/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length;
    let stack =[];
    let ans = Array(n).fill(-1);

    for(let i= (2*n)-2; i>=0; i--){
        while(stack.length){
         let top = stack[stack.length-1];
         if(nums[i%n] < top){
            ans[i%n] = top;
            break;
         }
         else{
            stack.pop();
         }
        }
        stack.push(nums[i%n]);
    }
    return ans.slice(0,n);
};