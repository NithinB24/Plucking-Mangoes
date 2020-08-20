class Mango {
    constructor(x, y,height,angle) {
      var options = {
        'restitution':0,
        'friction':1,
        'isStatic':true
}
       this.image = loadImage("mango.png");
       this.image.scale = 0.1;

      
      this.body = Bodies.rectangle(x, y,20, height, options);
      this.width = 100;
      this.height = 100;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }
  