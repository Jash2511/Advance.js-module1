## Constructor Function for Book with Prototype Method

**Problem Statement:**  
Implement a constructor function `Book` that takes `title` and `author` and assigns them to the instance. Add a method `getInfo` on `Book.prototype` that returns a string: `"<title> by <author>"`. Create two instances and call `getInfo` on each. Do not put `getInfo` inside the constructor.

**Hints:**
- Use `this.title = title` and `this.author = author` in the constructor.
- Attach `getInfo` to `Book.prototype` so all instances share the same function.
- Call the constructor with `new Book(...)`.

**Expected Output:**
```
Clean Code by Robert Martin
JS Guide by MDN
```

**Code Stub:**
```javascript
function Book(title, author) {
}

Book.prototype.getInfo = function () {
};

const b1 = new Book("Clean Code", "Robert Martin");
const b2 = new Book("JS Guide", "MDN");
console.log(b1.getInfo());
console.log(b2.getInfo());
```