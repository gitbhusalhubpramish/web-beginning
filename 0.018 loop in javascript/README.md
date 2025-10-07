# JavaScript Loops – Beginner-Friendly Lesson

Loops are used in JavaScript to **repeat a block of code multiple times** without writing it again and again.

---

## 1. Why Use Loops?

Imagine you want to print numbers from 1 to 10. Instead of writing 10 `console.log()` statements, you can use a loop to do it in just a few lines.

---

## 2. Types of Loops

### 🔹 2.1 `for` Loop

Used when you know how many times you want to repeat.

```js
for(let i = 1; i <= 5; i++) {
    console.log('Number: ' + i);
}
```

* `i = 1` → starting point
* `i <= 5` → condition to keep looping
* `i++` → increment after each loop

### 🔹 2.2 `while` Loop

Used when you want to repeat until a condition becomes false.

```js
let i = 1;
while(i <= 5) {
    console.log('Number: ' + i);
    i++;
}
```

### 🔹 2.3 `do...while` Loop

Executes the code **at least once** and then checks the condition.

```js
let i = 1;
do {
    console.log('Number: ' + i);
    i++;
} while(i <= 5);
```

### 🔹 2.4 `for...in` Loop

Used to loop **through object keys**.

```js
let student = {name: 'Pramish', age: 13};
for(let key in student) {
    console.log(key + ': ' + student[key]);
}
```

### 🔹 2.5 `for...of` Loop

Used to loop **through array values**.

```js
let fruits = ['Apple', 'Banana', 'Mango'];
for(let fruit of fruits) {
    console.log(fruit);
}
```

---

## 3. Break and Continue

* `break` → stops the loop entirely
* `continue` → skips the current iteration

```js
for(let i = 1; i <= 5; i++) {
    if(i === 3) continue; // skip 3
    console.log(i);
}
```

Output: 1, 2, 4, 5

```js
for(let i = 1; i <= 5; i++) {
    if(i === 3) break; // stop at 3
    console.log(i);
}
```

Output: 1, 2

---

## 4. Nested Loops

Loops inside loops.

```js
for(let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 2; j++) {
        console.log('i=' + i + ', j=' + j);
    }
}
```

Useful for tables, grids, and matrix operations.

---

## 5. Summary

* Loops reduce repetitive code.
* Choose the loop type depending on arrays, objects, or conditions.
* `break` and `continue` help control loop flow.
* Nested loops allow multi-level repetition.

Loops are one of the **most important tools in programming** because they help automate repetitive tasks efficiently.
