let yPos = 0;

function setup() {
  frameRate(60);
  createCanvas(400, 400);
  background(255);
}

function draw() {
  // draw() loops forever, until stopped
  const color = yPos / height * 255;

  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  noStroke();
  fill(color, 255 - color, color, 200);
  rect(0, yPos, width, 1);

  noStroke();
  fill(
    125 + Math.random() * 120, 
    125 + Math.random() * 120, 
    125 + Math.random() * 120, 
    20
  );
  ellipse(200, 200, 200);

  fill(255)
  stroke(20);
  ellipse(mouseX, mouseY, 20);
}

function mouseClicked() {
  saveCanvas('save', 'png');
}