const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var upButton, RightButton;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options={
    restitution:1.0,
  }
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  ball = Bodies.circle(200,200,25, ball_options);
  World.add(world, ball);

  upButton = createImg('up.png');
  upButton.position(20,30);
  upButton.size(50,50);
  upButton.mouseClicked(vForce);

  RightButton = createImg('right.png');
  RightButton.position(220,30);
  RightButton.size(50,50);
  RightButton.mouseClicked(hForce);


 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();

  ellipse(ball.position.x, ball.position.y, 25);

  Engine.update(engine);
}

function hForce()
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x: 0.05, y: 0});
}

function vForce()
{
  Matter.Body.applyForce(ball, {x: 0, y:0}, {x: 0, y: -0.05});
}