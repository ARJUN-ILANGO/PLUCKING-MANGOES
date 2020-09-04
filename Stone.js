class Stone{
    constructor(x, y, width, height) {
        var options = {  
          restitution :0.4,
          friction :0.0,
      }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.png")
        World.add(world, this.body);
  
      }
      display(){
        image(this.image,100,250,50,50);
  
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       
        pop();
      }
  }