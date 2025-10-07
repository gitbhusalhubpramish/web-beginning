# JavaScript Modular Programming

Modular programming is a way to **split your code into separate files or modules** so it’s easier to read, maintain, and reuse.

---

## 1. Why Modular Programming?

* Makes code **organized**
* Helps **reuse** functions and variables
* Easier to **debug**
* Lets multiple people work on different parts of the project

---

## 2. Exporting Functions and Variables

You can **export** variables or functions from a module (file) so other files can use them.

### Named Export

```js
// math.js
export const pi = 3.14;
export function add(a, b) {
    return a + b;
}
```

* `export` keyword allows multiple exports.

### Default Export

```js
// greet.js
export default function greet(name){
    return `Hello ${name}`;
}
```

* Only **one default export** per file.
* No need to use curly braces while importing.

---

## 3. Importing Functions and Variables

You can **import** modules into another JS file to use the exported items.

### Import Named Exports

```js
// app.js
import { pi, add } from './math.js';
console.log(pi);       // 3.14
console.log(add(2,3)); // 5
```

### Import Default Export

```js
// app.js
import greet from './greet.js';
console.log(greet('Pramish')); // Hello Pramish
```

### Mixed Import

```js
import greet, { anotherFunction } from './greet.js';
```

* `greet` is default, `anotherFunction` is named.

---

## 4. Key Points

* **Every file can be a module** if you export something from it.
* Use **named exports** for multiple items and **default export** for one main item.
* Paths in `import` are relative (`./` for same folder, `../` for parent folder).
* Modular code improves **readability, maintainability, and reusability**.

---

## 5. Example Scenario

You are building a website:

* `math.js` → contains all math functions
* `greet.js` → contains all greeting functions
* `app.js` → imports functions and variables from `math.js` and `greet.js` to use them

This way, if you need to update a function, you only update it in its module and all files using it get the updated version automatically.
