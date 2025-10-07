# JavaScript Variables & Data Types – Practice Set with Answers

Let’s test what you learned! Predict outputs, check if variable names are valid, and understand how JavaScript handles types.

---

### Question 1 – Valid or Invalid Variable Names

Check if the following are valid JavaScript variable names:

| Variable                  | Valid/Invalid | Reason                                        |
| ------------------------- | ------------- | --------------------------------------------- |
| `let 1name = "Pramish"`   | ❌ Invalid     | Variable names cannot start with a number.    |
| `let first_name = "John"` | ✅ Valid       | Underscore is allowed.                        |
| `let full-name = "Hello"` | ❌ Invalid     | Hyphen is not allowed (it means subtraction). |
| `let $count = 5`          | ✅ Valid       | `$` is allowed in names.                      |
| `let let = 10`            | ❌ Invalid     | `let` is a reserved keyword.                  |

---

### Question 2 – Predict the Output

```html
<script>
  let x = 5;
  let y = "5";
  console.log(x + y);
</script>
```

**Output:** `55`
**Explanation:** When a number is added to a string, JavaScript converts the number to a string — so it becomes string concatenation.

---

### Question 3 – Type Checking

```html
<script>
  let city = "Kathmandu";
  console.log(typeof city);
</script>
```

**Output:** `string`
**Explanation:** `typeof` shows the data type; `city` holds text data, so it’s a string.

---

### Question 4 – Const Behavior

```html
<script>
  const country = "Nepal";
  country = "India";
  console.log(country);
</script>
```

**Output:** Error
**Explanation:** You can’t reassign a `const` variable after it’s declared.

---

### Question 5 – String + Number

```html
<script>
  let a = "2";
  let b = 3;
  console.log(a * b);
</script>
```

**Output:** `6`
**Explanation:** `*` converts strings to numbers when possible.

---

### Question 6 – Logical Test

```html
<script>
  let rain = true;
  let sunny = false;
  console.log(rain && sunny);
</script>
```

**Output:** `false`
**Explanation:** `&&` (AND) gives true only if both conditions are true.

---

### Question 7 – Variable Type Mixing

```html
<script>
  let text = "Hello";
  let number = 10;
  console.log(text + number);
</script>
```

**Output:** `Hello10`
**Explanation:** Adding a string with a number results in concatenation.

---

### Question 8 – Redeclaring Variables

```html
<script>
  let score = 90;
  let score = 100;
  console.log(score);
</script>
```

**Output:** Error
**Explanation:** `let` cannot be redeclared in the same scope.

---

### Question 9 – const Object

```html
<script>
  const person = { name: "Pramish", age: 13 };
  person.age = 14;
  console.log(person);
</script>
```

**Output:** `{ name: "Pramish", age: 14 }`
**Explanation:** You can change object properties, but not reassign the object itself.

---

### Question 10 – typeof null

```html
<script>
  console.log(typeof null);
</script>
```

**Output:** `object`
**Explanation:** A long-time JavaScript bug — `null` shows as an object, but it’s actually a primitive type.
