<!-- @format -->

# CSS Transformations - Practice Questions

1. **Photo Gallery Effect**: Create a simple photo gallery with 4 `<div>` elements representing photos. When you hover over each photo:

   - First photo: **Scale to 1.2x** and add a subtle **rotation of 5 degrees**
   - Second photo: **Move up by 10px** and **scale to 1.1x**
   - Third photo: **Rotate 15 degrees** and **move diagonally** (right 10px, up 5px)
   - Fourth photo: **Skew horizontally by 10 degrees** and **scale to 1.15x**

   Make the transitions smooth (0.3s ease).

2. **Interactive Button**: Create a button with the text "Click Me!" that has these effects:

   - **Normal state**: Blue background (#007bff)
   - **Hover**: Scale to 1.1x, move up 3px, and change to darker blue (#0056b3)
   - **Active (when clicked)**: Scale to 0.95x and move down 1px

   Add smooth transitions for all effects.

3. **Card Flip Animation**: Create a business card that shows different information on hover:

   - Use `transform: rotateY(180deg)` to flip the card
   - The card should be 200px wide and 120px tall
   - Include your name on the front and your skills on the back
   - Add a smooth 0.6s transition

4. **Loading Spinner**: Create a simple loading spinner using only CSS transformations:

   - Make a 50px × 50px circle with a border
   - Use `transform: rotate()` with CSS animation to spin it continuously
   - **Bonus**: Make it spin 360 degrees every 1 second

5. **Transform Combination Challenge**: Create a single `<div>` that demonstrates all four transformation types at once:

   - Scale it to 1.3x
   - Rotate it 25 degrees
   - Move it 30px right and 20px up
   - Skew it 10 degrees horizontally

   Apply all transformations in a single `transform` property.

6. **Modal Popup Effect**: Create a modal/popup that appears with transformation effects:
   - Initially: `scale(0)` (invisible)
   - When shown: `scale(1)` with a smooth 0.4s transition
   - **Bonus**: Add a slight rotation (5 degrees) during the entrance animation

**Tip**: Remember to add `transition: transform 0.3s ease;` to make your transformations smooth and professional-looking!
