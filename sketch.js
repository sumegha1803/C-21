
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  var countDistanceX=0
  var gap=60;

for(var i=0; i<10; i++) {

  platform=new Platform(countDistanceX);
  countDistanceX=countDistanceX+platform.rw+gap;
 

}


 
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

