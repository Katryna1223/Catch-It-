class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 420,
            stiffness: 0.4,
        }
        this.bodyA=bodyA;
        this.pointB = pointB;
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        //console.log(this.pointB);
        line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.pointB.x, this.rope.pointB.y);
    }
}