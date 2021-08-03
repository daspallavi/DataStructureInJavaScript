// closure: function bundled with the lexical scoping
function x() {
    let a = 7;
    return function y() {
        console.log(a); // refernce is variable is returned , not the value
    }
    a = 100
}

let z = x();
console.log(z);
z(); // output : 100


