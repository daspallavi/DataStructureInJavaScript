let leastInterval = function (arr,n){
    let freq = Array(26).fill(0);

    let maxFreq = 0;
    for(let i =0; i < arr.length; i++){
        let curr = arr[i].charCodeAt() - 65;
        ++freq[curr];
        maxFreq = Math.max(maxFreq, freq[curr]);
    }

    let countOfMaxFreq = 0;
    for(let i=0; i<26; i++){
        if(freq[i] == maxFreq){
            ++countOfMaxFreq;
        }
    }

    let cycle = ((n+1)*(maxFreq-1)) + countOfMaxFreq;
    return Math.max(arr.length, cycle);
}

console.log(leastInterval(["A","C","A","B","D","B"], 1));