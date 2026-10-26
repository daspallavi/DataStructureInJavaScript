/**
 * 
 * Write a function to return the minimum number of intervals that must be removed from a given array intervals, where intervals[i] consists of a starting point starti and an ending point endi, to ensure that the remaining intervals do not overlap. Intervals that only touch at their endpoints are not considered overlapping (e.g., [2,5] and [5,7] do not overlap).

Input:

intervals = [[1,3],[5,8],[4,10],[11,13]]
Output:

1
Explanation: Removing the interval [4,10] leaves all other intervals non-overlapping.
 
we are uisng greedy algorithm, sort by end time, keep the once where the current start time is greater or equal than the end time of the previous meeting.
increment the count, update the end and repeat
you get the intervals to keep, substract it from total interval length to get the no. to be removed
*/



function nonOverlappingIntervals(intervals){

if(intervals.length===0) return 0;

//sort by end time
intervals.sort((a,b)=>a[1]-b[1]);
let end = intervals[0][1]; // after sorting store the first end time.

let count = 1;

for(let i=1; i<intervals.length; i++){

    if(intervals[i][0] >= end){
        count++;
        end = intervals[i][1];
    }
}
// why intervals.length-count? we are calculating the intervals required to keep,
// question is about removing the interval
return intervals.length-count;

}

console.log(nonOverlappingIntervals([[1,3],[5,8],[4,10],[11,13]]))