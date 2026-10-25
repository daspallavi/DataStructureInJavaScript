/**
 * 
 * You're given a list of intervals intervals that is already sorted by start time and has no overlaps, plus a single interval newInterval. Write a function that returns a new list containing all the intervals after newInterval has been inserted. The returned list must stay sorted by start time and have no overlaps, so any intervals that overlap once newInterval is added should be merged together. You don't need to modify intervals in place; just build and return the result.

Two intervals are considered overlapping if they share any common time, including if one ends exactly when another begins (e.g., [1,4] and [4,7] overlap and should be merged into [1,7]).

Input:

intervals = [[1,3],[6,9]]
newInterval = [2,5]
Output:

[[1,5],[6,9]]
Explanation: The new interval [2,5] overlaps with [1,3], so they are merged into [1,5].

Input:

intervals = [[1,2],[3,5],[6,7],[8,10]]
newInterval = [5,6]
Output:

[[1,2],[3,7],[8,10]]
Explanation: The new interval [5,6] touches [3,5] and [6,7], so all three are merged into [3,7].
 * 
 * 
 * 
 * 
 */


function inserIntervals(intervals, newInterval){

    const merged = [];
    let i = 0;
    const n = intervals.length;


//phase -1     
//interval end time lesser that new interval start time to make sure they do not overlap
// these can be added safely
    while(i<n && intervals[i][1] < newInterval[0]){
        merged.push(intervals[i]);
        i++;
    }

//phase-2 
/*
In this phase, we merge all the intervals that overlap with newInterval together into a single interval by updating newInterval to be the minimum start and maximum end of all the overlapping intervals. This includes intervals that merely "touch" newInterval (e.g. [1,4] and [4,7] should merge into [1,7]). We iterate through the intervals list until the current interval starts after newInterval ends (i.e. intervals[i][0] > newInterval[1]).
When that condition is met, we add newInterval to merged and move onto phase 3.
*/
while(i<n && intervals[i][0] <= newInterval[1]){

    newInterval[0] = Math.min(intervals[i][0],newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1],newInterval[1]);
    i++;
}

//phase -3
/**
 * Phase 3 involves adding all the intervals starting after newInterval to merged. This involves iterating through the intervals list until the end of the list, and adding each interval to merged.
After completing these 3 phases, we return merged as the final result.
 */
merged.push(newInterval);

for(let j =i; j <n; j++ ){
    merged.push(intervals[j]);
}


return merged;
}


console.log(inserIntervals([[1,2],[3,5],[6,7],[8,10]], [5,6]));