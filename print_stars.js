
let n = 4;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
        row += "_";
    }
    for (let k = 0; k < i + 1; k++) {
        row += "*";
    }
    console.log(row);
}



/**
 * 1
 * 10
 * 101
 * 1010
 * 10101
 */

