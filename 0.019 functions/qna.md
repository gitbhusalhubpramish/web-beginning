<!-- @format -->

# JavaScript Functions - Practice Questions & Answers

## Theory Questions

### 1. What is a function in JavaScript?

**Answer:** A function is a reusable block of code that performs a specific task. It's like a recipe that you can use multiple times by calling its name. Functions help us avoid repeating code and make our programs more organized.

### 2. What are the two main ways to create functions in JavaScript?

**Answer:**

- **Function Declaration:** `function functionName() { /* code */ }`
- **Arrow Function:** `const functionName = () => { /* code */ }`

### 3. What is the difference between parameters and arguments?

**Answer:**

- **Parameters** are the variables listed in the function definition
- **Arguments** are the actual values passed to the function when calling it

Example:

```javascript
function greet(name) {
  // 'name' is a parameter
  return "Hello " + name;
}

greet("Raj"); // "Raj" is an argument
```

### 4. What are async/await functions?

**Answer:** Async/await functions are used when you need to wait for something to complete (like loading data from the internet).

- `async` keyword makes a function asynchronous (can wait for things)
- `await` keyword pauses the function until a task completes

**Real-life analogy:** It's like ordering food online - you place the order (start), do other things (continue), and get notified when it arrives (await result).

**Example:**

```javascript
async function loadUserData() {
  console.log("Loading...");
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds
  console.log("Data loaded!");
}
```

**When to use:**

- Fetching data from APIs
- Reading files
- Database operations
- Any task that takes time

## Practical Exercises

### Exercise 1: Create Your First Function

**Task:** Write a function called `introduction` that returns your name and age.

**Solution:**

```javascript
function introduction() {
  return "Hi, I'm Priya and I'm 22 years old!";
}

// Call the function
console.log(introduction());
```

### Exercise 2: Function with Parameters

**Task:** Create a function `calculateArea` that takes length and width as parameters and returns the area of a rectangle.

**Solution:**

```javascript
function calculateArea(length, width) {
  return length * width;
}

// Test the function
console.log(calculateArea(5, 3)); // Output: 15
console.log(calculateArea(10, 7)); // Output: 70
```

### Exercise 3: Arrow Function Practice

**Task:** Convert this regular function to an arrow function:

```javascript
function multiply(a, b) {
  return a * b;
}
```

**Solution:**

```javascript
const multiply = (a, b) => a * b;

// Or with curly braces for clarity
const multiply = (a, b) => {
  return a * b;
};
```

### Exercise 4: Simple Calculator

**Task:** Create functions for basic math operations: add, subtract, multiply, and divide.

**Solution:**

```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero!";
  }
  return a / b;
}

// Test the functions
console.log(add(10, 5)); // 15
console.log(subtract(10, 5)); // 5
console.log(multiply(10, 5)); // 50
console.log(divide(10, 5)); // 2
console.log(divide(10, 0)); // Error: Cannot divide by zero!
```

### Exercise 5: Grade Calculator

**Task:** Write a function that takes a percentage and returns the corresponding grade:

- 90-100: A+
- 80-89: A
- 70-79: B
- 60-69: C
- Below 60: F

**Solution:**

```javascript
function calculateGrade(percentage) {
  if (percentage >= 90) {
    return "A+";
  } else if (percentage >= 80) {
    return "A";
  } else if (percentage >= 70) {
    return "B";
  } else if (percentage >= 60) {
    return "C";
  } else {
    return "F";
  }
}

// Test the function
console.log(calculateGrade(95)); // A+
console.log(calculateGrade(85)); // A
console.log(calculateGrade(75)); // B
console.log(calculateGrade(65)); // C
console.log(calculateGrade(45)); // F
```

### Exercise 6: Indian Currency Formatter

**Task:** Create a function that formats numbers as Indian currency (with Rs symbol and commas).

**Solution:**

