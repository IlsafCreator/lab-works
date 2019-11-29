'use strict';
function Song(songName, songLength) {
  this.songName = songName;
  this.songLength = songLength;
}

function PlayerList(song) {
  this.songs = [song];
}

function Player(playerList) {
  this.playerList = playerList;
  this.currentTrack = playerList.songs[0][0].songName;
  this.status = 'stop';
  let index = 0;

  this.display = function () {
    return 'Track: ' + this.currentTrack + '; Status: ' + this.status;
  };

  this.play = function () {
    this.status = 'play';
  };

  this.stop = function () {
    this.status = 'play';
  };

  this.pause = function () {
    this.status = 'pause';
  };

  this.next = function () {
    if (index != playerList.songs[0].length - 1) {
      index++;
      this.currentTrack = playerList.songs[0][index].songName;
    }
    else {
      index = 0;
      this.currentTrack = playerList.songs[0][index].songName;
    }
  };

  this.prev = function () {
    if (index != 0) {
      index--;
      this.currentTrack = playerList.songs[0][index].songName;
    }
    else {
      index = playerList.songs[0].length - 1;
      this.currentTrack = playerList.songs[0][index].songName;
    }
  };
}

var playerList = new PlayerList([new Song('Children of cyberpunk', 209),
new Song('Beat it', 211), new Song('Country road', 240),
new Song('Venger', 310), new Song('Чёрное солнце', 289)]);
var player = new Player(playerList);