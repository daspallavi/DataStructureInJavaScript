var runningSum = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let temp = nums[i] + nums[i + 1]
        nums[i + 1] = temp;
    }
    return nums;
};


console.log(runningSum([1, 2, 1]));

