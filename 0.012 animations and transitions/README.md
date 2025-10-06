<!-- @format -->

# Intro

In the previous lesson, we learned about **CSS Transformations** — how to scale, rotate, move, and skew elements. But all those changes happened **instantly**.

_What if you want those changes to happen smoothly over time?_

_What if you want an element to gradually grow bigger when hovered, or make a loading spinner that spins continuously?_

That's where **CSS Animations and Transitions** come in!

Think of it like the difference between teleporting and walking. Transformations are like teleporting from one state to another instantly, while animations and transitions are like smoothly walking from point A to point B.

---

## CSS Transitions

**CSS Transitions** make changes happen **smoothly over time** instead of instantly. When you change a CSS property (like color, size, or position), transitions make that change happen gradually.

**Basic Syntax:**

```css
.element {
  transition: property duration timing-function delay;
}
```

**Example:**

```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: red; /* This change will happen smoothly over 0.3 seconds */
}
```

---

### **Transition Properties**

#### 1. **transition-property** — What to Animate

Specifies **which CSS properties** should have smooth transitions.

**Values:**

- `all` → All properties that change (default)
- `none` → No transitions
- Specific properties → `background-color`, `transform`, `opacity`, etc.

**Examples:**

```css
.box {
  transition-property: background-color; /* Only background color transitions */
}

.box {
  transition-property: transform, opacity; /* Multiple properties */
}

.box {
  transition-property: all; /* Everything transitions */
}
```

---

#### 2. **transition-duration** — How Long

Specifies **how long** the transition takes.

**Values:**

- Time in seconds: `2s`, `0.5s`
- Time in milliseconds: `300ms`, `1500ms`

**Examples:**

```css
.fast {
  transition-duration: 0.2s; /* Very quick */
}

.normal {
  transition-duration: 0.5s; /* Normal speed */
}

.slow {
  transition-duration: 2s; /* Slow and dramatic */
}
```

---

#### 3. **transition-timing-function** — How It Moves

Specifies **the speed curve** of the transition.

**Common Values:**

- `ease` → Slow start, fast middle, slow end (default)
- `linear` → Same speed throughout
- `ease-in` → Slow start, then faster
- `ease-out` → Fast start, then slower
- `ease-in-out` → Slow start and end

**Examples:**

```css
.smooth {
  transition-timing-function: ease;
}

.constant-speed {
  transition-timing-function: linear;
}

.bouncy {
  transition-timing-function: ease-out;
}
```

---

#### 4. **transition-delay** — When to Start

Specifies **how long to wait** before starting the transition.

**Examples:**

```css
.delayed {
  transition-delay: 0.5s; /* Wait 0.5 seconds before starting */
}

.instant {
  transition-delay: 0s; /* Start immediately (default) */
}
```

---

### **Shorthand Syntax**

You can combine all transition properties in one line:

```css
.element {
  transition: property duration timing-function delay;
}
```

**Examples:**

```css
.button {
  transition: background-color 0.3s ease 0s;
}

.card {
  transition: transform 0.5s ease-out 0.2s;
}

.multi {
  transition: opacity 0.3s ease, transform 0.5s ease-in-out;
}
```

---

## CSS Animations

While **transitions** react to changes (like hover), **animations** can run on their own and repeat infinitely. Animations use **keyframes** to define exactly what should happen at different points in time.

**Basic Syntax:**

```css
/* Define the animation */
@keyframes animation-name {
  from {
    /* Starting state */
  }
  to {
    /* Ending state */
  }
}

/* Use the animation */
.element {
  animation: animation-name duration timing-function delay iteration-count
    direction;
}
```

---

### **Creating Keyframes**

**Keyframes** define what happens during an animation at specific points in time.

#### Method 1: **from/to**

