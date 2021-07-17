var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var score = 0

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  textSize(20);
  text("Score: "+score,40,25);

  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX
  if(rabbit.x < 60)
  {
    rabbit.x = 60;
  }
    
  if(rabbit.x > 340)
  {
    rabbit.x = 340;
  }


  createApples()
  drawSprites();
}


function createApples(){
if(frameCount % 30 === 0){
  var apples = createSprite(random(50,350),70,30,30) 
  apples.addImage(appleImg);
  apples.velocityY = 5
  apples.scale=0.05
  apples.depth = rabbit.depth
  rabbit.depth = rabbit.depth + 1
   }

}