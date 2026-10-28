Function.prototype.myApply = function(context ={}, args=[]){
    if(typeof this !== "function"){
        throw new Error(this + "Its not callable");
    }

    if(!Array.isArray(args)){
        throw new TypeError("args are not f type array")
    }
    context.fn = this;
    context.fn(...args)
};

const car = {
    color:"red",
    model: "Ferrari"
}


function purchaseCar(when){
    console.log(`${when} I bought a ${this.color} ${this.model}`);
}

purchaseCar.myApply(car, ["Today"]);

