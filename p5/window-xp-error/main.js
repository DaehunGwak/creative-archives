const ERROR_BOX_PATH = './images/error-box.png';
const ERROR_SCREEN_PATH = './images/error-screen.png';
const ERROR_BOX_SIZE = 256;
const ERROR_BOX_START_POS = -(ERROR_BOX_SIZE / 2);

let box = {x: ERROR_BOX_START_POS, y: ERROR_BOX_START_POS};
let boxImage;
let screenImage;

function preload() {
  boxImage = loadImage(ERROR_BOX_PATH);
  screenImage = loadImage(ERROR_SCREEN_PATH);
}

function setup() {
  frameRate(24);
  
  createCanvas(windowWidth, windowHeight);
  background(0, 200, 0);
  // image(screenImage, 0, 0, windowWidth, windowHeight);
}

function draw() {
  image(boxImage, box.x, box.y, ERROR_BOX_SIZE, ERROR_BOX_SIZE);
  box.x += 10;
  box.y += 10;
  if (box.y > windowHeight) {
    box.y = ERROR_BOX_START_POS;
  }
  if (box.x > windowWidth) {
    box.x = random(0, windowWidth);
  }
}


function mouseClicked() {
  saveCanvas('save', 'png');
}
