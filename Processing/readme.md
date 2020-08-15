# Processing
This folder will contain snippets from Processing workshops and tutorials.

## Processing START HERE:
The empty Processing sketch is made up of the `setup()` and `draw()` functions. 
`setup()` runs once and can set all values that remain static, while the `draw()` function loops once every frame. 
Other functions can be added to be called on demand for example `keyPressed()`, `mousePressed()` and your own custom functions.
Nested loops can occur inside these functions eg. `if(test){ action if true; }` `for (i=0; i<10; i++){ run 10 times; }` 

Common functions include:

SHAPES | MATH | INPUT | COLOR
----------------------- |-----------------------  |-----------------------  |----------------------- 
point (x, y) | int / float / long | mouseX | background(r, g, b, a)
line (x1, y1, x2, y2) | width | mouseY | fill(r,g,b,a) 
rect (x1, y1, w, h) | height | pmouseX | stroke (r,g,b,a) colour
ellipse(cx, cy, w, h) | random (min, max) | pmouseY | noStroke()
triangle(x1,y1,x2,y2,x3,x3) | translate(x,y) | keyPressed() | noFill()
quad(x1,y1,x2,y2,x3,y3,x4,y4) | scale () | mousePressed() | strokeWeight(1) -->thickness
bezier(x1,y1,anchor1x,anchor1y,x2,y2,anchor2x,anchory2y)* | rotate (radians(°)) | millis() | color c = img.get (x,y)

NB. some changes have recently been made to Processing (some sketches you find may have old syntax): 
* `angleMode()` has been removed. But you can convert to radians to degrees via the `radians()` function, i.e.: `radians(90)`
* You can set 'temporary' settings to your shapes/text/objects by using `pushMatrix();` *before* your settings (eg. `translate()`; `rotate();` etc. and then 'UNDO' these settings by using `popMatrix();` after your settings
