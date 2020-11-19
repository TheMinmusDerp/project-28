class Rocc
  {
    constructor(x,y,r)
    {
      var options={
        isStatic:true,
        restitution:0,
        friction:1
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x, this.y, this.r/2, options)
      World.add(world, this.body); 
      this.image = loadImage("sprites/stone.png");
    }
    display()
    {
      var ballpos=this.body.position;		
      push();
      translate(ballpos.x, ballpos.y);
      rectMode(CENTER);
      strokeWeight(3);
      image(this.image, 0-this.r/2, 0-this.r/2, this.r, this.r);
      //fill(255,0,255)
      //ellipse(0,0,this.r, this.r);
      pop();
       
    }
  
  }