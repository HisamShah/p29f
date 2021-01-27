class Blockorange
{
    constructor(x,y,width,height)
    {
        var options={
            restitution:1,
            friction:0.3,
            density:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image=loadImage("p/or.png");
        World.add(world, this.body)
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(6);
        fill(255);
        image(this.image,0,0,this.width,this.height)
        pop();

    }

}