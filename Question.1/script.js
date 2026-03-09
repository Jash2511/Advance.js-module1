const user = {
    name: "Alice",
    greet: function () {
        console.log(this.name);
        function innerGreet() {
            console.log(this.name);
        }
        innerGreet.call(this);
    }
};

user.greet();