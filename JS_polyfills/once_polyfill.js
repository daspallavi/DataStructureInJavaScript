//once polyfill using closures
// This once function it gets called only once 
// it is a higher order utility function that wraos a given
// function to ensure it executes exactly once.
function once(func, context){
    let ran;

    return function(){
        if(func){
            ran = func.apply(context || this, arguments);
            func = null;
        }

        return ran;
    };
}

const hello = once((a,b)=> console.log("hello", a,b));

hello(1,2);
hello();