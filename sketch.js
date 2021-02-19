//This game is one where you need to move along the bottom of the screen with the arrows in order to catch falling objects
//consider having a swinging box that you can apply force to with the arrow keys?
//arrrow controls
//sliding block
//falling objects
//you win once you've caught all the objects
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var engine, world, render; 
var score, gamestate, time;
var balls=[], square, rope, maxBalls; 

function setup() {
  createCanvas(800,1000);

  gamestate = 'play'
  time = 0;
  score = 0;
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;
 //CREATE BODIES
 square = new Box();
 var point = {x: 400, y: 200};
 rope = new Rope(square.body, point);

maxBalls = 100;
for(var i = 0; i<maxBalls; i++){
  balls.push(new Ball(random(50, 750), random(-300,0)));
} 

/* 
render = Render.create({
   element: document.body,
   engine: engine,
   options: {
     width: 1600,
     height: 800,
     wireframes: false
   }
 });
*/

 Engine.run(engine);
// Render.run(render);
}

function draw() {
  background(0, 60, 112);    
  
  textSize(20);
  fill(255);

  Engine.update(engine);
  if(gamestate === "play"){
    time++;

    for(var i = 0; i<balls.length; i++){
      var currentBall = balls[i];
      currentBall.display();
      currentBall.update(currentBall.body);
      detectCollision(currentBall, square);
    }
  }
  rope.display();
  console.log(time);
  square.display();
  //drawSprites();
  if(score === maxBalls){
    
    text("You got all the balls in " + Math.round(time/50) + " seconds! You win! Press r to restart.", 150, 350);
    gamestate = 'end'; 
  }

  text("Time: " + Math.round(time/50), 30, 20);
}

function keyPressed(){
  if(keyCode===LEFT_ARROW){
    Matter.Body.applyForce(square.body, square.body.position, {x: -.05, y: 0});
  }
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(square.body, square.body.position, {x: .05, y: 0});
  }
  if(keyCode === 82 && gamestate === 'end'){
    setup();
    gamestate = 'play';
  }
  //make a detect collision function, maybe make it a sliding box instead of swinging: you may need a ground but just update them right above the ground
  //add a score and a gamestate
}
function detectCollision(body1, body2){
  var body1Pos = body1.body.position;
  var body2Pos = body2.body.position;
  var bodyDist = dist(body1Pos.x, body1Pos.y, body2Pos.x, body2Pos.y); 
  if(bodyDist<=80){
    World.remove(world, body1.body);
    body1.body.position = {x: -10, y: -10};
    score++;
  }
}