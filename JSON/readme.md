# Loading Data with JSON
## JSON
JSON (JavaScript Object Notation) is a standard way to provide machine readable data to and from web services. Despite the fact that JavaScript is part of its title, it's generally useful in all programming languages.

A JSON object is an unordered set of name/value pairs. An object begins with { (left brace) and ends with } (right brace). Each name is followed by : (colon) and the name/value pairs are separated by , (commas). The name is always a string, the value can be a string, number, boolean, array, or a nested object.

<pre>{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021"
  },
  "phoneNumber": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "fax",
      "number": "646 555-4567"
    }
  ],
  "gender":{
    "type":"male"
  }
}</pre>

If this were JSON data we loaded into a Javascript application, it would be stored in a variable, like this:

<pre>var mydata = {
  "firstName": "John",
  "lastName": "Smith",
  "age": 25,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021"
  }
  ...
};
</pre>
Now you can access it with the variable mydata:

`alert('I am at' + mydata.address.streetAddress);`
##AJAX with p5.js
p5.js has a variety of methods for using AJAX to retrieve files from a server. These include:

loadStrings - loads .txt files
loadJSON - loads .json files
loadXML - loads .xml files
loadTable - loads .csv files
loadStrings
loadStrings loads a text file and returns an array of strings. It takes two arguments, the path to the file, and the callback function. When the server has returned the text data and it has been parsed, doText is run with the result automatically passed in as the variable "data".
<pre>
function setup() {
  createCanvas(600, 400);
  fill(0);

  loadStrings("lines.txt", doText);
}

function doText(data) {
  for (var i=0; i<data.length; i++) {
    text(data[i], 5, 20*i+20);
  }
}
</pre>
### Note 
Be aware that if you tried to do something like the following, nothing shows up. This is because the program starts and calls loadStrings, but it moves on to doText before loadStrings completes. At the point where doText runs, the variable "data" is not yet set to anything. This is that asynchronous thing we were talking about.

<pre>
function setup() {
  createCanvas(600, 400);
  fill(0);

  var data = loadStrings("lines.txt");
  doText(data); // this won't work!
}

function doText(data) {
  for (var i=0; i<data.length; i++) {
    text(data[i], 5, 20*i+20);
  }
}
</pre>

## loadJSON
loadJSON loads a JSON file and returns a JavaScript object. It takes two arguments, the path to the file, and the callback function. When the server has returned the JSON data and it has been parsed, drawData is run with the result automatically passed in as the variable "data".

## JSON file:

<pre>
{ "person1" : {
    "name": "Morgan",
    "age": "30",
    "location": "Boston",
    "desire": "Singing",
    "fear": "Violence"
  },
  "person2": {
    "name": "Joss",
    "age": "42",
    "location": "Boston",
    "desire": "Hiking",
    "fear": "Irrationality"
  }
}
</pre>

## JS file:

<pre>
function setup() {
  createCanvas(600, 400);
  noStroke();
  textSize(20);
  loadJSON("data.json", drawData);
}

function drawData(data) {
  // person 1 bubble
  fill(155, 30, 180, 180);
  ellipse(250, 200, data.person1.age * 5, data.person1.age * 5); // person1.age = 30
  fill(255);
  text(data.person1.name, 210, 200); // person1.name = Morgan

  // person 2 bubble
  fill(180, 180, 34, 180);
  ellipse(350, 200, data.person2.age * 5, data.person2.age * 5); // person2.age = 32
  fill(255);
  text(data.person2.name, 330, 200); // person2.name = Joss
}
</pre>

## External URLs
In addition to local files, loadJSON can also load external URLs. Unfortunately, there are quite a few security restrictions on making AJAX requests across domains. If you are interested in investigating those and how to overcome them, checkout this: http://www.html5rocks.com/en/tutorials/cors/. Fortunately, since we are using libraries such as p5.js we don't have to worry so much.

openweathermap.org has a pretty easy to use API for weather data in cities around the world. Note that you will need to sign up here for an API key and add it where it says "YOUR_API_KEY".

It's a good idea to try just putting the url string directly into your browser address bar first to make sure it returns data. If you see JSON data appear there, then try adding it into your p5.js sketch.

<pre>
var bubbles = [];

function setup() {
  createCanvas(600, 400);
  noStroke();
  var url = 'http://api.openweathermap.org/data/2.5/weather?APPID=YOUR_API_KEY&q=NewYork,USA'
  loadJSON(url, drawWeather); 
}

function drawWeather(weather) {

  // Get the loaded JSON data
  console.log(weather); // inspect the weather JSON
  var humidity = weather.main.humidity; // get the main.humidity out of the loaded JSON
  console.log(humidity); // inspect the humidity in the console

  background(40, 90, 200);
  fill(0, 255, 255, humidity); // use the humidity value to set the alpha
  for (var i = 0; i < 50; i++) {
    ellipse(random(width), random(height), 30, 30);
  }
}
</pre>

## loadXML
loadXML loads an XML file and returns an XML object. It takes two arguments, the path to the file, and the callback function. It's a little messier to work with XML objects, but you can learn about how to do that here.

## preload
If you'd prefer not to deal with asynchronous callbacks, p5.js also has a function called "preload" that lets you load external files synchronously before setup is run. If a preload function is defined, setup will wait until any load calls within have finished. This allows you to access the file data in setup and draw without needing a callback. Nothing besides load calls should be inside preload (loadImage, loadJSON, loadStrings, loadXML, etc).

<pre>
var lines;

function preload() {
  lines = loadStrings("lines.txt");
}

function setup() {
  createCanvas(600, 400);
  textSize(20);
  fill(0);
  noLoop();
}

function draw() {
  for (var i=0; i<lines.length; i++) {
    text(lines[i], 5, 20*i+20);
  }
}
</pre>
