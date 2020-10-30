//use namespacing 
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  //create engine and add it in his own world
  engine=Engine.create();
  world=engine.world;
  
  //use attributes inside curly braces
  var options={
    isStatic:true
  }
  
  //create ground and add it in the world
  ground=Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);
 
  //create bounciness for the ball
  var options={
    restitution:1
  }

  //create ball and add it to the world
  ball=Bodies.circle(200,100,20,options);
  World.add(world,ball);

  // console.log(object);
  // console.log(object.type);
  // console.log(object.position.x);
  // console.log(object.position.y);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
  rectMode(CENTER);  
  rect(ground.position.x,ground.position.y,400,20);

  ellipse(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}