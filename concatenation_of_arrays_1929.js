let getConcatenation = function (nums) {

    //solution-1
    // let first = nums;
    // let second = nums;

    // return first.concat(second)

    //solution-2
    nums.forEach(element => {
        console.log(element)
        nums.push(element)
    });

    return nums;

};



console.log(getConcatenation([1, 2, 1]));