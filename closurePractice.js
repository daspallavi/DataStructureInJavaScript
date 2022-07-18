function x() {
    let a = 100;
    return function y() {
        a = 7
        console.log(a);
    }
}

console.log(x()());


/**
 * 
 * Synchronous - single threaded language
 * 
 * 
 */