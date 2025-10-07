# JavaScript Modular Programming - Practice Set

### Question 1: Export and Import a Function

Create a file `mathUtils.js` that exports a function `add(a, b)` which returns the sum. Then, import it in `main.js` and display the result in console.

**Expected Output:**

```
Sum: 15
```

---

### Question 2: Export Multiple Functions

Create a module `calc.js` that exports two functions: `multiply(a, b)` and `divide(a, b)`. Import them in another file and use both.

**Expected Output:**

```
Multiply: 20
Divide: 2
```

---

### Question 3: Default Export

Make a file `message.js` that has a default exported function returning `"Hello Modular JS!"`. Import it and display the message.

**Expected Output:**

```
Hello Modular JS!
```

---

### Question 4: Export Variables and Functions

In `config.js`, export a variable `appName = 'MyApp'` and a function `showVersion()` that logs `"Version 1.0"`. Import both and run them.

**Expected Output:**

```
App: MyApp
Version 1.0
```

---

### Question 5: Renaming Imports

Create a file `user.js` that exports a function `getUser()`. Import it as `fetchUser` in another file and display output.

**Expected Output:**

```
User fetched successfully!
```

---

### Question 6: Import All as Object

Create `tools.js` exporting multiple functions like `sum`, `subtract`, and `multiply`. Import all as `tools` and use `tools.sum(5,5)` etc.

**Expected Output:**

```
Sum: 10
Subtract: 0
Multiply: 25
```

---

### Question 7: Mix Default and Named Export

In `helper.js`, default export a greeting function and named export a `farewell()` function. Import both and use them.

**Expected Output:**

```
Hello!
Goodbye!
```

---

### Question 8: Import JSON File

Create a `data.json` file with user info. Import it in JS and log the data.

```json
{
  "name": "Pramish",
  "age": 13,
  "language": "JavaScript"
}
```

**Expected Output:**

```
Name: Pramish
Age: 13
Language: JavaScript
```