```css
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

#### Method 2: **Percentages**

```css
@keyframes slide-in {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
```

**Visual Example:**

```css
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.bouncing-ball {
  animation: bounce 1s ease infinite;
}
```

---

### **Animation Properties**

#### 1. **animation-name** — Which Animation

```css
.element {
  animation-name: slide-in;
}
```

#### 2. **animation-duration** — How Long

```css
.element {
  animation-duration: 2s;
}
```

#### 3. **animation-timing-function** — Speed Curve

Same options as transitions: `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`

```css
.element {
  animation-timing-function: ease-in-out;
}
```

#### 4. **animation-delay** — When to Start

```css
.element {
  animation-delay: 1s; /* Wait 1 second before starting */
}
```

#### 5. **animation-iteration-count** — How Many Times

- `1` → Play once (default)
- `3` → Play 3 times
- `infinite` → Play forever

```css
.loading-spinner {
  animation-iteration-count: infinite;
}
```

#### 6. **animation-direction** — Which Direction

- `normal` → Forward (default)
- `reverse` → Backward
- `alternate` → Forward, then backward
- `alternate-reverse` → Backward, then forward

```css
.pendulum {
  animation-direction: alternate;
}
```

#### 7. **animation-fill-mode** — What Happens Before/After

- `none` → No effect before/after (default)
- `forwards` → Keep final state after animation
- `backwards` → Use first keyframe before animation starts
- `both` → Apply both forwards and backwards

```css
.fade-in {
  animation-fill-mode: forwards; /* Stay visible after fading in */
}
```

---

### **Animation Shorthand**

```css
.element {
  animation: name duration timing-function delay iteration-count direction
    fill-mode;
}
```

**Examples:**

```css
.spinner {
  animation: spin 2s linear infinite;
}

.fade-in {
  animation: fade-in 1s ease-out 0.5s 1 normal forwards;
}
```

---

## **Practical Examples**

### **1. Hover Button Effect**

```css
.hover-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.hover-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

### **2. Loading Spinner**

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

### **3. Pulse Effect**

```css
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.pulse-button {
  animation: pulse 2s ease-in-out infinite;
}
```

### **4. Slide-in Animation**

```css
@keyframes slide-in-left {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slide-in-left 0.8s ease-out;
}
```

### **5. Typing Effect**

```css
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.typing-text {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 3s steps(40) 1s 1 normal both;
}
```

---

## **Combining Transitions and Animations**

You can use **both** transitions and animations on the same element:

```css
.interactive-card {
  /* Animation runs automatically */
  animation: float 3s ease-in-out infinite;

  /* Transition activates on hover */
  transition: transform 0.3s ease;
}

.interactive-card:hover {
  transform: scale(1.1); /* This will transition smoothly */
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

---

## **Performance Tips**

1. **Animate CSS properties that don't trigger layout:**

   - ✅ Good: `transform`, `opacity`
   - ❌ Avoid: `width`, `height`, `margin`, `padding`

2. **Use `transform` instead of changing position:**

   - ✅ `transform: translateX(50px)`
   - ❌ `left: 50px`

3. **Keep animations short and subtle:**
   - Most transitions should be 0.2s - 0.5s
   - Animations should be under 2-3s unless they're backgrounds

---

## **Quick Reference**

| Effect                  | Code                                        | Usage                  |
| ----------------------- | ------------------------------------------- | ---------------------- |
| **Smooth color change** | `transition: background-color 0.3s ease;`   | Hover effects          |
| **Smooth transform**    | `transition: transform 0.3s ease;`          | Hover/click effects    |
| **Spinning loader**     | `animation: spin 1s linear infinite;`       | Loading indicators     |
| **Fade in**             | `animation: fade-in 1s ease-out;`           | Page/modal entrances   |
| **Pulse**               | `animation: pulse 2s ease-in-out infinite;` | Call-to-action buttons |
| **Slide in**            | `animation: slide-in 0.8s ease-out;`        | Content reveals        |

---

## **Tips for Beginners**

1. **Start with transitions** → They're easier to understand and control
2. **Use hover effects** → Great way to practice transitions
3. **Keep it subtle** → Small, smooth animations look professional
4. **Test on different devices** → Animations can be slower on mobile
5. **Don't overdo it** → Too many animations can be distracting

**Next up:** We'll learn about responsive design and media queries to make our websites look great on all devices!

---

_This section was created by [aakku106](https://github.com/aakku106)_
