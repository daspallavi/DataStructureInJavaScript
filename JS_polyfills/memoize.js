function myMemoize(fn, context){
    //res will hold the arg and value in keyvalue pair
    const res = {};
    return function(...args){
    let argsCache = JSON.stringify(args);
    if(!res[argsCache]){
        res[argsCache] = fn.call(context || this, ...args);
    } 

        return res[argsCache];

    };
}

const clumsySquare = (num1, num2)=>{

    for(let i =0; i<=10000000; i++){
        return num1*num2;
    }
}

console.time("First call");
console.log(clumsySquare(9456, 7649));
console.time("First call");


const memoizeProduct = myMemoize(clumsySquare);
console.time("First call");
console.log(memoizeProduct(9456, 7649));
console.time("First call");