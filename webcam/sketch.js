var capture;

function setup() {
  createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO);
  capture.size(width/2, height/2);
  frameRate(120);
  //capture.hide();
}

function draw() {
  for (let i = 0; i < 200; i++) {
    getPixel();
  }
}
function getPixel(){
  var x=random()*width;
  var y=random()*height;
  var color=capture.get(x/2,y/2);
  var red=color[0];
  var green =color[1];
  var blue = color[2];
  var ratio = pow((red*green*blue),0.3)/255;
  
  fill(red,green,blue,75);
  noStroke();
  var radius = 40*(1-ratio);

  ellipse(x,y,radius,radius);
}