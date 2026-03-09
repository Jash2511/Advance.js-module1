## Factory Function vs Constructor

**Problem Statement:**  
Implement both a constructor `Car(make, model)` and a factory function `createCar(make, model)`. Both should produce objects with `make`, `model`, and a method `describe()` that returns `"<make> - <model>"`. Create one instance from each and call `describe()`. Also log whether each is `instanceof Car` (only the one created with `new Car` should be).

**Hints:**
- Constructor: use `this.make`, `this.model`, and add `describe` on `Car.prototype`.
- Factory: create a plain object, set properties, add `describe` on that object (or a shared prototype if you prefer), return the object. No `new`; so `instanceof Car` will be false for the factory-created object.

**Expected Output:**
```
Toyota - Camry
Honda - Civic
true
false
```

**Code Stub:**
```javascript
function Car(make, model) {
}

Car.prototype.describe = function () {
};

function createCar(make, model) {
}

const c1 = new Car("Toyota", "Camry");
const c2 = createCar("Honda", "Civic");
console.log(c1.describe());
console.log(c2.describe());
console.log(c1 instanceof Car);
console.log(c2 instanceof Car);
```
