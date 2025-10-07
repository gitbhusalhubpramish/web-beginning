# JavaScript Arrays, Objects & JSON

In JavaScript, besides primary data types like numbers and strings, we have **non-primary data types** like arrays, objects, and JSON to store and manage multiple values efficiently.

---

## 1. Arrays – Storing Multiple Values

If you have many values, you **won’t make a separate variable for each**. Arrays let you store multiple values in **one variable**.

```js
let numbers = [2, 4, 10, 5, 15, 3];
```

### Indexing

Each value is stored at an **index** starting from `0`. You can access a value using its index.

```js
console.log(numbers[0]); // 2
console.log(numbers[3]); // 5
```

<img src = "img/array.png">


### Array Methods

* `push()` → add at the end
* `pop()` → remove last
* `unshift()` → add at start
* `shift()` → remove first
* `map()`, `filter()`, `forEach()` → for logic and looping

### Reference vs Copy

```js
let arr = [1,2,3];
let arr2 = arr; // same memory
arr2.push(4);
console.log(arr);  // [1,2,3,4]
console.log(arr2); // [1,2,3,4]

let arr3 = [...arr]; // copy
arr3.push(5);
console.log(arr);  // [1,2,3,4]
console.log(arr3); // [1,2,3,4,5]
```

---

## 2. Objects – Key & Value Storage

Objects are similar to arrays but instead of **indexing**, they use **key-value pairs**. You can also have arrays **inside objects**.

```js
let student = {
  name: "Pramish",
  age: 13,
  subjects: ["Math", "Science"]
};

console.log(student.name);       // Pramish
console.log(student.subjects[1]); // Science
```

### Adding/Updating

```js
student.grade = 8;    // add new key
student.age = 14;     // update value
```

---

## 3. JSON – Storing Data for Websites

Websites often need to store user info like **username and password** in a structured way. JSON is used for this and is also a **file extension** (`.json`).

```js
let jsonData = '{"username": "Pramish", "password": "1234"}';
let obj = JSON.parse(jsonData);
console.log(obj.username); // Pramish
```

### Convert Object ↔ JSON

```js
let user = { username: "Pramish", password: "1234" };
let jsonString = JSON.stringify(user); // Object -> JSON string
let obj2 = JSON.parse(jsonString);    // JSON string -> Object
```

### Working with JSON Files

**Browser:** fetch JSON data from server

```js
fetch('users.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

**Node.js:** read only
```js
const data = require('data.json')
let users = JSON.parse(data)
console.log(users) // dispaly data
```

**Node.js:** read/write/update JSON file

```js
const fs = require('fs');
let data = fs.readFileSync('users.json');
let users = JSON.parse(data);
users.push({ username: 'newUser', password: 'abcd' });
fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
```

---

## Summary

* **Array** → stores multiple values; use index to access.
* **Object** → key-value pairs; can include arrays.
* **JSON** → stores structured data for websites; also a file extension.
* These help manage large data efficiently without creating multiple variables.
