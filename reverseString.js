let s = "Javascript is best";

function reverseString(str) {

    let st = str.split("");
    let ans = [];
    console.log(st);

    for (let i = str.length - 1; i >= 0; i--) {
        console.log(st[i])
        ans.push(st[i])
    }

    console.log(ans.join(""))
}

reverseString(s);