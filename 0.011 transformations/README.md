<!-- @format -->

# Intro

So far, we've learned how to position, size, and style elements. But what if you want to make them **move**, **rotate**, or **stretch** without changing their original position in the layout?

That's where **CSS Transformations** come in!

_Imagine you have a photo on your desk. You can rotate it, make it bigger or smaller, slide it around, or tilt it — all without changing where it originally sits on the desk._

CSS transformations work the same way. They let you **visually change** how an element looks or is positioned **without affecting** other elements around it.

---

## CSS Transformations

**CSS Transform** is a property that allows you to **rotate**, **scale**, **move**, or **skew** elements in 2D or 3D space.

The great thing about transformations is that they **don't affect the document flow** — other elements stay exactly where they are.

**Basic Syntax:**

```css
.element {
  transform: transformation-function(value);
}
```

**Example:**

```css
.box {
  transform: rotate(45deg);
}
```

This rotates the element by 45 degrees.

---

## 1. **Scale** — Making Things Bigger or Smaller

The `scale()` function changes the **size** of an element.

**Syntax:**

- `scale(x)` → Scales both width and height by the same amount
- `scale(x, y)` → Scales width by x and height by y
- `scaleX(x)` → Scales only the width
- `scaleY(y)` → Scales only the height

**Values:**

- `1` = Original size
- `2` = Double the size
- `0.5` = Half the size
- `0` = Invisible

**Examples:**

```css
.double-size {
  transform: scale(2); /* 2x bigger */
}

.half-size {
  transform: scale(0.5); /* Half the size */
}

.stretch-wide {
  transform: scaleX(1.5); /* 1.5x wider, same height */
}

.stretch-tall {
  transform: scaleY(2); /* 2x taller, same width */
}
```

**Visual Example:**

```html
<div class="box normal">Original</div>
<div class="box scaled">Scaled 1.5x</div>
```

```css
.box {
  width: 100px;
  height: 100px;
  background-color: aqua;
  margin: 10px;
}

.scaled {
  transform: scale(1.5);
}
```

---

## 2. **Rotate** — Spinning Elements

The `rotate()` function **spins** an element around its center point.

**Syntax:**

- `rotate(angle)` → Rotates by the specified angle
- `rotateX(angle)` → Rotates around the X-axis (3D)
- `rotateY(angle)` → Rotates around the Y-axis (3D)
- `rotateZ(angle)` → Same as `rotate()`, rotates in 2D

**Angle Units:**

- `deg` → Degrees (360deg = full circle)
- `rad` → Radians (2π rad = full circle)
- `turn` → Full turns (1turn = full circle)

**Examples:**

```css
.rotate-45 {
  transform: rotate(45deg); /* Rotate 45 degrees clockwise */
}

.rotate-quarter {
  transform: rotate(90deg); /* Quarter turn */
}

.rotate-half {
  transform: rotate(180deg); /* Upside down */
}

.rotate-counter {
  transform: rotate(-90deg); /* Counter-clockwise */
}
```

**Visual Example:**

```html
<div class="card normal">Normal Card</div>
<div class="card rotated">Rotated Card</div>
```

```css
.card {
  width: 120px;
  height: 80px;
  background-color: lightblue;
  text-align: center;
  margin: 20px;
}

.rotated {
  transform: rotate(30deg);
}
```

---

## 3. **Translate** — Moving Elements

The `translate()` function **moves** an element from its original position **without affecting other elements**.

**Syntax:**

- `translate(x, y)` → Moves horizontally by x and vertically by y
- `translateX(x)` → Moves only horizontally
- `translateY(y)` → Moves only vertically

**Values:**

- **Positive values** → Move right (X) or down (Y)
- **Negative values** → Move left (X) or up (Y)
- Can use any CSS unit: `px`, `%`, `em`, etc.

**Examples:**

