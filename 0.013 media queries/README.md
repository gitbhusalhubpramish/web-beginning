# CSS Media Queries

Have you ever made a website that looks great on a computer but **messy on a phone**?

Don’t worry! **CSS Media Queries** help you make your website **responsive**, meaning it **adjusts automatically** on different screen sizes.

Think of it like clothes: you choose **different sizes for different people**. Media Queries do the same for your website.

---

## Step 1: Basic Media Query

```css
/* This CSS will only apply to screens smaller than 600px */
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

> **Explanation:** `max-width: 600px` means “if the screen is 600px wide or smaller, apply this CSS.”

---

## Step 2: Combine with Normal CSS

```css
body {
  background-color: white;
  font-size: 16px;
}

@media (max-width: 600px) {
  body {
    background-color: lightblue;
    font-size: 14px;
  }
}
```

> **Result:** On small screens, background changes to light blue and font gets smaller.

---

## Step 3: Multiple Conditions

You can target **screen width and orientation**.

```css
@media (max-width: 600px) and (orientation: portrait) {
  body {
    background-color: pink;
  }
}
```

> **Explanation:** Only for screens smaller than 600px **and** in portrait mode.

---

## Step 4: Responsive Layout Example

```html
<div class="container">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>
```

```css
.container {
  display: flex;
  gap: 10px;
}
.container div {
  background: #28a745;
  color: white;
  padding: 40px;
  text-align: center;
}

/* On small screens, stack items */
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
```

> **Result:** On big screens, items are in a row. On small screens, items stack vertically.

---

## ✅ Step 5: Common Breakpoints

Here are common screen widths you can use:

* `480px` — small phones
* `768px` — tablets
* `1024px` — laptops
* `1200px` — large screens

---

## Tips

1. Always start with **mobile first**: write CSS for small screens first, then use media queries for bigger screens.
2. Use `min-width` for **larger screens** and `max-width` for **smaller screens**.
3. Test your website on **different devices** to see how it looks.

Media Queries are **super important** to make websites look good everywhere.

Try changing `flex-direction`, `font-size`, or `background-color` with different breakpoints and see the changes!
