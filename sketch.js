const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops=100;
var Thunder,thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame=0;

function preload(){
thunder1 = loadImage("1.png");
thunder2 = loadImage("2.png");
thunder3 = loadImage("3.png");
thunder4 = loadImage("4.png");
}

function setup(){
createCanvas(600,600); 
engine = Engine.create();
world = engine.world;

umbrella = new Umbrella(250,400);

for(var i = 0; i < maxDrops; i++){
drops.push(new Drops(random(0,400), random(0,400)));
}
}

function draw(){
Engine.update(engine);
background("black"); 

rand = Math.round(random(1,4));
if(frameCount%80 === 0){
thunderCreatedFrame = frameCount;
Thunder = createSprite(random(150,370), random(20,30), 10, 10);
switch(rand){
case 1: Thunder.addImage(thunder1);
break;
case 2: Thunder.addImage(thunder2);
break; 
case 3: Thunder.addImage(thunder3);
break;
case 4: Thunder.addImage(thunder4);
break;
default: break;
}

Thunder.scale = 0.3,0.6;
}

if(thunderCreatedFrame +8 ===frameCount && Thunder){
   Thunder.destroy();
}

umbrella.display();
 
for(var i = 0; i < maxDrops; i++){
drops[i].display();
drops[i].update();
}

drawSprites();
}   

