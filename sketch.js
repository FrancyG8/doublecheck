function preload() {
  // put preload code here
}

var canvas;
let rectY = 0;
let ellY = 725;
let fr = 60;
let timer = 00;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);

  frameRate(fr);
}

function draw() {
  // put drawing code here
  clear();
  fill(255, 0, 0);
  noStroke();

  //cerchio fermo
  ellipse(33.1, 726, 24.1);


  fill('black');
  text(timer, 32.5, 150);
  textSize(15);
  textAlign(CENTER);
  textFont('bandeins_strangemedium');


  fill('#FF0000');
  rectY = rectY -= 0.32;
  ellY = ellY -= 0.32;
  rect(20.6, 725, 24.5, rectY);
  //cerchio che si alza
  ellipse(33.2, ellY, 24.1);

  if (frameCount % 60 == 0 && timer < 30) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer++;

  }
  if (timer == 30) {
   rect(0, 0, windowWidth, windowHeight);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
