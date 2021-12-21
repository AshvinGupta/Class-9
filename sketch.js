var player
function setup() {
  createCanvas(400, 400);
  player = createSprite(200, 200, 20, 20)
}

function draw() {
  background(30);
  if (keyDown(LEFT_ARROW)) {
    player.x -= 1
  }
if (keyDown(RIGHT_ARROW)){
  player.x+=1
}


  drawSprites();
}




