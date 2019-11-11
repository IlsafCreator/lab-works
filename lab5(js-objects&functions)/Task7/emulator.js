var soldier1 = {
  name: 'John',
  health: 100,
  currentCoordinates: { x: 0, y: 0 },
  shot: function (x, y) {
    console.log(x, y);
  },
  spawn: function () {
    this.currentCoordinates.x = Math.floor(Math.random() * 5);
    this.currentCoordinates.y = Math.floor(Math.random() * 5);
    console.log(this.name + ' spawned at ' + this.currentCoordinates.x + ' ; ' + this.currentCoordinates.y);
  }
};

var soldier2 = {
  name: 'Gook',
  health: 100,
  currentCoordinates: { x: 0, y: 0 },
  shot: function (x, y) {
    console.log(x, y);
  },
  spawn: function () {
    this.currentCoordinates.x = Math.floor(Math.random() * 5);
    this.currentCoordinates.y = Math.floor(Math.random() * 5);
    console.log(this.name + ' spawned at ' + this.currentCoordinates.x + ' ; ' + this.currentCoordinates.y);
  }
};
soldier1.spawn();
soldier2.spawn();

setInterval(function () {
  if (soldier1.health > 0 && soldier2.health > 0) {
    var shotX = Math.floor(Math.random() * 5);
    var shotY = Math.floor(Math.random() * 5);
    soldier1.shot(shotX, shotY);
    if (shotX === soldier2.currentCoordinates.x && shotY === soldier2.currentCoordinates.y) {
      console.log(soldier1.name, 'попал по: ', soldier2.name);
      soldier2.health -= 25;
    }
    var shotX = Math.floor(Math.random() * 5);
    var shotY = Math.floor(Math.random() * 5);
    soldier2.shot(shotX, shotY);
    if (shotX === soldier1.currentCoordinates.x && shotY === soldier1.currentCoordinates.y) {
      console.log(soldier2.name, 'попал по: ', soldier1.name);
      soldier1.health -= 25;
    }

    if (soldier1.health <= 0) {
      console.log(soldier2.name, 'выиграл!');
    } else if (soldier2.health <= 0) {
      console.log(soldier1.name, 'выиграл!');
    }
  }
}, 100);
