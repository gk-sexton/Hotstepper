export function init(){
  var stage = new createjs.Stage('mainCanvas');
  var rectangle = new createjs.Shape();
  rectangle.graphics.beginFill(rgb(255, 60, 25)).drawRect(0,0,70);
  rectangle.x = 100;
  rectangle.y = 100;
  stage.addChild(rectangle);
  stage.update();
}
