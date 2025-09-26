# CSS Margins

The CSS margin properties are used to create space around elements, outside of any defined borders.

Margins define the distance between an element's border and the surrounding elements.

With CSS, you have full control over the margins. CSS has properties for setting the margin for each individual side of an element (top, right, bottom, and left), and a shorthand property for setting all the margin properties in one declaration.

# Margin - Individual Sides

CSS has properties for specifying the margin for each side of an element:

**margin-top** — sets the top margin of an element  

**margin-right** — sets the right margin of an element  

**margin-bottom** — sets the bottom margin of an element  

**margin-left** — sets the left margin of an element  

All the margin properties can have the following values:

**auto** — the browser calculates the margin  

**length** — specifies a margin in px, pt, cm, etc.  

**%** — specifies a margin in % of the width of the containing element  

**inherit** — specifies that the margin should be inherited from the parent element  

**Tip:**Negative values are also allowed.

### Example  

Set different margins for all four sides of a `<p>` element:  

```css
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
```
# Margin - Shorthand Property
To shorten the code, it is possible to specify all the margin properties in one declaration.

The margin property is a shorthand property for the following individual margin properties:

- **margin-top**  
- **margin-right**  
- **margin-bottom**  
- **margin-left**  

Here is how it works:

If the margin property has four values:

- `margin: 25px 50px 75px 100px;`  
  - **Top margin** → 25px  
  - **Right margin** → 50px  
  - **Bottom margin** → 75px  
  - **Left margin** → 100px  

### Example

Use the margin shorthand property with four values:

```css
p {
  margin: 25px 50px 75px 100px;
}
```
