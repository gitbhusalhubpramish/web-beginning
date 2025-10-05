<!-- @format -->

# CSS Animations & Transitions - Practice Questions

1. **Button Hover Effects**: Create three buttons with different hover transition effects:

   - **Button 1**: Background color changes from blue (#007bff) to green (#28a745) over 0.4 seconds
   - **Button 2**: Scales to 1.1x and moves up 3px with a 0.3s smooth transition
   - **Button 3**: Changes color AND rotates 5 degrees simultaneously

   Add smooth transitions to all effects.

2. **Loading Spinner**: Create a loading spinner using CSS animations:

   - Make a circle with a border (50px × 50px)
   - Only the top border should have a different color
   - Use `@keyframes` to rotate it 360 degrees continuously
   - The animation should take 1 second and repeat infinitely
   - Use `linear` timing function for constant speed

3. **Card Flip Animation**: Create a business card that flips on hover:

   - Card size: 200px wide × 150px tall
   - **Front**: Show your name and "Web Developer"
   - **Back**: Show your email and phone number
   - Use `rotateY(180deg)` for the flip effect
   - Transition should take 0.6 seconds with `ease` timing

4. **Pulse Notification**: Create a notification dot that pulses to grab attention:

   - Make a small red circle (20px × 20px)
   - Use keyframes to scale from 1x to 1.3x and back
   - Change opacity from 1 to 0.6 and back during the pulse
   - Animation should take 1.5 seconds and repeat infinitely
   - Use `ease-in-out` timing function

5. **Text Reveal Animation**: Create text that types itself out:

   - Create a heading with the text "Welcome to my website!"
   - Use `@keyframes` to animate the width from 0 to 100%
   - Add `overflow: hidden` and `white-space: nowrap`
   - Animation should take 3 seconds and happen only once
   - **Bonus**: Add a blinking cursor effect using `border-right`

6. **Interactive Image Gallery**: Create 4 image placeholders with hover effects:

   - **Image 1**: Fade in/out effect (opacity change)
   - **Image 2**: Zoom effect (scale 1.2x on hover)
   - **Image 3**: Slide up effect (translateY -10px)
   - **Image 4**: Rotate and scale combination (15 degrees + 1.1x scale)

   All transitions should be smooth (0.3s ease).

7. **Progress Bar Animation**: Create an animated progress bar:

   - Create a container bar (300px wide × 20px tall)
   - Create a progress fill that animates from 0% to 75% width
   - Use `@keyframes` to animate the width property
   - Animation should take 2 seconds with `ease-out` timing
   - Add a subtle pulse effect to the progress bar

8. **Navigation Menu Effect**: Create a menu item with underline animation:
   - Create a menu link with text "About Us"
   - On hover, an underline should slide in from left to right
   - Use `::after` pseudo-element for the underline
   - Transition the width from 0 to 100% over 0.4 seconds
   - Use `ease-out` timing function

**Challenge Bonus**: Combine multiple effects on a single element - create a card that:

- Floats automatically (continuous up/down animation)
- Scales and lifts when hovered (transition effects)
- Has a pulsing border color (infinite animation)

**Tip**: Remember to use `transition` for hover effects and `@keyframes` + `animation` for continuous motion!
