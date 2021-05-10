//class className{}
class Paper{
    constructor(){  //fill the brackets only if it has diff values
        var options = {
            isStatic:false
        }
    
        this.body = Bodies.circle (300,400,25, options);
        this.r = 25

        World.add(world,this.body)
    }
    paperDisplay(){
        ellipseMode(RADIUS);
        fill ("blue")
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r)
    }

}