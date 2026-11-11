var validPath = function(n, edges, source, destination){
    let map = {};
// this creates the neighbor map for graph
    for(let [x,y] of edges){
        if(!map[x]) map[x] =[];
        if(!map[y]) map[y] = [];
        map[x].push(y);
        map[y].push(x);
    }

    // create a queue and add the source 
    let q = [source];
    let visited = new Set();
    visited.add(source)
    while(q.length){
    let curr = q.shift();
    //if the curr is equal to destination it means there is a valid path, return true
    if(curr === destination){
        return true;
    }
    //Otherwise, visit the neighbors and keep adding them to the queue and visited set
        for(neighbor of map[curr] ||[]){
            if(!visited.has(neighbor)){
                 visited.add(neighbor);
                 q.push(neighbor);
            }
           
        }
    
    }
    return false;
}