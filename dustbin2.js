class Dustbin2{
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("sprites/dustbingreen.png");
        World.add(world, this.body);
        this.width = width;
        this.height = height;
    
    }
    display()
    {
        imageMode(CENTER);
        fill(255);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

    }
}
