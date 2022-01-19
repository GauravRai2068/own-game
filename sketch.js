function preload(){
ghostImg=loadImage("ghost-standing.png");
}

function setup() {
 createCanvas(800,800);
 ghost=createSprite(50,50,20,50);
 ghost.addImage(ghostImg);
}

function draw() {
 background("red")
 drawSprites();
}