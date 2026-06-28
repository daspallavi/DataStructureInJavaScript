 /**
  * 
  * approach 1 : sliding window and shift to right untill you find the pair, mainatin frequency counter
  * O(n)
  * approach 2 : sort both the arrays
  * O(nlogn) 
  * approach 3: match the hash  --> mapW === mapP
  * using array --> length : 26
  * 
  */
 
 
 let permutation = function permutation(s1, s2){
    let hashS = Array(26).fill(0);
    let hashW = Array(26).fill(0);
     let window_length = s1.length; // s1= 'ab'
    for(let i =0; i < window_length; i++){
        ++hashS[s1.charCodeAt(i)-97];
        ++hashW[s2.charCodeAt(i)-97];
    }
   let i =0;
   let j =window_length-1;

   while(j < s2.length){
     if(isHashSame(hashS, hashW)){
        return true;
     }
     else{
        //slide window , update the hash, update j (slided window on right side)
        // All the operation here has to be done in the same order.
        // Remember the operation is in s2 always, s1 in constant.
        --hashW[s2.charCodeAt(i)-97];
        ++i;
        ++j;
        ++hashW[s2.charCodeAt(j)-97];
     }
   }
return false;
}


let isHashSame = function(hashS, hashW){
    for(let i =0; i <26; i++){
        if(hashS[i] !==hashW[i]){
            return false;
        }
    }
    return true;
}

console.log(permutation('ab', 'ebbab'));