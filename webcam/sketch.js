var capture;

function setup() {
  getUserMedia();
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  //capture.hide();
}

function draw() {
  //background(capture);
  image(capture, 0, 0, 320, 240);
  filter('INVERT');
}