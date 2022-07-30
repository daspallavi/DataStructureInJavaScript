function frequencyCounter(str) {
    let freq = {};
    for (let i = 0; i < str.length; i++) {
        let character = str.charAt(i);
        if (freq[character]) {
            freq[character]++;
        }
        else {
            freq[character] = 1;
        }
    }
    return freq;
}

let s = ['c', 'b', 'b', 'c', 'f', 'a', 'e', 'a', 'b', 'b', 'a'];
frequencyCounter(s);