<!-- @format -->

# 0.019 JavaScript Functions

## What are Functions?

Think of functions as **reusable recipes** in programming! Just like you have a recipe for making tea that you can use multiple times, functions are blocks of code that you can use over and over again.

Imagine you have a friend who helps you with math calculations. Instead of doing the same calculation repeatedly, you just ask your friend "Can you calculate this for me?" - that's exactly what functions do in JavaScript!

## Why Do We Need Functions?

1. **Avoid Repetition**: Write code once, use it many times
2. **Organization**: Keep your code neat and organized
3. **Reusability**: Use the same code in different parts of your program
4. **Easier to Debug**: Fix problems in one place instead of many places

## Types of Functions

### 1. Regular Functions (Function Declaration)

This is the traditional way to create functions:

```javascript
function functionName() {
  // Code to execute
}
```

**Example:**

```javascript
function greetUser() {
  console.log("Hello! Welcome to our website!");
}

// Call the function
greetUser(); // Output: Hello! Welcome to our website!
```

### 2. Functions with Parameters

Functions can receive information (called parameters) to work with:

```javascript
function greetUserByName(name) {
  console.log("Hello " + name + "! Welcome to our website!");
}

// Call with different names
greetUserByName("Raj"); // Output: Hello Raj! Welcome to our website!
greetUserByName("Priya"); // Output: Hello Priya! Welcome to our website!
```

### 3. Functions that Return Values

Functions can give back (return) a result:

```javascript
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

let result = addTwoNumbers(5, 3);
console.log(result); // Output: 8
```

### 4. Arrow Functions (Modern Way)

Arrow functions are a shorter way to write functions:

```javascript
// Regular function
function multiply(a, b) {
  return a * b;
}

// Same function as arrow function
const multiply = (a, b) => {
  return a * b;
};

// Even shorter for simple functions
const multiply = (a, b) => a * b;
```

## Real-World Examples

### Example 1: Calculate GST

```javascript
function calculateGST(price, gstRate) {
  const gstAmount = (price * gstRate) / 100;
  const totalPrice = price + gstAmount;
  return totalPrice;
}

let itemPrice = 1000;
let finalPrice = calculateGST(itemPrice, 18);
console.log("Final price with GST: Rs " + finalPrice); // Rs 1180
```

### Example 2: Check Voting Eligibility

```javascript
function canVote(age) {
  if (age >= 18) {
    return "You can vote!";
  } else {
    return "You cannot vote yet. Wait " + (18 - age) + " more years.";
  }
}

console.log(canVote(20)); // You can vote!
console.log(canVote(16)); // You cannot vote yet. Wait 2 more years.
```

### Example 3: Convert Temperature

```javascript
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log(celsiusToFahrenheit(30)); // 86°F
console.log(fahrenheitToCelsius(86)); // 30°C
```

## Function Scope

Variables inside functions are **local** - they only exist inside that function:

```javascript
function myFunction() {
  let localVariable = "I'm only available inside this function";
  console.log(localVariable); // This works
}

// console.log(localVariable); // This would cause an error
```

## Common Function Patterns

### 1. Function Expression

```javascript
const sayHello = function (name) {
  return "Hello " + name;
};
```

### 2. Arrow Function Variations

```javascript
// With one parameter (parentheses optional)
const square = (x) => x * x;

// With no parameters
const getRandomNumber = () => Math.random();

// With multiple statements
const processData = (data) => {
  const processed = data.toUpperCase();
  return processed + "!";
};
```

## Best Practices

1. **Use descriptive names**: `calculateTotal()` instead of `calc()`
2. **Keep functions small**: One function should do one thing well
3. **Use comments**: Explain what complex functions do
4. **Return early**: Check for errors at the beginning

```javascript
function divide(a, b) {
  // Return early if division by zero
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }

  return a / b;
}
```

## Common Mistakes to Avoid

1. **Forgetting to call the function**: Defining a function doesn't run it

```javascript
function sayHi() {
  console.log("Hi!");
}
// This just defines the function, doesn't run it

sayHi(); // This actually runs the function
```

1. **Missing return statement**: If you want a value back, use `return`

```javascript
// Wrong
function add(a, b) {
  a + b; // This doesn't return anything
}

// Correct
function add(a, b) {
  return a + b;
}
```

## Interactive Examples

Check out the `index.html` file to see these concepts in action with interactive buttons and real-time demonstrations!

## Practice Questions

Head over to the `qna.md` file to practice what you've learned with hands-on exercises.

---

**Next:** After mastering functions, you'll learn about arrays and objects to store and organize your data!

---

Created by aakku106 - Making web development fun and accessible for everyone! 🚀
