console.log("------------Find the second largest in the given array--------------");
/**  
 * ------------Find the second largest in the given array--------------
 * let a = [4,9,0,2,8,7,1]
 */


let input = [4, 9, 0, 2, 8, 7, 2, 1]

function getSecondLargest(arr) {

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if (arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }

    return secondLargest;

}

console.log(getSecondLargest(input));