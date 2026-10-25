//Polyfill for reduce

//arr.reduce((acc,curr,i,arr)=>{}, initialValue)

Array.prototype.myReduce = function(cb, initialValue){

    let accumlator = initialValue;
    for(let i = 0; i < this.length; i++){
        accumlator = accumlator ? cb(accumlator, this[i],i, this) : this[i];
    }
    return accumlator;
};



const nums = [1,2,3,4];

const sum = nums.reduce((acc, curr, i,arr)=>{

    return acc+curr;
},0);

console.log(sum);