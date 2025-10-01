1. **What is a Class?**  
   A **class** is an element identifier that can be used by **multiple elements**, and a single element can have **multiple classes**.  

2. **What is an ID?**  
   An **ID** is a unique identifier. Each element can have **only one ID**, and no two elements should share the same ID.  

3. **Example with Classes and IDs applied:**  
   - Parent element → `container`  
   - Element with multiple children → `multichild`  
   - Element with only one children → `singlechild`  
   - Element with no child → `child`  
   - Element holding text → `text`  
   - First `<p>` → ID = `firstpar`  
   - Second `<p>` → ID = `secpar`  
   - `<p>` holding `"Hello"` → ID = `hello`  
   - The outer `<div>` → ID = `allpar`  
```html
<div>
    <div>
        <p>This is a paragraph</p>
    </div>
    <div>
        <p>This is another paragraph</p>
    </div>
    <p>Hello</p>
</div>
```