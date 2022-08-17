/** reversing the string*/

// let str = "JS";

const reverse = (s) => {

    let str = s.split('');
    let result = [];

    for (let i = str.length; i >= 0; i--) {
        result.push(str[i]);
    }
    return result.join('')
}




// console.log(reverse(str));


/** palindrome problem */

const palindrome = (s) => {

    let current = s;
    let reverseStr = reverse(s);

    if (current == reverseStr) {
        return true;
    }

    return false;

}

console.log(palindrome("aaaddddaaa"))
console.log(palindrome("apple"))


let maxChar = (s) => {
    let obj = {}

    for (let char of s) {
        if (!obj[char]) {
            obj[char] = 1
        }
        else {
            obj[char]++;
        }
    }

    let maxNum = 0;
    let maximumChar = '';
    for (let char in obj) {
        if (obj[char] >= maxNum) {
            maxNum = obj[char];
            maximumChar = char;
        }
    }
    console.log(maxNum, maximumChar)

    return {
        maxChar: maxChar,
        maximumChar: maximumChar
    }
    // console.log(obj);
}

//console.log(maxChar('hkhsdkasdkahsdashoahsd'));

/** reverse integer */

const reverseInt = (n) => {
    return parseInt(n.toString().split('').reverse().join(''));
}

/**  reverse string in recursion */

function reverseStr(str) {
    if (str.length === 0) return '';

    return reverse(str.slice(1)) + str[0];

}

//console.log(reverseStr(['h', 'a', 'p', 'p', 'y']));


/** array of string with two pointer */


let a = [1, 2, 3, 4];
let b = ["delhi", 'hyd', 'gau', 'ccu'];
let obj = {};

function convertToObj(a, b) {

    a.forEach((k, j) => {
        obj[k] = b[j]

    });
    return obj;
}


console.log(convertToObj(a, b));


const obj1 = a.reduce((accumlator, element, index) => {
    return { ...accumlator, [element]: b[index] }
}, {});






