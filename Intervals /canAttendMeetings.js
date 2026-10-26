/**
 * 
 * Write a function to check if a person can attend all the meetings scheduled without any time conflicts. Given an array intervals, where each element [s1, e1] represents a meeting starting at time s1 and ending at time e1, determine if there are any overlapping meetings. If there is no overlap between any meetings, return true; otherwise, return false.

Note that meetings ending and starting at the same time, such as (0,5) and (5,10), do not conflict.

Input:

intervals = [[1,5],[3,9],[6,8]]
Output:false
Explanation: The meetings (1,5) and (3,9) overlap.

Input:

intervals = [[10,12],[6,9],[13,15]]
Output:true
Explanation: There are no overlapping meetings, so the person can attend all.
*
*
 */

function canAttendMeetings(intervals){

   if(intervals.length == 0) return true;

   // step one sort by start time
   intervals.sort((a,b)=> a[0] - b[0]);

   // now check if the current start is greater or equal to the end time of previous meeting, only then the
   // meeting can be attended, otherwise there it is a overlapping meeting case.

   // since we are comparing the current and previous invertval the loop starts from i instead of 0
   for(let i =1; i< intervals.length; i++){
    if(intervals[i][0] < intervals[i-1][1]){
         return false;
    }
       
}
    return true;
}

//Time complexity : O(nlogn)
console.log("testcase 1", canAttendMeetings([[1,5],[3,9],[6,8]]));
console.log("testcase 2", canAttendMeetings([[10,12],[6,9],[13,15]]));