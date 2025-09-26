# CSS Animations
CSS allows animation of HTML elements without using JavaScript!


# What are CSS Animations?

An animation lets an element gradually change from one style to another.

You can change as many CSS properties you want, as many times as you want.

To use CSS animation, you must specify some keyframes for the animation.

Keyframes hold what styles the element will have at certain times.


# CSS animation-name and animation-duration

The animation-name property specifies a name for the animation.

The animation-duration property defines how long an animation should take to complete. If this property is not specified, no animation will occur, because the default value is 0s (0 seconds).

# CSS @keyframes Rule

When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.

To get an animation to work, you must bind the animation to an element.

The following example binds the "myAnimation" animation to the <div> element. The animation will last for 4 seconds, and it will gradually change the background-color of the <div> element from "red" to "yellow":

## Example:
```css
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: myAnimation;
  animation-duration: 4s;
}
```
n the example above we have used the keywords "from" and "to" in the @keyframes rule, which represents 0% (start) and 100% (complete).

It is also possible to use percent. By using percent, you can add as many style changes as you like.

The following example will change the background-color of the <div> element when the animation is 25% complete, 50% complete, and again when the animation is 100% complete:

## Example:
```css
@keyframes myAnimation {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}

div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: myAnimation;
  animation-duration: 4s;
}
```
The following example will change both the background-color and the position of the <div> element when the animation is 25% complete, 50% complete, and again when the animation is 100% complete:

## Example:
```css
@keyframes myAnimation {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}

div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: myAnimation;
  animation-duration: 4s;
}

```

# CSS animation-delay Property
The animation-delay property specifies a delay for the start of an animation.

The following example has a 2 seconds delay before starting the animation:

## Example:
```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: myAnimation;
  animation-duration: 4s;
  animation-delay: 2s;
}
```
Negative values are also allowed. If using negative values, the animation will start as if it had already been playing for N seconds.

In the following example, the animation will start as if it had already been playing for 2 seconds:

## Example
```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: myAnimation;
  animation-duration: 4s;
  animation-delay: -2s;
}
```
# CSS animation-iteration-count Property

The animation-iteration-count property specifies the number of times an animation should run.

The following example will run the animation 3 times before it stops:
## Example:
```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: myAnimation;
  animation-duration: 4s;
  animation-iteration-count: 3;
}
```
The following example uses the value "infinite" to make the animation continue for ever:

## Example:
```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: myAnimation;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
```

# CSS animation-direction Property

The animation-direction property specifies whether an animation should be played forwards, backwards or in alternate cycles.

The animation-direction property can have the following values:


- **normal** – The animation is played as normal (forwards). This is the **default**.  
- **reverse** – The animation is played in **reverse direction** (backwards).  
- **alternate** – The animation is played **forwards first, then backwards**.  
- **alternate-reverse** – The animation is played **backwards first, then forwards**. 


The following example will run the animation in reverse direction (backwards):

## Example:
```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: myAnimation;
  animation-duration: 4s;
  animation-direction: reverse;
}
```
The following example uses the value "alternate" to make the animation run forwards first, then backwards:
mple

## Examle:
```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: myAnimation;
  animation-duration: 4s;
  animation-iteration-count: 2;
  animation-direction: alternate;
}
```

The following example uses the value "alternate-reverse" to make the animation run backwards first, then forwards:

## Example:

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: myAnimation;
  animation-duration: 4s;
  animation-iteration-count: 2;
  animation-direction: alternate-reverse;
}
```
# CSS animation-timing-function Property

The animation-timing-function property specifies the speed curve of the animation.

The animation-timing-function property can have the following values:

## CSS Animation Timing Functions

- **ease** – Animation with a **slow start, then fast, then slow end** (default).  
- **linear** – Animation with the **same speed** from start to end.  
- **ease-in** – Animation with a **slow start**.  
- **ease-out** – Animation with a **slow end**.  
- **ease-in-out** – Animation with a **slow start and end**.  
- **cubic-bezier(n,n,n,n)** – Define your **own timing** using a cubic-bezier function.  

The following example shows some of the different speed curves that can be used:

## Example:
```css
#div1 {animation-timing-function: linear;}
#div2 {animation-timing-function: ease;}
#div3 {animation-timing-function: ease-in;}
#div4 {animation-timing-function: ease-out;}
#div5 {animation-timing-function: ease-in-out;}
```
