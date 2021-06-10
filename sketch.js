var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var engine, world;
var bg;
var boy_run, boy_stand, boy, Snow, snowimg;
var snowfalke = [];
function preload() {
  bg = loadImage("snow1.png");
  snowimg = loadImage("snow5 .png");
}

function setup() {
  createCanvas(1400, 580);

  //Snow = new snow(Math.round(random(100, 600)), 0, 10);
  console.log(Snow);
}

function draw() {
  background(bg);

  if (frameCount % 60 === 0) {
    snowfalke.push(new snow(Math.round(random(100, 1300)), 0, 10))
  }
  for (var v = 0; v < snowfalke.length; v++) {
    snowfalke[v].display();
  }
  //Snow.display();
  drawSprites();
}