/**
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k. 

* Example 1:

* Input: nums = [1,2,3,1], k = 3
* Output: true
* Example 2:

* Input: nums = [1,0,1,1], k = 1
* Output: true
* Example 3:

* Input: nums = [1,2,3,1,2,3], k = 2
* Output: false
 * 
 */


let duplicatesNearby = function (nums, k) {

 let map = new Map();
 for(let i=0; i <nums.length; i++){

    if(map.has(nums[i]))
    {
     // need to check for previous index and current index
        const prevIndex = map.get(nums[i]);
        if(Math.abs(prevIndex-i) <=k){
 return true;
        }
      
       
    }

    map.set(nums[i], i);
      console.log(map.get(nums[i]));
 }
 return false;

}

console.log(duplicatesNearby([1,2,3,1], 3));

//O(n) time complexity and O(n) space complexity

/** Approach 2:
 * Using Set and sliding window approach
 * We can maintain a sliding window of size k and check if there are any duplicates within that window. 
 * We can use a Set to store the elements in the current window. 
 * As we iterate through the array, we add the current element to the Set and check if it already exists in the Set. 
 * If it does, we return true. If the size of the Set exceeds k, we remove the element that is sliding out of the window.
 * This approach has a time complexity of O(n) and a space complexity of O(k).
 */


const containsNearbyDuplicate2 =(nums,k) =>{

let set = new Set();
for(let i =0; i < nums.length; i++){
    if(set.has(nums[i])){
        return true;
    }
    set.add(nums[i]);
    if(set.size > k){
        set.delete(nums[i-k]);
    }
}
return false;
}


console.log(containsNearbyDuplicate2([1,0,1,1], 1));