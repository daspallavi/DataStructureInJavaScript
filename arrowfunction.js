let obj = {
    name: "Jiya",
    fun: function () {
        // let self = this;
        // function xyz() {
        //     console.log(self.name);
        // }

        const xyz = () => {
            console.log(this.name);
        }
        xyz();
    }
}

obj.fun();