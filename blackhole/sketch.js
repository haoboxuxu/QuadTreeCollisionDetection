let m87;
let photons = [];
let start, end;

function setup() {
  
  createCanvas(canvasWidth, canvasHeight);
  m87 = new BlackHole(canvasWidth / 2, canvasHeight / 2, massM87);
  
  start = canvasHeight / 2;
  end = canvasHeight / 2 - m87.rs * 26;
  
  for (let i = 0; i < start; i+=5) {
    photons.push(new Photon(0 + 10, i));
  }
}

function draw() {
  background(220);
  m87.showBlackHole();
  //console.log(photons.length);
  for (let p of photons) {
    p.showPhoton();
    p.travel();
    m87.pullPhoton(p);
  }
}
