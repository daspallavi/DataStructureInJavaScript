class Monster {
    constructor(name) {
        this.name = name;
    }

    attack() {
        console.log(`${this.name} attacked`)
    }

    walk() {
        console.log(`${this.name} walked`);
    }

}

class FlyingMoster extends Monster {
    fly() {
        console.log(`${this.name} flew`);
    }
}

class SwimmingMoster extends Monster {
    swim() {
        console.log(`${this.name} swam`);
    }
}

const bear = new Monster("Bear");
bear.walk();
const shark = new SwimmingMoster('shark');
shark.swim();


/**composition */
function swimmer({ name }) {

    return {
        swim: () => console.log(`${name} swam`)
    }
}

function flyer({ name }) {
    return {
        fly: () => console.log(`${name} flew`)
    }
}

function swimmingMonsterCreator(name) {

    const monster = { name: name };

    return {
        ...monster,
        ...swimmer(monster)
    }
}

function swimmingFylingMonsterCreator(name) {

    const monster = { name: name };

    return {
        ...monster,
        ...swimmer(monster),
        ...flyer(monster)
    }
}
const obj = swimmingMonsterCreator('Monster');
obj.swim();

const obj2 = swimmingFylingMonsterCreator('bobo');
obj2.swim();
obj2.fly();