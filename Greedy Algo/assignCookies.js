let assignCookies = function(g,s){
    s.sort((a,b)=> a-b);
    g.sort((a,b)=> a-b);



    let i =0;
    let j =0;
    while(i <= s.length-1){
         if(s[i] >= g[j]){
        j++;
    }
    i++;
    }
   
return j;
}

console.log(assignCookies([1,2,3], [1,1]));