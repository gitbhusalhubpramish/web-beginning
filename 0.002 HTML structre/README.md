# Part of a Website

HTML is known as the **structure of a website** or the **skeleton of a website**.
CSS is used for **designing** or **styling**. It makes the website **good-looking** and **colorful**.
JavaScript is used to make the website **functional**. It is also known as the **brain** of a website.

<img src="./comparison+of+HTML+and+CSS+and+JS.png">


As shown in the image:

- HTML = **Skeleton** (man)
- CSS = **Appearance** (skin)
- JavaScript = **Brain** (functionality)

---
# Introduction to HTML

HTML stands for **HyperText Markup Language**.
It is used to **insert text, elements, images**, etc. into a webpage.

⚠️ **Note**: HTML is **not** a programming language; it is a **markup language**.

Here’s a basic HTML program that prints `Hello, World!` on the screen:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    Hello, World!
  </body>
</html>
```

<img src="Screenshot (222) - Copy.png">

## Explanation:

- `<!DOCTYPE html`> → Declares the document type and version of HTML being used.

- `<html>` → Root element that encloses all HTML elements.

- `<head>` → Contains meta-information (title, stylesheets, scripts).

- `<title>` → Title of the web page (shown in the browser’s title bar/tab).

- `<body>` → Contains the visible content (text, images, links, etc.).

Here’s the labeled output with tags:

<img src="./Screenshot (222).png">

---

# Comments in HTML

Comments exist in **every programming language**.
They are ignored by the **compiler/interpreter** and used by programmers to **describe code without affecting the output**.

In HTML, we write comments using `<!-- ... -->`.

Example:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <!-- This is a comment -->
    Hello, World!
  </body>
</html>
```


👉 The line `<!-- This is a comment -->` will be ignored, and only `Hello, World!` will be shown.