```css
.move-right {
  transform: translateX(50px); /* Move 50px to the right */
}

.move-up {
  transform: translateY(-30px); /* Move 30px up */
}

.move-diagonal {
  transform: translate(20px, -15px); /* Right 20px, up 15px */
}

.center-with-percent {
  transform: translate(-50%, -50%); /* Common centering trick */
}
```

**Visual Example:**

```html
<div class="container">
  <div class="box normal">Original Position</div>
  <div class="box moved">Moved Position</div>
</div>
```

```css
.container {
  position: relative;
  height: 200px;
  border: 2px dashed gray;
}

.box {
  width: 100px;
  height: 50px;
  background-color: orange;
  margin: 10px;
}

.moved {
  transform: translate(50px, 30px);
}
```

---

## 4. **Skew** — Tilting Elements

The `skew()` function **tilts** or **slants** an element along the X or Y axis.

**Syntax:**

- `skew(x-angle, y-angle)` → Skews along both axes
- `skewX(angle)` → Skews only horizontally
- `skewY(angle)` → Skews only vertically

**Examples:**

```css
.skew-right {
  transform: skewX(20deg); /* Tilt to the right */
}

.skew-up {
  transform: skewY(-15deg); /* Tilt upward */
}

.skew-both {
  transform: skew(10deg, 5deg); /* Tilt both ways */
}
```

**Visual Example:**

```html
<div class="shape normal">Normal</div>
<div class="shape skewed">Skewed</div>
```

```css
.shape {
  width: 100px;
  height: 100px;
  background-color: pink;
  margin: 20px;
  text-align: center;
}

.skewed {
  transform: skewX(25deg);
}
```

---

## **Combining Transformations**

You can apply **multiple transformations** at once by separating them with spaces.

**Examples:**

```css
.combo-1 {
  transform: rotate(45deg) scale(1.2);
}

.combo-2 {
  transform: translate(50px, -20px) rotate(30deg) scale(0.8);
}

.combo-3 {
  transform: skewX(15deg) translateY(-10px) scale(1.1);
}
```

**Note:** The **order matters**! Transformations are applied from **right to left**.

---

## **Transform Origin**

By default, transformations happen around the **center** of an element. You can change this with `transform-origin`.

**Syntax:**

```css
.element {
  transform-origin: x y;
}
```

**Common Values:**

- `center` (default)
- `top left`, `top right`, `bottom left`, `bottom right`
- `50% 50%` (same as center)
- `0 0` (top-left corner)

**Example:**

```css
.rotate-from-corner {
  transform: rotate(45deg);
  transform-origin: top left; /* Rotates around top-left corner */
}
```

---

## **Practical Example: Hover Effects**

Transformations are commonly used with `:hover` for interactive effects:

```css
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease; /* Smooth animation */
}

.button:hover {
  transform: scale(1.1) translateY(-2px); /* Slightly bigger and lifted */
}

.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: rotate(5deg) scale(1.05); /* Slight rotation and growth */
}
```

---

## **Quick Reference**

| Transformation      | Effect                | Example                                |
| ------------------- | --------------------- | -------------------------------------- |
| `scale(1.5)`        | Make 1.5x bigger      | `transform: scale(1.5);`               |
| `rotate(45deg)`     | Rotate 45 degrees     | `transform: rotate(45deg);`            |
| `translateX(20px)`  | Move 20px right       | `transform: translateX(20px);`         |
| `translateY(-10px)` | Move 10px up          | `transform: translateY(-10px);`        |
| `skewX(15deg)`      | Tilt 15 degrees right | `transform: skewX(15deg);`             |
| Multiple            | Combine effects       | `transform: rotate(30deg) scale(1.2);` |

---

## **Tips for Beginners**

1. **Start simple** → Try one transformation at a time
2. **Use `transition`** → Makes transformations smooth and animated
3. **Experiment with hover** → Great for interactive effects
4. **Remember the order** → Multiple transformations apply right to left
5. **Don't overdo it** → Subtle effects often look more professional

**Next up:** We'll learn about CSS animations and transitions to make these transformations move smoothly over time!
