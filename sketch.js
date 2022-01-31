var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "blue";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "blue";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("");
 var shop = createSprite(370, 190,20,60);
   shop.shapeColor = "orange";
  
 if (sam.isTouching(shop)) {
    text("you win", 190, 340,30,30);
  }
   
 
 
 
 
 
 
//add the velocity to make the car move.
car1.velocityY = 5;
car2.velocityY = -5;
car3.velocityY = 5;
car4.velocityY = -5;
function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
createEdgeSprites();
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);


//Add the condition to make the sam move left and right
if (keyDown(LEFT_ARROW)) {
  sam.x=sam.x-2;
}

if (keyDown(RIGHT_ARROW)) {
  sam.x=sam.x+2;
}



//Add the condition to reduce the life of sam if it touches the car.
if (sam.isTouching(car1)||
sam.isTouching(car2) ||
sam.isTouching(car3) ||
sam.isTouching(car4))
  {
    sam.x=20;
    sam.y=190;
    life=life+1
  }
    
 drawSprites();
}


