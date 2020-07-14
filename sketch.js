const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;






function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,400,400,20);

  plinko1 = new Plinko(20,10);
  plinko2 = new Plinko(50,10);
  plinko3 = new Plinko(80,10);
  plinko4 = new Plinko(110,10);
  plinko5 = new Plinko(140,10);
  plinko6 = new Plinko(170,10);
  plinko7 = new Plinko(200,10);
  plinko8 = new Plinko(230,10);
  plinko9 = new Plinko(260,10);
  plinko10 = new Plinko(290,10);
  plinko11 = new Plinko(320,10);
  plinko12 = new Plinko(350,10);
  plinko13 = new Plinko(380,10);


  plinko21 = new Plinko(35,50);
  plinko22 = new Plinko(65,50);
  plinko23 = new Plinko(95,50);
  plinko24 = new Plinko(125,50);
  plinko25 = new Plinko(155,50);
  plinko26 = new Plinko(185,50);
  plinko27 = new Plinko(215,50);
  plinko28 = new Plinko(245,50);
  plinko29 = new Plinko(275,50);
  plinko30 = new Plinko(305,50);
  plinko31 = new Plinko(335,50);
  plinko32 = new Plinko(365,50);
  plinko33 = new Plinko(395,50);

  plinko41 = new Plinko(20,100);
  plinko42 = new Plinko(50,100);
  plinko43 = new Plinko(80,100);
  plinko44 = new Plinko(110,100);
  plinko45 = new Plinko(140,100);
  plinko46 = new Plinko(170,100);
  plinko47 = new Plinko(200,100);
  plinko48 = new Plinko(230,100);
  plinko49 = new Plinko(260,100);
  plinko50 = new Plinko(290,100);
  plinko51 = new Plinko(320,100);
  plinko52 = new Plinko(350,100);
  plinko53 = new Plinko(3800,100);
  
  BerlinWall1 = new Divider(0,340,20,100);
  BerlinWall2 = new Divider(100,340,20,100);
  BerlinWall3 = new Divider(200,340,20,100);
  BerlinWall4 = new Divider(300,340,20,100);
  BerlinWall5 = new Divider(400,340,20,100);


}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();
  plinko41.display();
  plinko42.display();
  plinko43.display();
  plinko51.display();
  plinko52.display();
  plinko53.display();

  BerlinWall1.display();
  BerlinWall2.display();
  BerlinWall3.display();
  BerlinWall4.display();
  BerlinWall5.display();

  ball.display();

}



function keyPressed(){
  if(keyCode === 32){
    ball = new Particle(random(10,390),0);
  }
}