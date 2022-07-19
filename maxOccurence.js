function findRandomIndexOfMax(arr, n) {

    // freq store frequency of each element in the array

    let mp = new Map();

    for (let i = 0; i < n; i++) {
        if (mp.has(arr[i])) {

            mp.set(arr[i], mp.get(arr[i]) + 1);

        }

        else {

            mp.set(arr[i], 1);

        }
    }
    console.log(mp)





    let max_element = Number.MIN_VALUE; // stores max occurring element



    // stores count of max occurring element

    let max_so_far = Number.MIN_VALUE;



    // traverse each pair in map and find maximum

    // occurring element and its frequency

    for (let [key, value] of mp.entries()) {

        if (value > max_so_far) {

            max_so_far = value;

            max_element = key;

        }

    }



    // generate a random number between [1, max_so_far]



    let r = Math.floor(((Math.random() * max_so_far) % max_so_far) + 1)



    // traverse array again and return index of rth

    // occurrence of max element

    for (let i = 0, count = 0; i < n; i++) {

        if (arr[i] == max_element)

            count++;



        // print index of rth occurrence of max element

        if (count == r) {

            console.log(i)

            break;

        }

    }
}



let a = [-1, 4, 9, 7, 7, 2, 7, 3, 0, 9, 6, 5, 7, 8, 9]
let len = a.length;
findRandomIndexOfMax(a, len)