# CSS Grid Q&A - Real World Example Questions

Here are some **real-world coding examples** for CSS Grid to help beginners practice and understand layouts effectively.

---

## 1. Photo Gallery Layout

**Question:** Create a photo gallery with **3 columns**. Each image should adjust its width automatically and wrap to the next row if the screen is small.

**Answer:**

```html
<div class="gallery">
  <img src="img1.jpg" alt="">
  <img src="img2.jpg" alt="">
  <img src="img3.jpg" alt="">
  <img src="img4.jpg" alt="">
</div>
```

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.gallery img {
  width: 100%;
  border-radius: 8px;
}
```

---

## 2. Pricing Cards

**Question:** Create 4 pricing cards in a row with equal width and spacing. Make them wrap automatically on smaller screens.

**Answer:**

```html
<div class="cards">
  <div class="card">Basic</div>
  <div class="card">Standard</div>
  <div class="card">Premium</div>
  <div class="card">Pro</div>
</div>
```

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}
.card {
  background: #28a745;
  color: white;
  padding: 40px;
  text-align: center;
  border-radius: 8px;
}
```

---

## 3. Dashboard Layout

**Question:** Create a dashboard layout with a sidebar on the left (200px) and main content taking the rest of the space.

**Answer:**

```html
<div class="dashboard">
  <div class="sidebar">Menu</div>
  <div class="main">Content</div>
</div>
```

```css
.dashboard {
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100vh;
  gap: 10px;
}
.sidebar {
  background: #333;
  color: white;
  padding: 20px;
}
.main {
  background: #eee;
  padding: 20px;
}
```

---

## 4. Footer Links

**Question:** Create a footer with 4 links spaced evenly using CSS Grid.

**Answer:**

```html
<footer class="footer">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</footer>
```

```css
.footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
}
.footer a {
  color: white;
  text-decoration: none;
}
```

---

## 5. Blog Layout

**Question:** Create a blog layout with 3 columns on large screens and **stack them on top of each other on small screens**.

**Answer:**

```html
<div class="blog">
  <div>Post 1</div>
  <div>Post 2</div>
  <div>Post 3</div>
</div>
```

```css
.blog {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.blog div {
  background: #28a745;
  color: white;
  padding: 40px;
  border-radius: 8px;
}
```

---

These Q&A examples cover **real-world scenarios** like galleries, cards, dashboards, footers, and blog layouts. Practicing these will give you confidence in using CSS Grid for layouts.
