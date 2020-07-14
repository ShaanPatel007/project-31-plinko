class Plinko{

    constructor(x,y)
    {
      var options = 
      {
          isStatic:true
      }
      this.body = Bodies.circle(x,y,options);
          this.radius=10;
          World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("white");
        ellipse(random(5),20,5);
        pop();

      

      }
    }