```javascript
function formatCurrency(amount) {
  return "Rs " + amount.toLocaleString("en-IN");
}

// Arrow function version
const formatCurrencyArrow = (amount) => "Rs " + amount.toLocaleString("en-IN");

// Test the function
console.log(formatCurrency(1000)); // Rs 1,000
console.log(formatCurrency(100000)); // Rs 1,00,000
console.log(formatCurrency(1000000)); // Rs 10,00,000
```

### Exercise 7: Age Category Function

**Task:** Write a function that categorizes people by age:

- 0-12: Child
- 13-19: Teenager
- 20-59: Adult
- 60+: Senior

**Solution:**

```javascript
function categorizeAge(age) {
  if (age >= 0 && age <= 12) {
    return "Child";
  } else if (age >= 13 && age <= 19) {
    return "Teenager";
  } else if (age >= 20 && age <= 59) {
    return "Adult";
  } else if (age >= 60) {
    return "Senior";
  } else {
    return "Invalid age";
  }
}

// Test the function
console.log(categorizeAge(8)); // Child
console.log(categorizeAge(16)); // Teenager
console.log(categorizeAge(30)); // Adult
console.log(categorizeAge(65)); // Senior
```

### Exercise 8: Discount Calculator

**Task:** Create a function that calculates the discounted price. If the original price is above Rs 1000, apply a 10% discount.

**Solution:**

```javascript
function calculateDiscount(originalPrice) {
  if (originalPrice > 1000) {
    const discount = originalPrice * 0.1;
    const finalPrice = originalPrice - discount;
    return {
      originalPrice: originalPrice,
      discount: discount,
      finalPrice: finalPrice,
      message: "10% discount applied!",
    };
  } else {
    return {
      originalPrice: originalPrice,
      discount: 0,
      finalPrice: originalPrice,
      message: "No discount applicable",
    };
  }
}

// Test the function
console.log(calculateDiscount(1500));
// Output: { originalPrice: 1500, discount: 150, finalPrice: 1350, message: "10% discount applied!" }

console.log(calculateDiscount(800));
// Output: { originalPrice: 800, discount: 0, finalPrice: 800, message: "No discount applicable" }
```

### Exercise 9: Palindrome Checker

**Task:** Write a function to check if a word is a palindrome (reads the same forwards and backwards).

**Solution:**

```javascript
function isPalindrome(word) {
  // Convert to lowercase for case-insensitive comparison
  const lowerWord = word.toLowerCase();
  // Reverse the word
  const reversedWord = lowerWord.split("").reverse().join("");
  // Check if original equals reversed
  return lowerWord === reversedWord;
}

// Arrow function version
const isPalindromeArrow = (word) => {
  const lowerWord = word.toLowerCase();
  return lowerWord === lowerWord.split("").reverse().join("");
};

// Test the function
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("Madam")); // true
```

### Exercise 10: Restaurant Bill Calculator

**Task:** Create a function that calculates the total bill including tip. The function should take the bill amount and tip percentage as parameters.

**Solution:**

```javascript
function calculateBill(amount, tipPercentage) {
  const tipAmount = (amount * tipPercentage) / 100;
  const totalBill = amount + tipAmount;

  return {
    originalAmount: amount,
    tipPercentage: tipPercentage,
    tipAmount: tipAmount.toFixed(2),
    totalBill: totalBill.toFixed(2),
  };
}

// Test the function
const bill1 = calculateBill(500, 15);
console.log("Original Amount: Rs " + bill1.originalAmount);
console.log("Tip (15%): Rs " + bill1.tipAmount);
console.log("Total Bill: Rs " + bill1.totalBill);

const bill2 = calculateBill(1200, 20);
console.log("Original Amount: Rs " + bill2.originalAmount);
console.log("Tip (20%): Rs " + bill2.tipAmount);
console.log("Total Bill: Rs " + bill2.totalBill);
```

## Challenge Questions

### Challenge 1: Fibonacci Sequence

**Task:** Write a function that returns the nth number in the Fibonacci sequence.

**Solution:**

```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// Test the function
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
```

### Challenge 2: Prime Number Checker

**Task:** Create a function that checks if a number is prime.

**Solution:**

