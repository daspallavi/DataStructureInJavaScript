function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(text) }, time)
    });
}

//Promise.all([showText("hello", 1000), Promise.resolve("hi")]).then(value => console.log(value));


//polyfill for the same

function myPromiseAll(promises) {
    let result = [];
    return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
            p.then((res) => {
                result.push(res);
                if (index === promises.length - 1) {
                    resolve(result)
                }
            }).catch((err) => reject(err))
        })
    })
}

myPromiseAll([showText("hello", 1000), Promise.resolve("hi")]).then(value => console.log(value));
