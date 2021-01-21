class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            density:7.8,
            friction:0

        }
        this.body= Bodies.circle(x,y,25,options);
        World.add(world,this.body);
       

    }

    display(){
        push();
    ellipseMode(RADIUS);
    fill(254,0,255);
        ellipse(this.position.x, this .position.y, 25, 25);
        pop();
    }
}