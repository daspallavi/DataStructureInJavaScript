// function countDown(num) {
//     if (num == 0) {
//         console.log('All done');
//         return 0;
//     }
//     console.log(num);
//     num--;
//     countDown(num);
// }

// countDown(5)


function factorial(num) {
    if (num == 1 || num == 0) {
        return 1;
    }
    return num * factorial(num - 1)
}

console.log(factorial(19));



