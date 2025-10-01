# Intro
in the previous lesson we were introdused with CSS. In this lesson we are going to deap dive into some basic css consept - selector and styling

---
# Selector
Let's say we want to add a rules to some class element, some id, some tag or if a element is hovered, clicked, etc. Here's where selector comes in. A CSS selector is a pattern used to select the HTML elements to which a set of CSS rules will be applied.

Example:

if i want to make all the element with class name `important` red in font color.
```css
.important {
    color: red;
}
```

## type of selector
- **Universal Selector (`*`):**

Selects all elements on a page. example: making all the element red in background
```css
* {
  background-color: red;
}
```
- **Type (Element) Selector:** 

Selects all elements of a specific HTML tag name. example: making all the `<p>` element red in background
```css
p {
  background-color: red;
}
```
- **Class Selector (`.`):** 
Selects elements with a specific class attribute. example: making all the element with the class `my-class` red in background.
```css
.my-class {
  background-color: red;
}
```
- **ID Selector (`#`):** Selects a single element with a specific ID attribute. IDs must be unique within a document. example: making the element with the id `my-id` red in background
```css
#my-id {
  background-color: red;
}
```
- **Attribute Selectors (`[]`):** 
Selects elements based on the presence or value of an attribute. like making a input box with input type `text` red in background
```css
[type="text"] {
  background-color: red;
}
```

- **Child Selector (`>`):** 

Selects an element that is a direct child of another element. example: making all the direct `li` child of `ul` red in background
```css
ul > li {
  background-color: red;
}
```

### **psudo selector**
It select element bashed on there state like if we hover mouse, click the button, etc.
1. **Pseudo-classes:**

Pseudo-classes select elements based on a specific state or condition. They are denoted by a single colon (`:`) followed by the pseudo-class name. 

**Syntax:** `selector:pseudo-class { /* styles */ }`

**Examples:**
- **`:hover`:** Selects an element when the user's mouse pointer is over it.
```css
button:hover {
  background-color: lightblue;
}
```
- **`:active`:** Selects an element while it is being activated by the user (e.g., clicked).
- **`:focus`:** Selects an element when it has received focus (e.g., an input field).
- **`:first-child`:** Selects the first child element of its parent.
- **`:nth-child(n)`:** Selects the nth child element of its parent.
- **`:checked`:** Selects a checked radio button or checkbox.
2. **Pseudo-elements:**

Pseudo-elements style specific parts of an element, or insert content before or after an element. They are denoted by a double colon (`::`) followed by the pseudo-element name (though a single colon is still supported for legacy reasons).

**Syntax:** `selector::pseudo-element { /* styles */ }`

**Examples:**
- **`::before`:** Inserts content before the content of an element.
```css
p::before {
    content: "Note: ";
    font-weight: bold;
}
```
- **`::after`:** Inserts content after the content of an element.
- **`::first-line`:** Styles the first line of text within an element.
- **`::first-letter`:** Styles the first letter of text within an element.
- **`::selection`:** Styles the portion of an element that the user has highlighted.