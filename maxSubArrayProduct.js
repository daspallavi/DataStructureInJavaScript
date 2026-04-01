/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let lp= 1;
    let rp=1;
    let ans = nums[0];

    for(let i =0; i < nums.length; i++){
  lp = lp ==0? 1: lp;
  rp = rp ==0? 1: rp;
        lp *= nums[i];
        rp *=nums[nums.length-1-i];

        ans = Math.max(ans, Math.max(lp,rp));
    }

    return ans;
};