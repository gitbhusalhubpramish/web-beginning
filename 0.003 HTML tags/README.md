# Intro  

In the last lesson, you learned about the basic structure of an HTML file.  
In this lesson, you will learn about **HTML tags**.  

Did you notice something here?  

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
<img src="img/Screenshot (222) - Copy.png">

Whatever you write inside `<body>` and `</body>` will be shown on the screen.

**But have you ever wondered how some webpages display text inside boxes, or why some text appears smaller while others look bigger?**

*👉 This is done using tags. A **tag** is a **keyword** enclosed in angle brackets (`< >`) that **instructs the web browser** on how to **display or structure content** on a webpage.*

---

# Tags

**Tags** are the **building blocks of an HTML file**. They instruct the web browser on how to display content on a webpage.

There are **two types of tags in HTML**. We use different kinds of tags depending on our requirements and their features.

## Types of Tags

Tags can be divided into two categories in HTML based on their purpose and use.

### **Paired Tags (Container Tags):**

These tags have both an **opening tag** and a **closing tag**, enclosing content between them.
```html
<p>This is a paragraph.</p>
<div>This is a division.</div>
```

**Parts of a Paired Tag:**

- **Opening tag:** Marks the beginning of an element. It consists of the element’s name enclosed in angle brackets.

- **Closing tag:** Marks the end of an element. It consists of the element’s name preceded by `/` and enclosed in angle brackets.

<img src="img/tag parts.png">

--- 
## Types of Elements
### **Inline Elements**

**Inline elements** do not begin on a new line and only occupy the space necessary for their content.

**Key Characteristics of Inline Elements:**

- **No new line:** They do not force a line break before or after.

- **Content-dependent width:** They only take up the width required by their content.

- **Cannot contain block-level elements:** Inline elements are meant for marking up small portions of text.

- **Limited CSS styling:** Their width/height cannot be set directly, though margin, padding, and color can be applied.

**Common Examples of Inline Elements:**

- **`<a>` →** Creates hyperlinks.

- **`<strong>` and `<b>` →** Makes text bold (with `<strong>` showing importance).

- **`<em>` and `<i>` →** Italicizes text (with `<em>` showing emphasis).

- **`<span>` →** A generic inline container for styling or scripting.

- **`<img>`** → Embeds images.

- **`<input>`, `<label>`, `<select>`, `<textarea>` →** Form elements.

- **`<code>` →** Displays inline code snippets.

- **`<q>` →** Displays short inline quotations.

- **`<abbr>` →** Defines abbreviations.

Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    hello
    <span>this is a paragraph</span>
  </body>
</html>
```


Output:
<img src="img/Screenshot (228).png">


### **Block Elements**

**Block elements** always start on a new line and can have their width and height adjusted.

**Key Characteristics of Block Elements:**

- **Starts on a new line:** Creates a visual break from the previous content.

- **Takes full width:** By default, it occupies the entire horizontal space of its parent container.

- **Resizable:** Width and height can be set using CSS.

Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    hello
    <p>this is a paragraph</p>
  </body>
</html>
```


Output:
<img src="img/Screenshot (227).png">

**Note:**

- A **parent element** is an HTML element that directly **contains** other elements.
- A **child element** is an HTML element that is directly contained within another element. It is **"nested"** inside its parent.