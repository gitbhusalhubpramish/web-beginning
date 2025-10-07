# JavaScript - Introduction

Have you ever wondered how websites can **do interactive things** like showing messages, responding when you click buttons, or logging information?

That’s all done using **JavaScript (JS)**! It is a **programming language for the web** that makes websites **dynamic and interactive**.

Think of HTML as the **structure** (the skeleton), CSS as the **style** (the skin and clothes), and JavaScript as the **behavior** (the muscles that make things move).

---

## Step 1: Linking JavaScript to HTML

You can write JavaScript **inside HTML** or in a **separate file**.

### 1. Inline JavaScript

```html
<button onclick="alert('Hello!')">Click Me</button>
```

> Runs JS directly when the button is clicked.

### 2. Internal JavaScript

```html
<script>
  alert('Welcome to my website!');
</script>
```

> Put JS inside `<script>` tags in your HTML file.

### 3. External JavaScript

Create a separate file `script.js`:

```javascript
alert('Hello from external file!');
```

Then link it in HTML:

```html
<script src="script.js"></script>
```

> Always place the `<script>` tag **before closing `</body>`** so the HTML loads first.

---

## Step 2: Writing Basic JavaScript Functions

### 1. Alert Pop-up

```javascript
alert('Hello! Welcome to JavaScript!');
```

> Shows a pop-up message to the user.

### 2. Console Log

```javascript
console.log('This message is shown in the console');
```

> Prints a message in the browser console. Useful for debugging.

### 3. Prompt

```javascript
let name = prompt('Enter your name:');
alert('Hello ' + name);
```

> Ask the user for input and show it back.

### 4. Confirm

```javascript
let result = confirm('Are you sure?');
console.log(result); // true if OK, false if Cancel
```

> Ask for confirmation, returns true or false.

---

## Step 3: Viewing Console in Browser

1. Open your website in a browser (Chrome, Firefox, Edge).
2. Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac).
3. Go to the **Console** tab.
4. Type `console.log('Hello')` to see messages.

> This is how developers check errors and see outputs.

---

## Step 4: Running JavaScript with Node.js

Sometimes you want to run JS **outside the browser**. Node.js allows that.

### How to download Node.js

1. Go to [https://nodejs.org](https://nodejs.org).
2. Download the **LTS (Long Term Support)** version.
3. Install it on your computer.

### Running JS in Node.js

1. Open **terminal or command prompt**.
2. Type `node` to enter Node.js REPL.
3. Type:

```javascript
console.log('Hello from Node.js');
```

4. Press Enter and see the output.

You can also create a file `app.js`:

```javascript
console.log('Hello World');
```

Then run:

```
node app.js
```

---

JavaScript is **super important** for making websites interactive and fun.

Try creating simple alerts, console messages, prompts, confirms, and linking JS files to HTML to get started!
