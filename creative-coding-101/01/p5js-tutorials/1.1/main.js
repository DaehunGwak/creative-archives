/*
  ArtistWhoCode practices - 1.1
    - 1.0 + 원그리기 응용
    - 랜덤하게 중앙에 원의 색을 채우기
    
  refs
    - https://www.youtube.com/watch?v=kFZvX7GoKc0&list=PLUm8BKCCLrpchGRrtdaTAPXfDe3lOeHMp&index=2
*/

let yPos = 0;

function setup() {
  frameRate(60);
  createCanvas(400, 400);
  background(255);
}

function draw() {
  const color = yPos / height * 255;

  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  noStroke();
  fill(color, color, color, 200);
  rect(0, yPos, width, 1);

  noStroke();
  fill(
    255,
    Math.random() * 255, 
    Math.random() * 255, 
    20
  );
  ellipse(200, 200, 200);

  fill(255)
  stroke(20);
  ellipse(mouseX, mouseY, 20);
}


/*
  mouse 클릭 이벤트로 샘플 이미지 저장되도록 추가
*/
function mouseClicked() {
  saveCanvas('save', 'png');
}