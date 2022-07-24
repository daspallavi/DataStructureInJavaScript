function x() {

    setTimeout(function () {
        console.log(i);
    }, 1000)
    var i = 1;
}

//x();

let a = [{ name: "Jim", link: "https://www.w3schools.com", subitmes: [{ name: "Jim", link: "https://www.w3schools.com" }] }, { name: "Jim", link: "https://www.w3schools.com", subitmes: [{ name: "Jim", link: "https://www.w3schools.com" }] }]


function n() {
    //var i = 1;
    for (let i = 0; i <= 5; i++) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000)
    }


    console.log('hello')
}

n();