class Drops{
constructor(x, y){
var options = { 
'restitution':0.1,
'friction':0.01
}
this.radius = 4;
this.body = Bodies.circle(x, y, 4, options);
World.add(world, this.body);
}
update(){
if(this.body.position.y > height){
Matter.Body.setPosition(this.body,{x:random(0, 600), y:random(0, 600)});
}
}
display(){
fill("blue");
ellipseMode(RADIUS);
ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
}
}