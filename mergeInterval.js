/**
 * 
 * Write a function to consolidate overlapping intervals within a given array intervals, where each interval intervals[i] consists of a start time starti and an end time endi.

Two intervals are considered overlapping if they share any common time, including if one ends exactly when another begins (e.g., [1,4] and [4,5] overlap and should be merged into [1,5]).

The function should return an array of the merged intervals so that no two intervals overlap and all the intervals collectively cover all the time ranges in the original input.
 * 
 * This code sorts intervals by start time, then builds merged by either adding a separate interval or extending the previous one.

Use [[1,3], [2,6], [8,10], [15,18]]. After sorting, the order stays the same.


Start with merged = [].

Read [1,3]. merged is empty, so add it. Now [[1,3]].

Read [2,6]. Its start 2 is not greater than the last end 3, so they overlap. Update the last end to max(6, 3). Now [[1,6]].

Read [8,10]. Its start 8 is greater than the last end 6, so it does not overlap. Add it. Now [[1,6], [8,10]].

Read [15,18]. Its start 15 is greater than 10, so add it. Final result is [[1,6], [8,10], [15,18]].


The key check is interval[0] > merged[merged.length - 1][1]. Greater means there is a gap, so add a new interval. Otherwise, the intervals touch or overlap, so merge them.
 */



function mergeInterval(intervals){

const sortedIntervals = intervals.sort((a,b)=>a[0]-b[0]);
const merged = [];

for(const interval of sortedIntervals){
    if(merged.length===0 || interval[0]> merged[merged.length-1][1]){
        merged.push(interval);
    }else{
        merged[merged.length-1][1] = Math.max(interval[1],merged[merged.length-1][1] )
    }
}

return merged;

}

console.log(mergeInterval([[1,3], [2,6], [8,10], [15,18]]));