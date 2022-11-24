
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall;
var ball;

var btn1;
var btn2;

function setup() {
  createCanvas(500,500);

  engine = Engine.create();
  world = engine.world;
  
  
  var ball_options = {
    restitution: 0,
  }
   
  var ball1_options = {
    restitution: 0,
  }

  var ball2_options = {
    restitution: 0,
  }

  var ball3_options = {
    restitution: 0,
  }
  var ball4_options = {
    restitution: 0,
  }
  //btn2 = createImg('up.png');
  //btn2.position(20,30);
  //btn2.size(50,50);
  //btn2.mouseClicked(vForce);
  
   
  con = Matter.Constraint.create({
    //pointA:{x:230,y:150},
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:50,
    stiffness:0.1
  })

  con1 = Matter.Constraint.create({
    //pointA:{x:230,y:150},
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:50,
    stiffness:0.1
  })

  con2 = Matter.Constraint.create({
    //pointA:{x:230,y:150},
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:50,
    stiffness:0.1
  })

  con3 = Matter.Constraint.create({
    //pointA:{x:230,y:150},
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:50,
    stiffness:0.1
  })
  con4 = Matter.Constraint.create({
    //pointA:{x:230,y:150},
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:50,
    stiffness:0.1
  })

  World.add(world,con);
  World.add(world.con1);
  World.add(world.con2);
  World.add(world,con3);
  World.add(world.con4);

  ground =new Ground(350,100,200,15);


  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);
  
  
  ball1 = Bodies.circle(200,450,20,ball_options);
  World.add(world,ball);
  
  
  ball2 = Bodies.circle(250,450,20,ball_options);
  World.add(world,ball);
  
  
  ball3 = Bodies.circle(300,450,20,ball_options);
  World.add(world,ball);
  
  
  ball4 = Bodies.circle(350,450,20,ball_options);
  World.add(world,ball);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
  ground.show();
  strokeWeight(2)
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  strokeWeight(2)
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball1.position.x,ball1.position.y);
  strokeWeight(2)
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball2.position.x,ball2.position.y);
  strokeWeight(2)
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball3.position.x,ball3.position.y);
  strokeWeight(2)
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball4.position.x,ball4.position.y);
  pop();
  Engine.update(engine);
}


//function vForce()
//{
  //Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
//}
  


