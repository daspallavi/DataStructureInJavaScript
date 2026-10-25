//Ployfill for filter


Array.prototype.myfilter = function(cb){
    let temp = [];

    for(let i =0; i < this.length; i++){
        if(cb(this[i], i, this)) temp.push(this[i]);
    }
    return temp;
    
}

let nums = [1,2,3];


const morethantwo = nums.myfilter((num) =>{
    return num >2;
});

console.log(morethantwo);

