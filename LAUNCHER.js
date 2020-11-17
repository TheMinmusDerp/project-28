class LAUNCHER {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 390
        }
        this.pointB = pointB
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }
    fly() {
        this.bodyA = null;
    }
    attach(body) {
        this.bodyA = body;
    }
    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(7);
            stroke(255,255,255);
            line(pointA.x, pointA.y-40, pointB.x, pointB.y);
            line(pointA.x, pointA.y-40, pointB.x, pointB.y);
            pop();
        }
    }
}