class Box{
    constructor(){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(400, 400, 150, 30);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        rectMode(CENTER);
        rect(0, 0, 150, 200);
        pop();       
    }
}