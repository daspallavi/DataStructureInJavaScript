function getPreferredResponse(endpoints) {
    if(!Array.isArray(endpoints)) {
    return Promise.reject("Input must be an array of endpoints");
}

const promises = endpoints.map(endpoint =>fetch(endpoint));
/**
 * issue here is we have to wait for all teh endpoints to execute
 * if one is stuck, we still will be waiting for all the endpoints
 * 
 */
return Promise.allSettled(promises).then((results)=>{
    for ( const result of results){
        const {status, value} = result;

        if(status === "fulfilled" && value.ok){
            return value.json()
        }
    }

    return Promise.reject("All endpoints failed");
})
}


/** more optimized solution for this */

function getPreferredResponse(endpoints) {
    if(!Array.isArray(endpoints)) {
    return Promise.reject("Input must be an array of endpoints");
}

return new Promise((endpoints)=>{

    let settleCount = 0;

    const results = Array.from(endpoints.length) ;
    fetch(endpoints).then(response =>{
        if(response.ok){
            return response.json();
        } else {
            throw new Error("Endpoint failed");
        }
    }).then(data => {
        results[index] = {success: true,data}
    }).catch(err =>{
        results[index] = {success: false, data}
    }).finally(()=>{
         settleCount +=1;
        checkResults();
       
    });



    function checkResults(){
        for( let i =0; i < results.length; i++){
            //api 0 => pending
            //api 1 => success
            //api 2 => failed
            let current = results[i];

            if(current === undefined){
                return;
            }
            else if(current.success){
                resolve(current.data);
                return;
            }
           
        }
        if(settleCount === endpoints.length){
            reject("All endpoints failed");
        }
    }
})

}