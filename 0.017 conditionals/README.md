<!-- @format -->

# Intro

So far, we've learned about basic JavaScript concepts. But what if you want your code to make decisions?

_What if you want to show different messages to users based on their age?_

_What if you want to display "Good Morning" before 12 PM and "Good Evening" after 6 PM?_

_What if you want to check if a user entered the correct password?_

This is where **Conditionals** come in! They're like the decision-making brain of your code.

Think of conditionals like traffic lights:

- **If** the light is green → Go
- **Else if** the light is yellow → Slow down
- **Else** (if it's red) → Stop

Your code can make similar decisions based on different conditions.

---

## What are Conditionals?

**Conditionals** are statements that perform different actions based on whether a condition is `true` or `false`.

They help your program make decisions and execute different code blocks depending on certain conditions.

**Basic Structure:**

```javascript
if (condition) {
  // Code runs if condition is true
} else {
  // Code runs if condition is false
}
```

---

## The `if` Statement

The `if` statement executes code **only if** a condition is true.

**Syntax:**

```javascript
if (condition) {
  // Code to run if condition is true
}
```

**Example:**

```javascript
let age = 18;

if (age >= 18) {
  console.log("You can vote!");
}
```

**Real-world Example:**

```javascript
let weather = "sunny";

if (weather === "sunny") {
  console.log("Let's go to the beach!");
}
```

---

## The `else` Statement

The `else` statement runs code when the `if` condition is **false**.

**Syntax:**

```javascript
if (condition) {
  // Code if condition is true
} else {
  // Code if condition is false
}
```

**Example:**

```javascript
let age = 16;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You're too young to vote.");
}
```

**Real-world Example:**

```javascript
let password = "secret123";

if (password === "mypassword") {
  console.log("Login successful!");
} else {
  console.log("Wrong password!");
}
```

---

## The `else if` Statement

What if you have **multiple conditions** to check? Use `else if`!

**Syntax:**

```javascript
if (condition1) {
  // Code if condition1 is true
} else if (condition2) {
  // Code if condition2 is true
} else {
  // Code if all conditions are false
}
```

**Example:**

```javascript
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

**Time-based Example:**

```javascript
let hour = 14; // 2 PM

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}
```

---

## Comparison Operators

To create conditions, you need **comparison operators**:

| Operator | Meaning               | Example             |
| -------- | --------------------- | ------------------- |
| `===`    | Equal to              | `age === 18`        |
| `!==`    | Not equal to          | `name !== "John"`   |
| `>`      | Greater than          | `score > 90`        |
| `<`      | Less than             | `price < 100`       |
| `>=`     | Greater than or equal | `age >= 21`         |
| `<=`     | Less than or equal    | `temperature <= 32` |

**Examples:**

```javascript
let temperature = 25;

if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature < 10) {
  console.log("It's cold!");
} else {
  console.log("Nice weather!");
}
```

---

## Logical Operators

You can combine multiple conditions using **logical operators**:

### `&&` (AND) - Both conditions must be true

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive!");
}
```

### `||` (OR) - At least one condition must be true

```javascript
let day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's weekend!");
}
```

### `!` (NOT) - Reverses the condition

```javascript
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in first.");
}
```

**Complex Example:**

```javascript
let age = 20;
let hasTicket = true;
let vipMember = false;

if ((age >= 18 && hasTicket) || vipMember) {
  console.log("Welcome to the concert!");
} else {
  console.log("Sorry, you can't enter.");
}
```

---

## The `switch` Statement

When you have **many conditions** to check against the **same variable**, `switch` can be cleaner than multiple `else if` statements.

**Syntax:**

```javascript
switch (variable) {
  case value1:
    // Code for value1
    break;
  case value2:
    // Code for value2
    break;
  default:
  // Code if no cases match
}
```

**Example:**

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week!");
    break;
  case "Tuesday":
    console.log("Tuesday blues!");
    break;
  case "Wednesday":
    console.log("Hump day!");
    break;
  case "Thursday":
    console.log("Almost Friday!");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Invalid day");
}
```

### Important: The `break` Statement

Without `break`, the code will **fall through** to the next case:

```javascript
let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good job!");
  // Missing break! Will also run case "C"
  case "C":
    console.log("Not bad");
    break;
  default:
    console.log("Keep trying!");
}
// Output: "Good job!" AND "Not bad"
```

---

## Practical Examples

_Note: The following examples use simple variables and conditional logic. We'll learn about functions in a later lesson!_

### 1. **Age Category Checker**

```javascript
let age = 25;
let category;

