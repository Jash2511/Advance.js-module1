## Implement `myNew` (Polyfill for `new`)

**Problem Statement:**  
Implement a function `myNew(Constructor, ...args)` that mimics what the `new` keyword does: create a new object whose prototype is `Constructor.prototype`, run the constructor with `this` bound to that object and pass `args`, and return the object (unless the constructor returns a non-primitive, in which case return that value). Use it to create a `Person` with `name` and verify `person.name` and `person instanceof Person`.

**Hints:**
- Create an object linked to `Constructor.prototype` (e.g. `Object.create(Constructor.prototype)`).
- Call `Constructor.apply(obj, args)` so `this` inside the constructor is the new object.
- If the result of that call is an object (or function) and not null, return it; otherwise return the new object.

**Expected Output:**
```
John
true
```

**Code Stub:**
```javascript
function myNew(Constructor, ...args) {
}

function Person(name) {
  this.name = name;
}

const person = myNew(Person, "John");
console.log(person.name);
console.log(person instanceof Person);
```