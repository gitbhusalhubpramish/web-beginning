# JavaScript Q&A - Beginner Friendly Exercises

Here are some **real-world beginner-friendly exercises** to practice basic JavaScript concepts like alerts, console, prompts, confirm, and linking JS files.

---

## 1. Alert Message

**Question:** Create a webpage with a button that shows an alert saying **'Hello, welcome to my website!'** when clicked.

**Answer:**

```html
<button onclick="alert('Hello, welcome to my website!')">Click Me</button>
```

---

## 2. Console Log

**Question:** Write a JavaScript function that logs **'Button Clicked!'** in the browser console when a button is clicked.

**Answer:**

```html
<button id="btn">Click Me</button>
<script>
  document.getElementById('btn').onclick = function() {
    console.log('Button Clicked!');
  };
</script>
```

---

## 3. Prompt User Input

**Question:** Ask the user for their name and then show an alert **'Hello [Name]!'**

**Answer:**

```javascript
let name = prompt('Enter your name:');
alert('Hello ' + name + '!');
```

---

## 4. Confirm Action

**Question:** Ask the user **'Do you want to continue?'** using confirm and log **true** if OK is pressed or **false** if Cancel is pressed.

**Answer:**

```javascript
let result = confirm('Do you want to continue?');
console.log(result); // true or false
```

---

## 5. External JS File

**Question:** Create an external JS file that shows an alert **'This is from external file!'** and link it to your HTML.

**Answer:**
**script.js:**

```javascript
alert('This is from external file!');
```

**index.html:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>External JS Example</title>
</head>
<body>
  <script src="script.js"></script>
</body>
</html>
```

---

## 6. Console Practice

**Question:** Write a program that logs **'Page Loaded'** in the console when the page loads.

**Answer:**

```html
<script>
  window.onload = function() {
    console.log('Page Loaded');
  };
</script>
```

---

These exercises help beginners practice **basic JavaScript functions, pop-ups, console logging, and file linking** to HTML.
