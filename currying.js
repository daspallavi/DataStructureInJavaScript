let multiple = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyTwo = multiple(2);
//multiplyTwo(3);



let sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
}

console.log(sum(1)(2)(3)(4)(5)());


function curry(f) { // curry(f) does the currying transform
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}

// usage
function su(a, b) {
    return a + b;
}

let curriedSum = curry(su);

console.log(curriedSum(1)(2))