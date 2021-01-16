class Monster{
  constructor(x,y,w,h){
    var options={
    
        'friction':0.7,
        'density':20
        
    };
    
    this.body=Bodies.rectangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
this.image=loadImage("Monster-01.png");
    
    World.add(world,this.body);
        }
    
        display(){
    var pos=this.body.position;
  
    push();
    
    translate(pos.x,pos.y);
    
    
    
    strokeWeight(3);
    stroke("black");
    fill("red");
    image(this.image,0,0,this.w,this.h);
    
    pop();
        }
}