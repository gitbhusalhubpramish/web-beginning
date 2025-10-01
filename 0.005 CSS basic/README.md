# INTRO  

In the last chapter, we learned about **HTML**.  
Now we are going to learn about **CSS**.  

Remember in the second chapter we discussed that *HTML is the structure* and *CSS is used for designing or making the website look good*.  
From this chapter, let’s **deep dive into CSS**.  

# Introduction  

**CSS** stands for *Cascading Style Sheets*.  
It is used for designing and adding styles to a webpage.  
It is **not** a programming language.  

---

## How to use CSS  

There are several methods to use or add CSS in our HTML.  

---

### **1. Using the `<style>` tag**  

There is a `<style>` tag in HTML where we can write CSS, as shown below:  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Example</title>
  <style>
    .container {
      margin: 10px; 
      background-color: lightyellow;
      height: 100px;
      width: 100px;
    }
    .box {
      margin: 10px; 
      background-color: aqua;
      height: 50px;
      width: 50px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box"></div>
  </div>
</body>
</html>
```

Explanation:

- **`<style>` →** A tag inside which we can write CSS (similar to writing in a .css file but inside the HTML file).

- **`.container { ... }` and `.box { ... }` →**These are CSS selectors. All elements with class container will take the styles inside .container { ... }, and similarly for .box.

- **`margin: 10px;` →** Adds a gap of 10 pixels around the element.

- **`background-color:` →** Adds a background color to the element. (Note: color adds text color, while background-color colors the entire box.)

- **`height:` and `width:`** → Resizes the element’s height and width.

### **2. Using the `style` attribute**

There is a `style` attribute in HTML tags where we can directly add CSS.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Example</title>
</head>
<body>
  <div style="margin: 10px; background-color: lightyellow; height: 100px; width: 100px;">
    <div style="margin: 10px; background-color: aqua; height: 50px; width: 50px;"></div>
  </div>
</body>
</html>
```

**Explanation:**

- **`<div style="...">` →** We can write CSS directly inside the quotes `"..."`.

- This method is simple but not *recommended* for large projects.

### **3. Using a separate CSS file**

We can link a `.css` file with our HTML file.
This is the most common method since it separates **structure (HTML)** from **design (CSS).**

**`index.html`:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="box"></div>
  </div>
</body>
</html>
```


`styles.css`:
```css
.container {
  margin: 10px; 
  background-color: lightyellow;
  height: 100px;
  width: 100px;
}
.box {
  margin: 10px; 
  background-color: aqua;
  height: 50px;
  width: 50px;
}
```

**Explanation:**

- **`<link rel="stylesheet" href="styles.css">` →**Links the HTML file with the styles.css file.

- **`rel="stylesheet"`** tells the browser that it’s a CSS file.

- **`href="styles.css"`** specifies the CSS file path.

**Output**

Even though CSS is written in a separate file, the output will look the same as the earlier examples:

<img src="img/Screenshot (229).png"> 