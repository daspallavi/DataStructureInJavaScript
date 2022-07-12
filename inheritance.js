/** protypical inheritance */

let object = {
    name: "tim",
    city: "europe",
    fun: function () {
        console.log(this.name + " lives in " + this.city)
    }
}
object.fun();

let object2 = {
    name: "Jim"
}

object2.__proto__ = object;
object2.fun();


/** class based inheritance */
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());