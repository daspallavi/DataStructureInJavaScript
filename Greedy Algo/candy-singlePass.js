let candy = function(arr) {
    let n = arr.length;
    if (n <= 1) return n;

    let ans = n; // Every child gets at least 1 candy initially
    let i = 1;

    while (i < n) {
        // Flat surface: adjacent ratings are equal
        if (arr[i] === arr[i - 1]) {
            i++;
            continue;
        }

        // Increasing slope (peak)
        let up = 0;
        while (i < n && arr[i] > arr[i - 1]) {
            up++;
            ans += up;
            i++;
        }

        // Decreasing slope (valley)
        let down = 0;
        while (i < n && arr[i] < arr[i - 1]) {
            down++;
            ans += down;
            i++;
        }

        // Deduct the duplicate peak count counted in both slopes
        ans -= Math.min(up, down);
    }

    return ans;
};

console.log(candy([1, 0, 2])); // Output: 5
