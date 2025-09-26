# CSS Flexbox
<img src="image.png" />

# What is CSS Flexbox?
Flexbox is short for the Flexible Box Layout module.

Flexbox is a layout method for arranging items in rows or columns.

Flexbox makes it easier to design a flexible responsive layout structure, without using float or positioning.

# Flexbox vs. Grid

The CSS Flexbox Layout should be used for one-dimensional layout, with rows OR columns.

The CSS Grid Layout should be used for two-dimensional layout, with rows AND columns.

# CSS Flexible Box Layout Module

Before the Flexible Box Layout module, there were four layout modes

- **Block** → for sections in a webpage  
- **Inline** → for text  
- **Table** → for two-dimensional table data  
- **Positioned** → for explicit position of an element  

CSS flexbox is supported in all modern browsers.

# CSS flexbox is supported in all modern browsers.

A flexbox always consists of:

- **Flex Container** → the parent (`<div>`) element  
- **Flex Items** → the items inside the container (`<div>`)  

# A Flex Container with Three Flex Items

To start using CSS Flexbox, you need to first define a flex container.

The flex container becomes flexible by setting the display property to flex

<img src="image1.png" />

The element above represents a flex container (the blue area) with three flex items.

### Example  
A flex container with three flex items:  

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
You will learn more about flex containers and flex items in the next chapters.

### Exercise  

❓ **Which property and value is used to create a flex container?**  

- display: flexbox  
- display: flex  
- display: flex-item  
- flexbox: layout  
- flex: layout  

<details>
  <summary>✅ Show Answer</summary>  

  The correct answer is: **`display: flex`**  

</details>
