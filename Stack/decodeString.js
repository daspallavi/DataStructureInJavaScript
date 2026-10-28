function decodeString(s){
    let stack = [];
    let currString = "";
    let currNumber = 0;


    for(let char of s){
        if(char === "["){
            stack.push(currString);
            stack.push(currNumber);
            currString = "";
            currNumber = 0;
        } else if(char === "]"){
            let num = stack.pop();
            let prevString = stack.pop();
            currString = prevString + currString.repeat(num);
        }
        else if (/\d/.test(char)){
            //this checks if number and updates the current Number
            // below to consider double digit numbers
            currNumber = currNumber *10 +parseInt(char);
        }
        else{
            //if it is just consecutive string just concatentate them
            currString +=char;
        }
    }

    return currString;
}

console.log(decodeString("3[a2[c]]"))