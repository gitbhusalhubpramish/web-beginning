# JavaScript Variables and Data Types

Have you ever thought about how a program remembers things — like your name, age, or score in a game? That’s where **variables** come in! In JavaScript, we use variables to **store data**, and that data can be of many different **types**.

---

## 1. What is a Variable?

A **variable** is like a box where you can store something (like numbers, text, or even objects). You can name that box and later open it to get or change what’s inside.

### Syntax to Declare Variables:

```js
let name = "Pramish";   // variable that can change
const PI = 3.14;         // constant that cannot change
var age = 13;            // old way (avoid using var)
```

### Explanation:

* `let` → Used when the value **can change** later.
* `const` → Used when the value **must stay the same**.
* `var` → Older way; works but not recommended (has scope issues).

### Example:

```js
let score = 10;
const maxScore = 100;
score = 20;  // can change
maxScore = 200; // Error! const cannot be changed
```

---

## 2. Data Types in JavaScript

Every variable stores a value, and that value has a **type** — like number, string, or boolean.

| Type          | Example                                    | Description                             |
| ------------- | ------------------------------------------ | --------------------------------------- |
| **Number**    | `let age = 13;`                            | Numbers (both integer and decimal)      |
| **String**    | `let name = "Pramish";`                    | Text enclosed in quotes                 |
| **Boolean**   | `let isStudent = true;`                    | True or false values                    |
| **Undefined** | `let x;`                                   | Variable declared but not given a value |
| **Null**      | `let y = null;`                            | Empty value (intentionally nothing)     |
| **Object**    | `let person = {name: "Pramish", age: 13};` | Collection of key-value pairs           |
| **Array**     | `let fruits = ["apple", "banana"];`        | List of items                           |

---

## 3. How Data is Stored

When you create a variable, JavaScript **allocates memory** to store it.

* **Primitive types** (like numbers, strings, booleans) store **the actual value**.
* **Reference types** (like objects, arrays) store a **reference (address)** pointing to the value in memory.

Example:

```js
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 (stored by value)

let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);
console.log(arr1); // [1,2,3] (stored by reference)
```

---

## 4. Operations and Type Behavior

Let’s look at how JavaScript behaves with operations:

### Normal Number Operations:

```js
console.log(1 + 1);  // 2
console.log(2 * 3);  // 6
```

### String + Number:

```js
console.log("1" + 1); // "11" (string + number = string)
console.log("2" * 3); // 6   (string is converted to number)
```

### Why this happens:

* `+` joins strings → it **converts numbers to text**.
* `*`, `/`, `-` treat strings as **numbers** if possible.

### Example:

```js
console.log(10 + "5");   // "105"
console.log(10 - "5");   // 5
console.log("2" * "3"); // 6
```

---

## Summary

* Use `let` for changeable values.
* Use `const` for fixed values.
* Avoid `var` (old style).
* Strings are in quotes, numbers are not.
* JavaScript can mix data types but sometimes behaves unexpectedly — test in **console** to understand it better!
