let carpooling = function(trips, capacity){
    let loc = Array(1001).fill(0);

    for(let i=0; i < trips.length; i++){
        let [passengers, from, to] = trips[i];

        loc[from] = loc[from] + passengers;
        loc[to] = loc[to] - passengers;
    }

    let usedCapacity = 0;
    for(let i =0; i <1001; i++){
    usedCapacity  = usedCapacity + loc[i];
    if(usedCapacity > capacity){
        return false;
    }
    }
    return true;
}


console.log(carpooling([[2,1,5],[3,3,7]], 5));
console.log(carpooling([[2,1,5],[3,3,7]], 2));