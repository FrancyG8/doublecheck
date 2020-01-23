let fr = 60; //--3000 frames erano necessari con la connessione del Poli

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  if(frameCount >= 3600){ //--Davvero il framerate è legato alla connessione?!
    tempoScaduto();
  } else {
    console.log(frameCount);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function tempoScaduto(){
  window.open('../right-wrong/timeisup1.html', '_self');
}
