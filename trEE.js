class Treeboi {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/tree.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    image(this.image, this.width, this.height, pos.x, 0-pos.y);
    //fill("brown");
    //rect(pos.x, pos.y, this.width, this.height);
  }
};