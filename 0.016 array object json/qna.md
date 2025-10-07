# 🧠 JavaScript Arrays, Objects & JSON – Practice Set

Test your skills with these exercises on Arrays, Objects, and JSON!

---

### Question 1 – Array Basics

1. Create an array of your 5 favorite fruits.
2. Print the first and last fruit.
3. Add a new fruit at the end.
4. Remove the first fruit.

### Question 2 – Array Methods

Given `let numbers = [10, 20, 30, 40];`

1. Use `map()` to create a new array with each number doubled.
2. Use `filter()` to get numbers greater than 25.
3. Use `forEach()` to print each number.

### Question 3 – Array Reference vs Copy

1. Create `let arr = [1,2,3];`
2. Assign `arr2 = arr` and push `4` into `arr2`.
3. Print `arr` and `arr2`. Why are both changed?
4. Create a copy using the spread operator and push `5`. Print both arrays.

### Question 4 – Object Basics

1. Create an object `student` with keys: `name`, `age`, `subjects` (array of 3 subjects).
2. Print the student name and second subject.
3. Add a new key `grade` and assign a value.
4. Update the age.

### Question 5 – Loop Through Object

Use a `for...in` loop to print all keys and values in the `student` object.

### Question 6 – JSON Basics

1. Create a `users.json` file containing 3 user objects with `username` and `password`.
2. Import the JSON file into your JS code.
3. Loop through the users and print each username.

### Question 7 – Update JSON Data (Node.js)

1. Import the `users.json` file.
2. Add a new user object.
3. Write the updated data back to the JSON file.

### Question 8 – Combined Practice

1. Create an array of objects, each object represents a student with `name`, `age`, `grade`.
2. Use `map()` to get an array of student names.
3. Filter students with age > 12.
4. Convert this array of objects to JSON string and print it.

---

**Tip:** Use `JSON.stringify()` to convert objects/arrays to JSON and `JSON.parse()` to convert JSON string to object/array.
