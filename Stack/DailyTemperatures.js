function dailyTemperatures(temps){
    const n = temps.length;
    let result = new Array(n).fill(0);
    const stack = [];

    for(let i =0; i < n; i++){
      while(stack.length > 0 && temps[i] > temps[stack[stack.length-1]]){

        let idx = stack.pop();
        result[idx] = i - idx;
      }

      stack.push(i)


    }

    return result;
}