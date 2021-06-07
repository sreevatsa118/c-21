var fixedRect, movingRect;
var a, b ,c ,d,car1 ,car2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "red";
  
  a = createSprite(100, 400, 50, 80);
  a.shapeColor = "green";
  b = createSprite(200, 400, 50, 80);
  b.shapeColor = "green";
  c = createSprite(300, 400, 50, 80);
  c.shapeColor = "green";
  d = createSprite(370, 400, 50, 80);
  d.shapeColor = "green";
  car1 = createSprite(400, 100, 50, 80);
  car1.shapeColor = "green";
  
  car2 = createSprite(400, 800,80,30);
  car2.shapeColor = "green";
  

  car2.velocityY = -5;
  car1.velocityY = +5;


}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(d, movingRect)){
  movingRect.shapeColor = "green";
  d.shapeColor = "green";

}
  else {
    movingRect.shapeColor = "red";
    d.shapeColor = "red";

  }
bounceoff(car2,car1);
  drawSprites();
}
