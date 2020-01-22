let fr = 60; //--3000 frames erano necessari con la connessione del Poli

function preload() {}

function setup() {
  frameRate(fr);
}

function draw() {
  if(frameCount >= 1800){ //--Davvero il framerate è legato alla connessione?!
    tempoScaduto();
  } else {
    console.log(frameCount);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// function rispostaSbagliata(){
//   window.open('../right-wrong/wrong1.html', '_self');
// }
//
// function rispostaGiusta(){
//   window.open('../right-wrong/right1.html', '_self');
// }

function tempoScaduto(){
  window.open('../right-wrong/timeisup1.html', '_self');
}
