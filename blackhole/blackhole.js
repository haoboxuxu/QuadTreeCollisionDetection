class BlackHole {
  constructor(posX, posY, mass) {
    this.pos = createVector(posX, posY);
    this.mass = mass;
    this.rs = (2 * G * this.mass) / (c * c);
  }
  
  pullPhoton(photon) {
    const forceV = p5.Vector.sub(this.pos, photon.pos);
    const r = forceV.mag();
    const a = (G * this.mass) / (r * r);
    forceV.setMag(a);
    photon.vel.add(forceV);
    photon.vel.setMag(c);
  }
    
  showBlackHole() {
    
    //center balckhole
    ellipseMode(RADIUS);
    fill(0);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.rs);
    
    //3rs circle
    noFill();
    stroke(100, 100);
    strokeWeight(5);
    ellipse(this.pos.x, this.pos.y, this.rs * 3);
    
    //1.5rs circle
    noFill();
    stroke(255, 150, 0, 100);
    strokeWeight(5);
    ellipse(this.pos.x, this.pos.y, this.rs * 1.5);
  }
}



