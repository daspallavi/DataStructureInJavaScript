var canCompleteCircuit = function(gas, cost){
    let currgain = 0;
    let totalgain =0;
    let ans = 0;

    for(let i =0; i <gas.length;i++){
        gain = gas[i] - cost[i];
        currgain = currgain +gain;
        totalgain = totalgain + gain;
        if(currgain <0){
            currgain =0;
            ans = i+1;
        }
    }

    return totalgain >=0 ? ans: -1;
}

console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]));
console.log(canCompleteCircuit([2,3,4],[3,4,3]));
