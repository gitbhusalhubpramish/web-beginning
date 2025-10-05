# Intro

In the previous practice sets and code examples, you might have seen `width`, `height`, `margin`, `padding`, and `border`. But have you ever wondered *what they really mean?*

You probably know that width and height define how big an object is. It’s almost the same in CSS, but not exactly. So, let’s dive into the **CSS Box Model**.

# CSS Box Model

Let’s draw a 100x100px element.

<img src="img/Screenshot (233).png">

As you can see, there’s a small gap (about 8px) between the edge and the box. So, *what is it?* *Can we remove it?*

That gap is part of the element’s **margin**. An element doesn’t just take up space equal to its height and width — it also includes other parts defined by the **CSS Box Model**.

<img src="img/Boxmodell-detail.png">

The diagram above shows the structure of the CSS Box Model.

**Content:** This is where the main content (like text or child elements) goes. Its size is defined by the `width` and `height` properties.

**Padding:** This is the space between the content and the border. It’s transparent and controlled by the `padding` properties (e.g., `padding-top`, `padding-left`, or the shorthand `padding`).

**Border:** This is the visible line around the padding and content. You can control its style, width, and color using border properties (e.g., `border-width`, `border-style`, `border-color`, or the shorthand `border`).

**Margin:** This is the space outside the border that separates the element from others. It’s transparent and controlled by the `margin` properties (e.g., `margin-top`, `margin-left`, or the shorthand `margin`).

---

## Example

**Code:**

```css
.box {
    width: 100px;
    height: 100px;
    background-color: aqua;
    border: 10px solid black;
    padding: 10px;
    margin: 10px;
}
```

**Output:**

<img src="img/Screenshot (238).png">

**With Visual Box Model:**

<img src="img/Screenshot (237).png">

Here, the **orange** area is the margin, **black** is the border, **green** is the padding, and **aqua** is the content.
