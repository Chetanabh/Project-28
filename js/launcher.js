class launcher {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA ,
            pointB : pointB , 
            stiffness: 0.004,
            length: 10
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
        this.pointB = pointB;
        this.bodyA = bodyA;
    }
    fly(){
        this.launcher.bodyA = null;

    }
    
    display(){
        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    attach(){
        this.launcher.bodyA = this.bodyA;
        this.launcher.pointB = this.pointB;
    }
}