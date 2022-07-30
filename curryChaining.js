// const result = calc.add(5). multiply(10).substract(30).add(10);
//console.log(result.total)


const calc = {
    total: 0,
    add(a) {
        this.total += a;
        return this;
    },
    multiply(a) {
        this.total *= a;
        return this;
    },
    substract(a) {
        this.total -= a;
        return this;
    }
}
const result = calc.add(5).multiply(10).substract(30).add(10);
console.log(result.total) 