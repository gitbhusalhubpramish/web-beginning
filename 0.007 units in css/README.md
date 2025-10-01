# Sizing Units in CSS

Imagine you want to make a `<div>` a little smaller.

*How much smaller?*

*10 units*

*Which unit?*

Let's talk about units in CSS in a simple, conversational way.

## Absolute Units

These are fixed sizes. They don't change no matter where you put them.

* **px (pixels):** 1px is about 1/96th of an inch. Think of it as the tiniest dot on your screen. Example: `width: 100px;`
* **pt (points):** Used mainly in printing. 1pt ≈ 1/72 of an inch. Example: `font-size: 12pt;`
* **cm, mm, in:** Real-world measurements. `width: 2cm;` makes your element 2 centimeters wide.

## Relative Units

These change depending on something else, like the parent element or the screen.

* **% (percentage):** Relative to parent size. `width: 50%;` means half the width of its parent.
* **em:** Relative to parent font size. `font-size: 2em;` doubles the size compared to parent.
* **rem:** Relative to root font size (`<html>`). `font-size: 1.5rem;` is 1.5 times the base font.
* **vh, vw:** Relative to viewport height/width. `height: 50vh;` is half the screen height.
* **vmin, vmax:** Relative to smaller/larger side of viewport. `width: 20vmin;` is 20% of the smaller side.

### Example Code

```css
.div-example {
  width: 200px;   /* fixed size */
  height: 50%;    /* relative size */
  font-size: 1.2rem; /* relative to root */
}
```

### Quick Tip

* Use **px** if you want a size that never changes.
* Use **%, em, rem, vh, vw** if you want your element to adjust automatically.
