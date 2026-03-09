## Add Method on Prototype and Avoid Prototype Pollution

**Problem Statement:**  
Implement a constructor `Student(id, name)` and add a method `getId` on `Student.prototype` that returns `this.id`. Do **not** add any method to `Array.prototype` or `Object.prototype`. Create an array of two students and use only the native `Array` methods (e.g. `map`) to get an array of their IDs. Your code should not modify built-in prototypes.

**Hints:**
- Keep all custom methods on `Student.prototype` only.
- Use `students.map(s => s.getId())` or equivalent; do not define `Array.prototype.myMap` or similar for this task.

**Expected Output:**
```
[ 101, 102 ]
```

**Code Stub:**
```javascript
function Student(id, name) {
}

Student.prototype.getId = function () {
};

const students = [
  new Student(101, "Ali"),
  new Student(102, "Bina")
];

const ids = [];
console.log(ids);
```