class Rock {
    constructor(x,y) {
      var options = {
          'restitution':0,
          'friction':1,
          'density':1.2,
          'isStatic':false
      }

      this.image = loadImage("rock.png")
      this.image.scale = 0.2;

      this.body = Bodies.circle(x, y,50,options);
      this.width = 40;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      //strokeweight(4);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }
  