class Box{
    constructor(x, y, width, height) {
        var options = {
            //'restitution':0.2,
            'friction':0.5,
            'density':0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility = 255;
      }
      display(){
        if(this.body.speed<3){var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        
        fill("orange");
        rect(0,0,this.width,this.height)
        pop();}
        
        else{
      
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-1;
          tint(255,this.visibility);
         // rect(this.body.position.x,this.body.position.y,50,50);
          pop();
        }
      }
      
        
}
