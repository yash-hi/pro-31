class Umbrella {
constructor(x,y){
var options = {
'isStatic': true,
}
this.radius = 400;
this.body = Bodies.circle(x,y,0,options);
this.image = loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
World.add(world, this.body)
}

display(){
var pos = this.body.position;
imageMode(CENTER);
image(this.image, pos.x, pos.y,this.radius,this.radius);
}
}