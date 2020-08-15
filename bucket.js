class Bucket{
    constructor(x,y,height,width){
       var options = {
            
            'restitution': 1,
            'isStatic':true
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.dustbin = loadImage("dustbingreen.png");
        World.add(world,this.body);

    }
    display(){
        imageMode(CENTER);
        image(this.dustbin,this.body.position.x,this.body.position.y);
    }
}