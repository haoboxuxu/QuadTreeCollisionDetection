class QuadTree {
	constructor(bounds, cap) {
		this.bounds = bounds;
		this.cap = cap;
		this.childPoints = [];
    this.isDivided = false;
	}

	insert(point) {
    if (this.childPoints.length < this.cap) {
      this.childPoints.push(point);
    }else {
          if (!this.isDivided) {
            this.subDivide(); 
            this.isDivided = true;
          }
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
      this.topRight = new QuadTree(tl, this.cap);
      
      let br = new Rectangle(x + w, y + h, w, h);
      this.topRight = new QuadTree(br, this.cap);
      
      let bl = new Rectangle(x - w, y + h, w, h);
      this.topRight = new QuadTree(bl, this.cap);
    }
}