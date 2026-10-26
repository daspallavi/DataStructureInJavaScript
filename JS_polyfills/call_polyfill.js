let car={
    color: "red",
    company: "Ferrari"
};

function purchaseCar(currency, price){
    console.log(`I have purchased ${this.color} - ${this.company} car of ${currency} ${price}`);
}



Function.prototype.myCall = function(context = {}, ...args){

    if(typeof this!== "function"){
        throw new Error(this + "It is not callable");
    }

    context.fn = this;
    context.fn(...args);
};

purchaseCar.myCall(car, "ruppess", "1000000");

