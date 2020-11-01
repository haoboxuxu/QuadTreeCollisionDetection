function setup() {
  createCanvas(800, 800);
  let bounds = new Rectangle(400, 400, 400, 400);
  let cap = 4;
  let quadTree = new QuadTree(bounds, cap);

  for (let i = 0; i < 10; i++) {
    let point = new Point(random(width), random(height));
    quadTree.insert(point);
  }
  
  // let treeDFS = new TresDFS();
  // treeDFS.dfs(quadTree);
  background(0);
  quadTree.show();
}

function draw() {
  //background(220);
}