class TresDFS {
  dfs(qt) {
    if (qt.childPoints.length == 0) {
      return;
    }
    for (let i = 0; i < qt.childPoints.length; i++){
      console.log(qt.childPoints[i]);
    }
  }
}