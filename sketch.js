var fixedRect, movingRect;

var r1, r2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  r1 = createSprite(500,200,50,50)
  r2 = createSprite(300,100,50,80)
  r1.shapeColor = "yellow"
  r2.shapeColor = "red"

}

function draw() {
  background(0,0,0);  
  r1.x = World.mouseX;
  r1.y = World.mouseY;

  if(collision(r1,r2)){
    r1.shapeColor = "blue"
    r2.shapeColor = "blue"

  }
  else{
    r1.shapeColor = "yellow"
    r2.shapeColor = "red"

  }
  
  drawSprites();
}


