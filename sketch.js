var move, fix;


function setup() {

  createCanvas(800,400);
 move = createSprite(400, 200, 80, 30);
 move.shapeColor = "blue";
 fix = createSprite(200, 200, 50, 80);
 fix.shapeColor = "blue";
}

function draw() {
  background(255,255,255); 
  
  move.x = World.mouseX;
  move.y = World.mouseY;
  if(move.x-fix.x <= fix.width/2 + move.width/2
    &&fix.x-move.x <= fix.width/2 + move.width/2
    &&move.y-fix.y <= fix.height/2 + move.height/2
    &&fix.y-move.y <= fix.height/2 + move.height/2){
    move.shapeColor = "magenta";
    fix.shapeColor = "magenta";
  }
  else{
    move.shapeColor = "blue";
    fix.shapeColor = "blue";
  }
  drawSprites();
}