# CSS Units

CSS has several different units for expressing a length.

Many CSS properties take "length" values, such as width, margin, padding, font-size, etc.

The length value is a number followed by a length unit, such as px, em, rem, etc.

CSS has two types of length units:

- Absolute Units
- Relative Units

# CSS Absolute Units

Absolute units are fixed, and the length expressed in any of these will appear exactly that size.

Absolute units do not change when the screen size change, and are not recommended for websites. However, they can be used if the output medium is known, such as for print layout.

The most used absolute unit is px (pixels).

## Absolute Units

| Unit | Description |
|------|------------|
| `px` | pixels (1px = 1/96th of 1in) |
| `cm` | centimeters |
| `mm` | millimeters |
| `in` | inches (1in = 96px = 2.54cm) |
| `pt` | points (1pt = 1/72 of 1in) |
| `pc` | picas (1pc = 12 pt) |

# Set Font Size With Px

Setting the text size with px (pixels) gives you full control over the text size.

If you use pixels, the web page may not scale very well on different screen sizes and the users cannot adjust the text size in their browser settings. However, users can still use the zoom tool to resize the entire page.

## Example:
Set font sizes with px:
```css
h1 {
  font-size: 40px;
}

h2 {
  font-size: 30px;
}

p {
  font-size: 16px;
}
```
**Note:** A whitespace cannot appear between the number and the unit. However, if the value is 0, the unit can be omitted.

# CSS Relative Units

Relative units specify a length relative to another length (like parent element, root element, or viewport).

Relative length units scale better between different screen sizes.

## Relative Units

| Unit  | Description |
|-------|------------|
| `em`  | Relative to the font-size of the parent element |
| `ex`  | Relative to the x-height of the current font (rarely used) |
| `ch`  | Relative to width of the "0" (zero) |
| `fr`  | A fractional unit. 1fr equals 1 part of the available space |
| `rem` | Relative to the font-size of the root HTML element |
| `vw`  | Relative to 1% of the width of the viewport (100vw = full width) |
| `vh`  | Relative to 1% of the height of the viewport (100vh = full height) |
| `vmin`| Relative to 1% of viewport's smaller dimension |
| `vmax`| Relative to 1% of viewport's larger dimension |
| `%`   | Relative to the size of the parent element |

 Viewport = the browser window size. 1vw = 1% of the current width of the browser's viewport. So, if the viewport is 500px wide, 1vw is 5px.

 **Tip**The em and rem units are perfect for creating scalable and responsive websites!

 # Set Font Size With Em

 The em unit is relative to the font size of the parent element. So, if the parent element has a font size of 16px, then 2.5em would result in 40px.

In the following example, the text size in em is the same as the previous example in pixels. However, the em unit allows the user to adjust the text size in the browser settings.

## Example:
Set font sizes with em:
```css
body {
  font-size: 16px; /* Base font size */
}

h1 {
  font-size: 2.5em; /* 2.5 * 16 = 40px */
}

h2 {
  font-size: 1.875em; /* 1.875 * 16 = 30px */
}

p {
  font-size: 1em; /* 1 * 16 = 16px */
}

```
# Set Font Size With Rem

The rem unit is relative to the font size of the root HTML element (<html>).

Unlike em, which is relative to the font-size of its parent element, rem always refers to the font-size of the <html> element, regardless of its position in the document tree. This makes rem very useful for creating scalable and responsive designs. By changing the font-size of the <html> element, all elements sized with rem units will scale proportionally throughout the entire page.

The default font-size of the <html> element in most browsers, is 16px. So, by default, 1rem equals 16px unless explicitly overridden in the CSS.

## Example:
Set font sizes with rem:
```css
html {
  font-size: 16px; /* Set the root font size */
}

h1 {
  font-size: 2.5rem; /* 2.5 * 16 = 40px */
}

h2 {
  font-size: 1.875rem; /* 1.875 * 16 = 30px */
}

p {
  font-size: 1rem; /* 1 * 16 = 16px */
}

```