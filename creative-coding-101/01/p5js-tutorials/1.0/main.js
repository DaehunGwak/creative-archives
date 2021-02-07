let yPos = 0;

function setup() {
  frameRate(60);
  createCanvas(400, 400);
}

function draw() {
  // draw() loops forever, until stopped
  const color = yPos / height * 256;
  
  background(256 - color, color, color);
  
  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  
  stroke(color, 256 - color, color);
  line(0, yPos, width, yPos);
}

function mouseClicked() {
  saveCanvas('save', 'png');
}