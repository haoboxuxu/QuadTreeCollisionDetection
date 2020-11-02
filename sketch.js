let quadTree;

function setup() {
  createCanvas(800, 800);
  let bounds = new Rectangle(400, 400, 400, 400);
  let cap = 4;
  quadTree = new QuadTree(bounds, cap);

  for (let i = 0; i < 100; i++) {
    let point = new Point(random(width), random(height));
    quadTree.insert(point);
  }
  
  // let treeDFS = new TresDFS();
  // treeDFS.dfs(quadTree);
  background(0);
  quadTree.show();
}

function draw() {
  if (mouseIsPressed) {
    for (let i = 0; i < 5; i++) {
      let m = new Point(mouseX + random(-30, 30), mouseY + random(-30, 30));
      quadTree.insert(m);
    }
    quadTree.show();
  }
}