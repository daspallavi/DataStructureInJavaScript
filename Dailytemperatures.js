 /**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    let answer = Array(temperatures.length).fill(0);
       let stack=[];

    for(let i =0; i < temperatures.length ; i++){
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]){
            let prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return answer;
};


