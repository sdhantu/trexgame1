var ground,groundImage
var trex ,trex_running;
function preload(){
 trex_running = loadAnimation("trex1.png","trex3.png","trex4.png") 
 groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,170,10,10);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5


 ground = createSprite(300,180,600,2);
 ground.addImage("ground",groundImage)
 ground.velocityX = -3
}

function draw(){
  background("white")

  if(ground.x<0){
    ground.x = ground.width/2
  }
  trex.collide(ground)
drawSprites()
}
