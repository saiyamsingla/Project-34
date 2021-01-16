class Invisible{

constructor(x,y,w,h){
    var options={
        isStatic:true,
        'restitution':0.8,
        'friction':1.0,
        'density':1.2
        
    };
    
    this.body=Bodies.rectangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
    
    World.add(world,this.body);
        }
    
        display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    
    translate(pos.x,pos.y);
    rotate(angle);
    
    
    strokeWeight(3);
    stroke("black");
    fill("green");
    
    
    pop();
        }
    }