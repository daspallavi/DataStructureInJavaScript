const uno = () => {
    return "I am one";
};

const dos = async () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I am two');
            // return "I am two"
        }, 3000);
    })


}


const tres = () => {
    return 'I am three';
};

const callMe = async () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
}

callMe()

// uno();
// dos();
// tres();