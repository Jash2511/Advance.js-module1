## Question 10: Inheritance with `extends` and `super`, Method Override

**Problem Statement:**  
Define a class `Shape` with a constructor that takes `name` and sets `this.name = name`, and a method `describe()` that returns `"Shape: " + this.name`. Define a class `Circle` that extends `Shape`, has a constructor taking `name` and `radius`, calls `super(name)`, sets `this.radius = radius`, and overrides `describe()` to return `"Circle: " + this.name + ", radius " + this.radius`. Create a `Circle` instance and call `describe()`.

**Hints:**
- In the child constructor, the first line must be `super(name)` before using `this`.
- Override by defining `describe()` again in `Circle`; you can use `super.describe()` if you want to extend the parent string.

**Expected Output:**
```
Circle: Small, radius 5
```

**Code Stub:**
```javascript
class Shape {
  constructor(name) {
  }

  describe() {
  }
}

class Circle extends Shape {
  constructor(name, radius) {
  }

  describe() {
  }
}

const c = new Circle("Small", 5);
console.log(c.describe());
```
