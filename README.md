# Facing DIV
*This is a simple but useful practicing code. Feel free to report any issue and/or question about it.*

**REMINDER: If you are using this code as a base for any project, it would be a pleasure to be mentioned as a reference. Thank you and enjoy the code!**

## Purpose
The main purpose of this project is practicing Object-Oriented Programming (OOP) in JavaScript.
## Understanding the code
The [Facing DIV function](./js/facingdiv.js) will find an element in the document that contains `class="facing"` and will set as a main box that will handle the methods and events needed.
When the user moves the cursor or the touch (hereafter referred to as "client") over the main box, the position of the client inside the box and compare with the center point of the box.
The distance between client and center positions will be converted into percentage based on the box sizes and multiplyed by the max rotation degree on each axis ( X and Y ) as following:
```javascript
const maxDeg = 35;
const cursorXrelat = (e.clientX - bx.centerX)/(bx.width/2);
const cursorYrelat = (e.clientY - bx.centerY)/(bx.height/2);
const yRot = cursorXrelat*maxDeg;
const xRot = -cursorYrelat*maxDeg;
```

The x and y rotation will be applied to the first child element of the box:
``bx.el.firstElementChild.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg)`;``.

The `perspective(1000px)` will give a 3D feeling for the rotating element.

You can change the values for `perspective` and `maxDeg` according to your layout to bring the right effect.

## Using the code

To use this code you must have one first element (hereafter referred to as "parent") and a second element (hereafter referred to as "child") as the following example: 
```html
<div class="facing"> //this will be the main box
    <div> // this will be the rotating element
    </div>
</div>
```

To have the "facing-cursor" effect with this code is important that the child fill all the width and height of the parent.
I suggest to use something like the following CSS:
```css
.facing{
    display: inline-block;
    height: 300px;
    width: 300px;
}
.facing>*:first-child{
    display: inline-block;
    height: 100%;
    width: 100%;
    transition: all 0.1s ease; // optional to make the moviment more smooth
}
```

### Tip
You can also apply the CSS properties above using the [Facing DIV function](./js/facingdiv.js) so then you scope all your settings into a JS file and apply the facing effect just adding the `class="facing"` to any element.