if (age < 13) {
  category = "Child";
} else if (age < 20) {
  category = "Teenager";
} else if (age < 60) {
  category = "Adult";
} else {
  category = "Senior";
}

console.log(category); // "Adult"
```

### 2. **Simple Calculator**

```javascript
let num1 = 10;
let operator = "+";
let num2 = 5;
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    result = "Invalid operator";
}

console.log(result); // 15
```

### 3. **Password Strength Checker**

```javascript
let password = "abc123";
let strength;

if (password.length < 6) {
  strength = "Weak: Too short";
} else if (password.length < 10) {
  strength = "Medium: Good length";
} else {
  strength = "Strong: Great length";
}

console.log(strength); // "Medium: Good length"
```

### 4. **Weather Clothing Advisor**

```javascript
let temperature = 20;
let isRaining = false;
let advice;

if (isRaining) {
  advice = "Take an umbrella and wear a jacket!";
} else if (temperature > 25) {
  advice = "Wear light clothes, it's warm!";
} else if (temperature > 15) {
  advice = "A light jacket should be fine.";
} else {
  advice = "Bundle up, it's cold!";
}

console.log(advice); // "A light jacket should be fine."
```

---

## Common Mistakes to Avoid

### 1. **Using `=` instead of `===`**

```javascript
// ❌ Wrong - Assignment, not comparison
if ((age = 18)) {
  console.log("Adult");
}

// ✅ Correct - Comparison
if (age === 18) {
  console.log("Adult");
}
```

### 2. **Forgetting `break` in switch**

```javascript
// ❌ Will run multiple cases
switch (day) {
  case "Monday":
    console.log("Monday");
  case "Tuesday":
    console.log("Tuesday"); // This will also run!
}

// ✅ Use break
switch (day) {
  case "Monday":
    console.log("Monday");
    break;
  case "Tuesday":
    console.log("Tuesday");
    break;
}
```

### 3. **Unreachable code**

```javascript
// ❌ The second condition will never run
if (age > 18) {
  console.log("Adult");
} else if (age > 16) {
  // This is unreachable if age > 18
  console.log("Can drive");
}

// ✅ Order conditions correctly
if (age > 18) {
  console.log("Adult");
} else if (age > 16) {
  console.log("Can drive but not adult");
}
```

---

## When to Use What?

| Use Case                | Best Choice                 | Why                              |
| ----------------------- | --------------------------- | -------------------------------- |
| **Simple true/false**   | `if/else`                   | Clean and readable               |
| **Multiple conditions** | `else if`                   | Clear flow of logic              |
| **Many exact values**   | `switch`                    | More organized than many else-if |
| **Complex logic**       | `if` with logical operators | More flexible                    |

---

## Quick Reference

```javascript
// Basic if
if (condition) {
  /* code */
}

// If-else
if (condition) {
  /* code */
} else {
  /* code */
}

// Multiple conditions
if (condition1) {
  /* code */
} else if (condition2) {
  /* code */
} else {
  /* code */
}

// Switch
switch (variable) {
  case value1:
    /* code */
    break;
  case value2:
    /* code */
    break;
  default:
  /* code */
}

// Logical operators
if (condition1 && condition2) {
  /* AND */
}
if (condition1 || condition2) {
  /* OR */
}
if (!condition) {
  /* NOT */
}
```

---

## Tips for Beginners

1. **Start simple** → Begin with basic `if/else` before moving to complex conditions
2. **Use clear variable names** → `isLoggedIn` is better than `logged`
3. **Test your logic** → Use `console.log()` to check what's happening
4. **Don't nest too deep** → Too many nested `if` statements can be confusing
5. **Consider switch for many exact matches** → Cleaner than long `else if` chains

**Next up:** We'll learn about loops to repeat code multiple times!

---

_This section was created by [aakku106](https://github.com/aakku106)_
