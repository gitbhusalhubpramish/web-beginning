# Intro
Imagine you have to divide a group of people into smaller groups based on their work and features. You also need to give each group a **name** as well as a **unique identifier** so that you can represent each individual — because sometimes people may have the same name, like *Ram*, *Shyam*, etc.  

Let’s take an example of a software company with **100 employees**. You divide them into 2 main groups: **Accounts** and **Engineers**.  
- The **Accounts group** can be divided into sub-groups like *Collectors* and *Spenders*.  
- The **Engineers group** can also be divided into sub-groups like *Network Engineers*, *Project Engineers*, *Service Engineers*, etc.  

Since a person can belong to multiple groups, the question arises:  

*How do we recognize each person if there are many people with the same name?*  

**Solution →** We give them a **unique ID**.  

---

# Introduction to Class and ID in HTML
Similar to the condition above, in HTML we have many **elements** (components).  
- **Classes** and **IDs** are mainly used for **CSS styling** and **JavaScript DOM manipulation**.  
- Just like people, an element can belong to multiple groups (classes).  
- Sometimes, we need to give a **unique ID** because multiple elements might share the same class or name.  

---

## Class
We can divide elements into multiple categories. For example:  
- If an element is showing an *important note*, we can give it the class `important`.  
- If an element contains *text*, we can give it the class `text`.  

**Note:** When giving multiple classes to an element, we separate them with a **space**.  
Example: an element with two classes `important` and `text` is written as:  
```html
class="important text"
```

**Example usage:**
```html
<div class="multichild container">
    <div class="singlechild container">
        <p class="child text">This is a paragraph</p>
    </div>
    <div class="singlechild container">
        <p class="child text">This is another paragraph</p>
    </div>
    <p class="text">Hello</p>
</div>
```


Here you can see:

- **`multichild` =** element with multiple children
- **`singlechild` =** element with one child
- **`text` =** element holding text

👉 You can name a class as you wish (except using special characters).

---

## ID

Now let’s say we want to give a **unique name** to each element without changing its tag name. This is where ID comes in.

**ID** is a unique identifier assigned to an element.

No two elements should have the same ID.

Example (based on previous code):

```html
<div id="allpar" class="multichild container">
    <div class="singlechild container">
        <p id="firstpar" class="child text">This is a paragraph</p>
    </div>
    <div class="singlechild container">
        <p id="secpar" class="child text">This is another paragraph</p>
    </div>
    <p id="hello" class="text">Hello</p>
</div>
```

Here we gave IDs:

- **`allpar` →** container holding all paragraphs
- **`firstpar` →** first paragraph
- **`secpar` →**second paragraph
- **`hello` →** last paragraph

**Important Notes:**

- **Class:** can be common and multiple in one element.
- **ID:** must be unique and only one per element.

**Bonus Info:**

When applying CSS:
- **For class →** use `.` (dot). Example: `.container { ... }`
- **For ID →** use `#` (hash). Example: `#hello { ... }`