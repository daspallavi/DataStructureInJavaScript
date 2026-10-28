var isValid = function(s) {
    let map = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    };

let stack =[];
    for(let i =0; i < s.length; i++){
console.log(map[s[i]], i);
        if(map[s[i]]){
            stack.push(s[i]);
        }
        else{
            let top=stack.pop();
            if(!top || s[i] !== map[top]){
                return false;
            }
        }
    }

    return stack.length ===0;
    
};

console.log(isValid("(()"));