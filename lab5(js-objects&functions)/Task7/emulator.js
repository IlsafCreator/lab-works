var soldier1 = {
  name: 'John',
  health: 100,
  currentCoordinates: { x: 10, y: 20 },
  shot: function (x, y) {
    console.log(x, y);
  }
};

var soldier2 = {
  name: 'Gook',
  health: 100,
  currentCoordinates: { x: 90, y: 80 },
  shot: function (x, y) {
    console.log(x, y);
  }
};

ы
setInterval(function () {
  // todo: spawn 2 soldiers

  var shotX = Math.floor(Math.random() * 100);
  var shotY = Math.floor(Math.random() * 100);
  soldier1.shot(shotX, shotY);
}, 600);
