# CSS Grid

Have you ever tried to **arrange boxes in rows and columns** on a page, but it becomes messy when the screen size changes? 

Doing it manually with floats or margins is hard. **CSS Grid solves this problem easily!** It is a CSS tool that helps you **place items neatly in rows and columns**, control spacing automatically, and make layouts that adjust to any screen.

Think of it like a **chessboard**. You have a container (the board) and items (the pieces). Grid helps you **place the pieces anywhere and keep them aligned perfectly**.

---

## Step 1: Make a Grid Container

First, you need a container and tell CSS to use Grid.

```css
.container {
  display: grid; /* turns this container into a grid */
}
```

Now, all child elements of `.container` become **grid items**.

Example:

```html
<div class="container">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 equal columns */
  gap: 10px; /* space between items */
}
.container div {
  background: #28a745;
  color: white;
  padding: 20px;
  text-align: center;
}
```

Result: 4 boxes arranged neatly in 2 columns and 2 rows.

> **Explanation:** `1fr` means one fraction of the available space. `repeat(2, 1fr)` creates 2 equal columns.

---

## Step 2: Define Columns and Rows

You can decide the **size of columns and rows**.

```css
grid-template-columns: 100px 200px 1fr; /* 3 columns */
grid-template-rows: 50px auto 100px;    /* 3 rows */
```

* `px` = fixed size
* `fr` = fraction of available space
* `auto` = adjust automatically based on content

Or use `repeat()` for simplicity:

```css
grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
```

---

## Step 3: Place Items Anywhere

You can **control exactly where each item appears** on the grid.

```css
.item1 {
  grid-column: 1 / 3; /* from column 1 to 2 */
  grid-row: 1 / 2;
}
```

> **Explanation:** This makes the item span multiple columns or rows.

---

## Step 4: Space Between Items (Gap)

Grid makes spacing easy. Use `gap` instead of margins.

```css
gap: 10px;       /* space between rows and columns */
gap: 10px 20px;  /* row-gap column-gap */
```

---

## Step 5: Make Responsive Grid

You can make grid **adjust automatically on smaller screens**.

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}
```

* `auto-fit` = fit as many columns as possible
* `minmax(min, max)` = set minimum and maximum size for items

> Now the grid automatically adds or removes columns depending on screen size!

---

## Full Example

```html
<div class="grid-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.grid-container div {
  background: #28a745;
  color: white;
  padding: 40px;
  text-align: center;
}
```

Result: Boxes are arranged in 3 columns and automatically wrap to the next row.

---

CSS Grid is **very powerful** and makes layouts simple. Once you practice a little, you can design beautiful pages that adjust perfectly to any screen. 

Try changing `grid-template-columns`, `grid-template-rows`, and `gap` to see how your layout changes!
