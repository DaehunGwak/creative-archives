let size = 50;
let len = 3;
const colors = ['#00f3f1', '#b2ff00', '#fa1453'];

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  noStroke();
  for (let i = 0; i < len; i++) {
    fill(colors[i]);
    ellipse(200 - size + size * i, 200, size, size);
  }
}

function mouseClicked() {
  saveCanvas('save', 'png');
}