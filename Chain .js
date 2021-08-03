class Chain{
    constructor(bodyA,pointB) {
        var options = {
                   bodyA:bodyA,
                   pointB:pointB,
                   stiffness:0.04,
                   length:20,

        }
        this.pointB=pointB
        this.chain = constraint.create(options);
        this.height = height;
        World.add(world, this.chain);
      }

      fly(){
        this.chain.bodyA=null
      }

      display(){
        if(this.chain.bodyA){

        var pointA= this.chain.bodyA.position;
        var pointB= this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
      }
}
