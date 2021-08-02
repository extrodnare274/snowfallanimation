var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];


var divisionHeight=300;
var score =0;
function preload() {
bg1 = loadImage("snow1.jpg")



}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);



   


    
    

    
}
 


function draw() {
  background(bg1);
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
 
   if(frameCount%5===0){
     particles.push(new Particle(random(width/2-300, width/2+300), 50,50));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
  
}