```javascript
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Test the function
console.log(isPrime(2)); // true
console.log(isPrime(17)); // true
console.log(isPrime(25)); // false
console.log(isPrime(29)); // true
```

### Challenge 3: Async/Await - Fetch User Profile

**Task:** Create an async function that simulates fetching a user profile with a 2-second delay.

**Solution:**

```javascript
// Simulate fetching user data
async function fetchUserProfile(userId) {
  console.log("Fetching user profile...");

  // Wait for 2 seconds (simulating API call)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Return user data
  return {
    id: userId,
    name: "Raj Kumar",
    age: 25,
    email: "raj@example.com",
  };
}

// Using the async function
async function displayProfile() {
  const user = await fetchUserProfile(123);
  console.log("User Name:", user.name);
  console.log("User Email:", user.email);
}

displayProfile();
// Output (after 2 seconds):
// Fetching user profile...
// User Name: Raj Kumar
// User Email: raj@example.com
```

### Challenge 4: Async/Await - Multiple API Calls

**Task:** Create functions that simulate fetching weather and news, then display both together.

**Solution:**

```javascript
// Simulate fetching weather
async function getWeather(city) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    city: city,
    temp: "25°C",
    condition: "Sunny",
  };
}

// Simulate fetching news
async function getNews() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return [
    "Breaking: New JavaScript features released!",
    "Tech: AI advances continue",
    "Sports: Cricket match today",
  ];
}

// Fetch both and display
async function getDashboardData(city) {
  console.log("Loading dashboard...");

  // Wait for both to complete
  const weather = await getWeather(city);
  const news = await getNews();

  console.log("Weather:", weather.temp, weather.condition);
  console.log("Top News:", news[0]);
  console.log("Dashboard loaded!");
}

getDashboardData("Mumbai");
// Output (after ~2.5 seconds):
// Loading dashboard...
// Weather: 25°C Sunny
// Top News: Breaking: New JavaScript features released!
// Dashboard loaded!
```

### Challenge 5: Error Handling in Async Functions

**Task:** Create an async function that handles errors properly using try-catch.

**Solution:**

```javascript
async function fetchDataWithErrorHandling(url) {
  try {
    console.log("Fetching data from:", url);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate error for invalid URL
    if (!url.startsWith("https://")) {
      throw new Error("Invalid URL - must start with https://");
    }

    return { data: "Success! Data loaded." };
  } catch (error) {
    console.error("Error:", error.message);
    return { error: error.message };
  }
}

// Test with valid URL
async function test() {
  const result1 = await fetchDataWithErrorHandling("https://api.example.com");
  console.log(result1); // { data: "Success! Data loaded." }

  const result2 = await fetchDataWithErrorHandling("http://invalid.com");
  console.log(result2); // { error: "Invalid URL - must start with https://" }
}

test();
```

## Quick Practice Tips

1. **Start Simple**: Begin with functions that don't take parameters
2. **Add Parameters**: Gradually create functions that accept input
3. **Return Values**: Practice functions that calculate and return results
4. **Error Handling**: Add checks for invalid input
5. **Real-World Examples**: Create functions for everyday calculations

## Common Mistakes to Avoid

1. **Forgetting parentheses when calling functions**

   ```javascript
   // Wrong
   myFunction;

   // Correct
   myFunction();
   ```

2. **Missing return statement**

   ```javascript
   // Wrong - doesn't return anything
   function add(a, b) {
     a + b;
   }

   // Correct
   function add(a, b) {
     return a + b;
   }
   ```

3. **Not handling edge cases**
   ```javascript
   // Better function with error handling
   function divide(a, b) {
     if (b === 0) {
       return "Error: Division by zero";
     }
     return a / b;
   }
   ```

---

## Next Steps

After mastering functions, you'll be ready to learn about:

- Arrays (storing multiple values)
- Objects (organizing related data)
- Loops (repeating actions)
- DOM manipulation (making web pages interactive)

Keep practicing these exercises and try creating your own functions for everyday problems!

---

Created by [aakku106](https://github.com/aakku106) - Making JavaScript accessible for everyone! 🚀
