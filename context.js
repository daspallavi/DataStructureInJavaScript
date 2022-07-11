let person = {
    name: "Adam",
    hello: function (says) {
        console.log(this.name + " says " + says)
    }
}

let avatar = {
    name: "Bob"
}

//person.hello.apply(avatar, ["hello"]);

const n = person.hello.bind(avatar, "hi");
n();
