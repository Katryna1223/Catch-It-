class Ball{
    constructor(x, y){
        var options = {
            isStatic: false
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.x = x;
        this.y = y;
        this.visibility = 255;
        World.add(world, this.body);
    }
    update(ballCurrent){
        if(ballCurrent.position.y>height){
            Matter.Body.setPosition(ballCurrent,{x: random(50, 750), y: random(-30,-5)});
        }
    }
    display(){
        ellipseMode(RADIUS);
        if(this.body){//(this.body.position.y > 354){
            ellipse(this.body.position.x, this.body.position.y, 10, 10);
            //somehow make the balls disappear
        }else{
            // World.remove(world, this.body);
             push();
             this.visibility -= 5;
             tint(255, this.visibility);
             //ellipse(this.body.position.x, this.body.position.y, 10, 10);
             pop();
        } 
    }
}