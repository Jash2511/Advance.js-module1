function myNew(Constructor, ...args) {
    const obj = Object.create(Constructor.prototype) ;
    const result = Constructor.apply(obj , args) ;
    const isObject = typeof result === 'object' && obj !== null;
    const isFunction = typeof result === 'function' && obj !== null;

    return (isObject || isFunction) ? result :obj ;

}

function Person(name) {
    this.name = name;
}

const person = myNew(Person, "John");
console.log(person.name);
console.log(person instanceof Person);