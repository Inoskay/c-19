var score = 0 
var gameState = "play"

function preload(){
bg = loadImage("backround1.png")
kakyoinImg = loadAnimation("k1.png","k2.png","k3.png")
flameImg = loadImage("flame.png")
}

function setup() {
  createCanvas(600, 600);
  bg1 = createSprite(300,200);
  bg1.addImage(bg)
  bg1.scale = 1.2;
  bg1.velocityX = -6

  ground = createSprite(0,530,1200,10)
  ground.visible = false

  kakyoin = createSprite(30,510)
  kakyoin.addAnimation("character",kakyoinImg)
  
}

function draw() {
  background(200);

  if (bg1.x<0){
      bg1.x=bg1.width/2
  }
  kakyoin.collide(ground)

  if (keyDown ("space") && kakyoin.y>430){

    kakyoin.velocityY = -10

  }
kakyoin.velocityY = kakyoin.velocityY + 1

spawnFlames()
  drawSprites()

  text("score= " + score,480,50)
  score = score + Math.round(frameRate/60)
  
    
}

function spawnFlames(){
  if (frameCount%60===0){
    var flames = createSprite(600,480)
    flames.addImage("flames",flameImg)
    flames.velocityX = -6
    flames.lifetime = 100

  }
}