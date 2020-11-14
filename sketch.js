var fixedRect, movingRect;
var o1, o2

var gameobject1, gameobject2, gameobject3, gameobject4


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(400,100,80,50);
  o1 =  createSprite(100,0,50,80)
  o2 =  createSprite(100,400,80,30)
  fixedRect.shapeColor = "crimson"
  movingRect.shapeColor = "crimson"
  o1.shapeColor = "pink"
  o2.shapeColor = "purple"
  o1.velocityY = 3;
  o2.velocityY = -3;

gameobject1 = createSprite(100,100,50,50)
gameobject2 = createSprite(200,100,50,50)
gameobject3 = createSprite(300,100,50,50)
gameobject4 = createSprite(400,100,50,50)

gameobject1.shapeColor = "orange"
gameobject2.shapeColor = "orange"
gameobject3.shapeColor = "orange"
gameobject4.shapeColor = "orange"


}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  

  //isTouching and collide
  if(isTouching(movingRect,gameobject1)){
    gameobject2.shapeColor = "purple"
    fixedRect.shapeColor = "purple"
  }else{
    gameobject2.shapeColor = "yellow"
    fixedRect.shapeColor = "yellow"
  }
bounceOff(o1, o2)
console.log(movingRect.x-fixedRect.x);
  drawSprites();
}



