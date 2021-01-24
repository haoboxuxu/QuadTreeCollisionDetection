class Photon {
  constructor(posX, posY) {
    this.pos = createVector(posX, posY);
    this.vel = createVector(c, 0);
    this.isStopped = false;
    this.hisPath = [];
  }
  
  toggleState() {
    this.isStopped = !this.isStopped;
  }
  
  travel() {
    const deltaV = this.vel.copy();
    deltaV.mult(slowMotion);
    this.pos.add(deltaV);
    this.hisPath.push(this.pos.copy());
  }
  
  showPhoton() {
    
    // noFill();
    // stroke(100, 100);
    // strokeWeight(5);
    // ellipse(this.pos.x, this.pos.y, this.rs * 3);
    
    strokeWeight(4);
    stroke(255, 0, 0);
    point(this.pos.x, this.pos.y);
    strokeWeight(2);
    noFill();
    beginShape();
    for (let h of this.hisPath) {
      vertex(h.x, h.y);
    }
    endShape();
  }
}
