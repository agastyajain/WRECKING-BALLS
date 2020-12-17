class Block{
    constructor(x,y,w,h){
       var options = {
           isStatic :  false,
           restitution : 1,
           friction : 1,
           density : 1.2
       }
       this.body=Bodies.rectangle(x,y,w,h,options);
       World.add(world,this.body);
       this.width=w;
       this.height=h;
    }

    display(){
   push();
   var pos = this.body.position;
    stroke("green");
    strokeWeight(5);
    fill("white");
    rectMode(CENTER);
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    rect(0,0,this.width,this.height);
    pop();

    }
}