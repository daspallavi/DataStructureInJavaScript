Promise.allPromisefill = (promises) =>{
    return  new Promise((resolve, reject)=>{
        const results = [];
        if(!promises.length){
            resolve(results);
            return;
        }

        const pending = promises.length;

        promises.forEach((promise, idx)=>{
            Promise.resolve(promise).then((res)=>{
                results[idx] = res;
                pending--;
                if(pending ==0){
                    resolve(results);
                    }}
                )
            })
        });
   
};