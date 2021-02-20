/*
  ArtistWhoCode practices - 1.3
    - 꾸물꾸물거리는 무언가 만들어보고 싶었음
    - 파도는 힘들어 시간이 많이 들 것 같아 포기
    - inspired by https://www.instagram.com/p/CJmK5OCBkbR/?utm_source=ig_web_copy_link
    
  note
    - 기존 좌표계가 왼쪽상단 기준이고, y는 아래로 내려갈 수록 +임 (x는 동일)
    - `translate()`는 상대 좌표계로 움직임
    - push();  // p5js에서 pop되기전까지 사용할 환경 값 박스를 스택에 쌓는다
    
  refs
    - https://www.youtube.com/watch?v=i5bs3SPpHdM&list=PLUm8BKCCLrpchGRrtdaTAPXfDe3lOeHMp&index=4
*/


const MIN_SIZE = 0;
const MAX_SIZE = 10;
const TERM_SIZE = 50;
const OBJECT_COUNT = 11;
const OBJECT_LENGTH = OBJECT_COUNT * 2;
const ITERVAL_SIZE = (MAX_SIZE - MIN_SIZE) / OBJECT_LENGTH;
const OBJECT_COLOR = "rgba(80, 80, 80, 0.4)"
let objectSizes = []
let objectFlags = []


function setup() {
  frameRate(60);
  createCanvas(600, 600);
  background(255);
  for (let i = 0; i < OBJECT_LENGTH; i++) {
    objectSizes.push(MIN_SIZE + ITERVAL_SIZE * i);
    objectFlags.push(1);
  }
  objectFlags[0] = -1;
}


function calculateSize(speed = 1) {
  for (let i = 0; i < OBJECT_LENGTH; i++) {
    if (objectSizes[i] <= MIN_SIZE || objectSizes[i] >= MAX_SIZE) {
      objectFlags[i] *= -1;
    }
    objectSizes[i] += objectFlags[i] * speed;
  }
}


function draw() {
  background(255, 30);
  noStroke();
  fill(OBJECT_COLOR);
  
  calculateSize(0.2);
  
  const startX = width / 2 - ((OBJECT_COUNT - 1) - (OBJECT_COUNT - 1) / 2) * TERM_SIZE;
  
  for (let y = 0; y < OBJECT_COUNT; y++) {
    push();
    translate(
      startX,
      width / 2 - (y - (OBJECT_COUNT - 1) / 2) * TERM_SIZE
    );
    for (let x = 0; x < OBJECT_COUNT; x++) {
      ellipse(TERM_SIZE * x, 0, objectSizes[(x + y) % OBJECT_LENGTH]);
    }
    pop();
  }
}


function mouseClicked() {
  saveCanvas('save', 'png');
}
