# Intro

In the previous lesson, we were introduced to **CSS**. In this lesson, we are going to dive deeper into some basic CSS concepts — **selectors** and **styling**.

---

# Selector

Let's say we want to apply rules to a class, an ID, a tag, or even when an element is hovered or clicked. This is where **selectors** come in.

A **CSS selector** is a pattern used to select the HTML elements to which a set of CSS rules will be applied.

**Example:**
If I want to make all elements with the class name `important` red in font color:

```css
.important {
  color: red;
}
```

---

## Types of Selectors

* **Universal Selector (`*`)**
  Selects **all elements** on a page.
  Example: making every element have a red background.

```css
* {
  background-color: red;
}
```

* **Type (Element) Selector**
  Selects all elements of a specific HTML tag.
  Example: making all `<p>` elements have a red background.

```css
p {
  background-color: red;
}
```

* **Class Selector (`.`)**
  Selects elements with a specific class attribute.
  Example: making all elements with the class `my-class` red in background.

```css
.my-class {
  background-color: red;
}
```

* **ID Selector (`#`)**
  Selects a single element with a specific ID attribute. IDs must be unique within a document.
  Example: making the element with the ID `my-id` red in background.

```css
#my-id {
  background-color: red;
}
```

* **Attribute Selector (`[]`)**
  Selects elements based on the presence or value of an attribute.
  Example: making input boxes with `type="text"` red in background.

```css
[type="text"] {
  background-color: red;
}
```

* **Child Selector (`>`)**
  Selects an element that is a **direct child** of another element.
  Example: making all direct `<li>` children of `<ul>` red in background.

```css
ul > li {
  background-color: red;
}
```

---

## Selector Specificity (Value)

When multiple CSS rules target the same element, the **specificity** decides which rule wins. The higher the specificity, the more priority it has.

**Specificity order (from highest to lowest):**

1. **`!important`** → Overrides everything (but should be avoided when possible).
2. **ID Selector (`#id`)**
3. **Class, Attribute, and Pseudo-class Selectors (`.class`, `[attr]`, `:hover`)**
4. **Type (Element) Selectors (`p`, `h1`, `div`)**
5. **Universal Selector (`*`)**

**Example:**

```css
p {
  color: blue;   /* Lowest priority */
}

.my-class {
  color: green;  /* Overrides element */
}

#my-id {
  color: red;    /* Overrides class */
}

p {
  color: yellow !important; /* Overrides everything */
}
```

---

### **Pseudo Selectors**

Pseudo selectors select elements based on their **state**, such as when hovered or clicked.

#### 1. **Pseudo-classes**

Pseudo-classes target elements based on a specific condition or interaction.
They use a single colon (`:`).

**Syntax:**

```css
selector:pseudo-class {
  /* styles */
}
```

**Examples:**

* `:hover` → When the mouse hovers over the element.

```css
button:hover {
  background-color: lightblue;
}
```

* `:active` → When the element is being clicked.
* `:focus` → When the element has focus (e.g., input box).
* `:first-child` → Selects the first child of a parent.
* `:nth-child(n)` → Selects the nth child of a parent.
* `:checked` → Selects checked checkboxes/radio buttons.

#### 2. **Pseudo-elements**

Pseudo-elements style **specific parts** of an element or insert content.
They use a double colon (`::`).

**Syntax:**

```css
selector::pseudo-element {
  /* styles */
}
```

**Examples:**

* `::before` → Inserts content before an element’s content.

```css
p::before {
  content: "Note: ";
  font-weight: bold;
}
```

* `::after` → Inserts content after an element’s content.
* `::first-line` → Styles the first line of text.
* `::first-letter` → Styles the first letter of text.
* `::selection` → Styles highlighted text.

---

# CSS Properties

In CSS, **properties** define how HTML elements are styled.
Each property has a **name** and a **value**, written as:

```css
selector {
  property: value;
}
```

---

## 1. Text Properties

* `color` → Text color
* `font-size` → Size of text
* `font-family` → Font type
* `text-align` → Align text (left, center, right)

```css
p {
  color: red;
  font-size: 16px;
  font-family: Arial, sans-serif;
  text-align: center;
}
```

---

## 2. Background Properties

* `background-color` → Background color
* `background-image` → Set image as background

```css
body {
  background-color: lightblue;
  background-image: url("bg.png");
}
```

---

## 3. Box Model Properties

* `width` / `height` → Size of an element
* `margin` → Space **outside** an element
* `padding` → Space **inside** an element
* `border` → Outline around an element

```css
div {
  width: 200px;
  height: 100px;
  margin: 10px;
  padding: 15px;
  border: 2px solid black;
}
```

---

## 4. Color & Border Properties

* `border-radius` → Round corners
* `opacity` → Transparency

```css
img {
  border-radius: 10px;
  opacity: 0.8;
}
```

---

## 5. Display & Position

* `display` → Layout type (`block`, `inline`, `none`)
* `position` → Positioning (`static`, `relative`, `absolute`)

```css
span {
  display: inline;
}

div {
  position: relative;
  top: 10px;
  left: 20px;
}
```

---

# Quick Reference Table

| Category         | Properties                                |
| ---------------- | ----------------------------------------- |
| **Text**         | color, font-size, font-family, text-align |
| **Background**   | background-color, background-image        |
| **Box Model**    | width, height, margin, padding, border    |
| **Border/Color** | border-radius, opacity                    |
| **Layout**       | display, position                         |
