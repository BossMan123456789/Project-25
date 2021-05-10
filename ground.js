//to create a class --> class ClassName{}
class Ground{
    //function setup()
    constructor(x,y){          //build the model or mould --> properties of the mould

        //customize the ground so that it stays still (static = stay)
        var options = {
            isStatic:true
        }

        //to create a rectangular body
        this.body = Bodies.rectangle (x,y,1400,10,options);

        this.width = 1400;
        this.height = 10;

        //to add the object inside the world
        World.add(world,this.body)

    }

    //to display the object on the screen
    groundDisplay(){            //function draw()
        //create a rectangular shaped obejct that represents the ground
        //rect should take the ground's x and y position
        rectMode(CENTER);
        
         //color the recatngle
        fill("yellow")

        rect(this.body.position.x, this.body.position.y,this.width, this.height);
    }
}