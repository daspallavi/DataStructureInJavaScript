
function freetime(schedule){

    let flattened = schedule.flat();
    let intervals = flattened.sort((a,b)=> a[0]-b[0]);
    let merged = [];

    for(let interval of intervals){
        if(merged.length == 0 || interval[0] > merged[merged.length-1][1]){
            merged.push(interval)
        }
        else{
            merged[merged.length-1][1] = Math.max(merged[merged.length-1][1], interval[1]);
        }

    }

    const free_times = [];

    for(let i =1; i <merged.length; i++){
        const start = merged[i-1][1];
        const end = merged[i][0];
        free_times.push([start,end]);
    }
    return free_times;
}

console.log(freetime([[[2,4],[7,10]],[[1,5]],[[6,9]]]));