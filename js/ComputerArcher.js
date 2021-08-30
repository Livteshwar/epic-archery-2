class ComputerArcher{
    constructer(x,y,w,h){
        this.x=x
        this.y=y
        this.width=w
        this.height=h
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.image=loadImage("assets/playerArcher.png")
        World.add(world,this.body);
      }
  
      display(){
          var pos=this.body.position

          if(move===UP&&PlayerArcher.body.angle<1.77){
            angleValue=0.1
        }
        else{
            angleValue=-0.1
        }
        if(move===DOWN&&PlayerArcher.body.angle>1.47){
            angleValue=-0.1
        }
        else{
            angleValue=0.1
        }
  
          imageMode(CENTER);
          push();
          Matter.Body.setAngle(this.body,-PI/2)
          translate(pos.x,pos.y);
          image(this.image,0,0,this.width,this.height);
          pop();
      }
  
      shoot(){
          
      }
}