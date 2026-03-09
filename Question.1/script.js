const user = {
    name: "Alice",
    greet: function () {
        console.log(this.name);
        let innergreet = () =>  {
            console.log(this.name);
        }
        innergreet() ;
    }
};

user.greet();