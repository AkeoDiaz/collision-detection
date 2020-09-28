var fixedRect, moveRect;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(100,200,30,50);
  fixedRect.shapeColor = "green";

  moveRect = createSprite(700,200,30,30);
  moveRect.shapeColor = "green";
}

function draw() {
  background(0);  
  moveRect.x=mouseX;  
  moveRect.y=mouseY;

  if(moveRect.x-fixedRect.x<(moveRect.width/2)+(fixedRect.width/2) && 
  fixedRect.x-moveRect.x<(moveRect.width/2)+(fixedRect.width/2) && 
  moveRect.y-fixedRect.y<(moveRect.height/2)+(fixedRect.height/2) && 
  fixedRect.y-moveRect.y<(moveRect.height/2)+(fixedRect.height/2)){
    fixedRect.shapeColor = "red";
    moveRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    moveRect.shapeColor = "green";   
    
  }

  drawSprites();
}