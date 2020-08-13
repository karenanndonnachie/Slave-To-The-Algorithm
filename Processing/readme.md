# Processing
This folder will contain snippets from Processing workshops and tutorials.

## Processing START HERE:
The empty Processing sketch is made up of the `setup()` and `draw()` functions. 
`setup()` runs once and can set all values that remain static, while the `draw()` function loops once every frame. Other functions can be added to be called on demand for example `keyPressed()`, `mousePressed()` and custom functions.

Common functions include:

SHAPES | MATH | INPUT | COLOR
----------------------- |-----------------------  |-----------------------  |----------------------- 
point (x, y) | int / float / long | mouseX | background(r, g, b, a)
line (x1, y1, x2, y2) | width | mouseY | fill(r,g,b,a) 
rect (x1, y1, w, h) | height | pmouseX | stroke (r,g,b,a) colour
ellipse(cx, cy, w, h) | random (min, max) | pmouseY | noStroke()
triangle(x1,y1,x2,y2,x3,x3) | translate(x,y) | keyPressed() | noFill()
quad(x1,y1,x2,y2,x3,y3,x4,y4) | scale () | mousePressed() | strokeWeight(1) -->thickness
arc (x1,y1,anchor1x,anchor1y,x2,y2,anchor2x,anchory2y)* | rotate (radians(°)) | millis() | color c = img.get (x,y)

