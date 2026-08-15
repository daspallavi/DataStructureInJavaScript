/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

    let ngeMap = {};
    let s = [];
    let n = nums2.length;
    s.push(nums2[n-1]);
    ngeMap[s[s.length-1]] = -1;

    for(let i =n-2; i >=0; i--){
while(s.length){
        if(s[s.length-1] < nums2[i]){
            s.pop()

        }
else{

ngeMap[nums2[i]] = s[s.length-1];
break;
}
        if(s.length==0){
            ngeMap[nums2[i]]== -1;
        }
        s.push(nums2[i]);
    }}
    return nums1.map(x=>ngeMap[x]);
};