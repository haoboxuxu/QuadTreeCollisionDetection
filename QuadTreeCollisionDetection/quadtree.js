class QuadTree {
  constructor(bounds, cap) {
    this.bounds = bounds;
    this.cap = cap;
    this.childPoints = [];
    this.isDivided = false;
  }

  insert(point) {
    if (!this.bounds.contain(point)) {
      return false;
    }
    
  if (this.childPoints.length < this.cap) {
      this.childPoints.push(point);
  }else {
      if (!this.isDivided) {
        this.subDivide();
        return true;
      }
      return (this.topRight.insert(point) ||
              this.topLeft.insert(point) ||
              this.buttomRight.insert(point) ||
              this.buttomLeft.insert(point));
    }
  }
    
  subDivide() {
    let x = this.bounds.x;
    let y = this.bounds.y;
    let w = this.bounds.w / 2;
    let h = this.bounds.h / 2;
    
    let tr = new Rectangle(x + w, y - h, w, h);
    this.topRight = new QuadTree(tr, this.cap);
    
    let tl = new Rectangle(x - w, y - h, w, h);
    this.topLeft = new QuadTree(tl, this.cap);
    
    let br = new Rectangle(x + w, y + h, w, h);
    this.buttomRight = new QuadTree(br, this.cap);
      
    let bl = new Rectangle(x - w, y + h, w, h);
    this.buttomLeft = new QuadTree(bl, this.cap);
      
    this.isDivided = true;
  }
  
  show() {
    stroke(255);
    noFill();
    strokeWeight(1);
    rectMode(CENTER);
    rect(this.bounds.x, this.bounds.y, this.bounds.w * 2, this.bounds.h * 2);
    if (this.isDivided) {
      this.topRight.show();
      this.topLeft.show();
      this.buttomRight.show();
      this.buttomLeft.show();
    }
    for (let p of this.childPoints) {
      console.log(p.x + " " + p.y);
      strokeWeight(3);
      point(p.x, p.y);
    }
  }
  
}