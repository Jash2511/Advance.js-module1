## Private Method and Public API

**Problem Statement:**  
Create a class `Validator` with a private method `#isEmpty(str)` that returns `true` if `str` is undefined, null, or has length 0. Add a public method `validate(str)` that returns `false` if `#isEmpty(str)` is true, and `true` otherwise. Do not expose `#isEmpty` outside the class. Test with an empty string and a non-empty string.

**Hints:**
- Declare private method with `#isEmpty(str) { ... }`.
- Call it from `validate` as `this.#isEmpty(str)`.

**Expected Output:**
```
false
true
```

**Code Stub:**
```javascript
class Validator {
  #isEmpty(str) {
  }

  validate(str) {
  }
}

const v = new Validator();
console.log(v.validate(""));
console.log(v.validate("hello"));
```
