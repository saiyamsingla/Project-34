const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here
bg= loadImage("GamingBackground.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1200,600);

  box1=new Box(500,100,55,55);
    box2=new Box(500,100,55,55);
    box3=new Box(500,100,55,55);
    box4=new Box(500,100,55,55);
    box5=new Box(500,100,55,55);
    box6=new Box(500,100,55,55);
    box21=new Box(500,100,55,55);
 
    box7=new Box(700,100,55,55);
    box8=new Box(700,100,55,55);
    box9=new Box(700,100,55,55);
    box10=new Box(700,100,55,55);
    box11=new Box(700,100,55,55);
    box12=new Box(700,100,55,55);
    box22=new Box(700,100,55,55);

    box13=new Box(600,100,55,55);
    box14=new Box(600,100,55,55);
    box15=new Box(600,100,55,55);
    box16=new Box(600,100,55,55);
    box17=new Box(600,100,55,55);
    box18=new Box(600,100,55,55);
    box19=new Box(600,100,55,55);
    box20=new Box(600,100,55,55);
    box23=new Box(600,100,55,55);
    

    monster1=new Monster(850,200,100,200)


  ground=new Ground(10,550,1900,25);

  hero=new Hero (200,30,200,100);

  fly=new Fly(hero.body,{x:250,y:200})

  block1=new Invisible(870,480,45,45);
  block2=new Invisible(870,435,45,45);
  block3=new Invisible(870,390,45,45);
 
  


   Engine.run(engine); 

}

function draw() {
  background(bg);

  ground.display();

  fly.display();

  block1.display();
  block2.display();
  block3.display();
 

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();



  
monster1.display();

  hero.display();

  

  

  
}

function mouseDragged() {

  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
  
}

function mouseReleased (){
  fly.fly();
}

