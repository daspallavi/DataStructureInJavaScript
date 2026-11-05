function nextSamllestNumber(nums){

    const n = nums.length;
    let result = new Array(n).fill(-1);
    const stack = [];


    for(let i = 0;i <n ; i ++){
        while(stack.length > 0 && nums[i] < nums[stack[stack.length-1]]){
            const index = stack.pop();
            result[index] = nums[i];
        }
        stack.push(i);
    }
    return result;
}