import createjs from 'createjs';

class Game {
  constructor(){
    this.stage = new createjs.Stage('mainCanvas');
    this.body = document.getElementById('mainCanvas');
    this.rectangle = new createjs.Shape();
    this.player = new createjs.Shape();
    this.ground = new createjs.Shape();
    this.playerGoing = 'nowhere';
    this.paused = false;

    this.rectangle.graphics.beginFill('rgba(179, 0, 53, 0.83)').drawRect(0,0,this.body.width,this.body.height);
    this.rectangle.x = 0;
    this.rectangle.y = 0;

    this.player.graphics.beginFill('rgb(0, 186, 255)').drawRect(0,0,20,20)
    this.player.x = 40;
    this.player.y = 100;

    this.ground.graphics.beginFill('rgb(72, 99, 108)').drawRect(0,0,this.body.width + 4,115)
    this.ground.x = 0;
    this.ground.y = 120;

    this.stage.addChild(this.rectangle);
    this.stage.addChild(this.player);
    this.stage.addChild(this.ground);
    this.stage.update();

    this.generateObstacle();

    this.tickHandler = this.tickHandler.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.playerJump = this.playerJump.bind(this);
    this.moveObjects = this.moveObjects.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.pauseHandler = this.pauseHandler.bind(this);
    this.moveObstacle = this.moveObstacle.bind(this);
  }

  resetHandler(){

  }
  pauseHandler(){

  }
  start(){
    document.onkeydown = this.keyPress;
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on('tick', this.tickHandler);
  }

  playerJump(){
    if (this.playerGoing == 'nowhere'){
      this.playerGoing = 'up';
    }
  };

  moveObjects(){
    if (this.playerGoing == 'up'){
      if (this.player.y > 60){
        this.player.y -= 1;
      } else {
        this.playerGoing = 'down';
      }
    } else {
      if (this.player.y == 100){
        this.playerGoing = 'nowhere';
      } else {
        this.player.y += 1;
      }
    }
    if (createjs.Ticker.getTicks() % 300 == 0){
      this.generateObstacle();
    }
    this.moveObstacle();
  }

  moveObstacle(){
    this.obstacle.x -= 1;
  }
  generateObstacle(){
    this.obstacle = new createjs.Shape();
    this.obstacle.graphics.beginFill('blackrgb(173, 120, 3)').drawRect(0,0,10,10);
    this.obstacle.x = this.body.width;
    this.obstacle.y = 110;
    this.stage.addChild(this.obstacle);
    this.stage.update();
    }

  keyPress(e){
    const jump = 32, pause = 9, reset = 82;
    switch(e.keyCode){
      case pause:
        this.pauseHandler();
      case jump:
        this.playerJump();
      case reset:
        this.resetHandler();
    }
  }

  tickHandler(){
    this.moveObjects();
    this.stage.update();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game;
  game.start();
});
