/*
  ArtistWhoCode practices - 1.2
    - 블랙 & 화이트로 변경
    - 개체 수 변경
    - frame에 따른 개체 수 랜덤화
    
  refs
    - https://www.youtube.com/watch?v=DEHsww5HrLY&list=PLUm8BKCCLrpchGRrtdaTAPXfDe3lOeHMp&index=3
*/


let size = 7;
let len = 10;
const maxLen = 60;

function setup() {
  frameRate(60);
  createCanvas(600, 600);
  background(255);
}

function randomizeLen() {
  if (frameCount % 120 == 0) {
    len = 10 + Math.floor(Math.random() * (maxLen - 10));
    console.log(len);
  }
}

function draw() {
  background(255, 40);
  noStroke();
  translate(width / 2, height / 2); // 좌표계 원점 수정
  
  // 2초마다 개체 수 재조정
  randomizeLen();
  
  // 정방향
  for (let i = 0; i < len; i++) {
    push();
    rotate(frameCount / 60 - i / 2);
    fill(50, 50, 50, 100);
    ellipse(size * 2 + size * i, 0, size);
    pop();
  }
  
  // 반대 방향
  for (let i = 0; i < len; i++) {
    push();
    rotate(-(frameCount / 60 - i / 2));
    fill(50, 50, 50, 100);
    ellipse(size * 2 + size * i, 0, size);
    pop();
  }
}

function mouseClicked() {
  saveCanvas('save', 'png');
}
