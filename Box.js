class Box  {
    constructor(x, y, width, height){
      var options = {
        
        'density':1.0
    }
    }  
    
    display(){
      console.log(this.body.speed);
      if(this.body.speed<3){
        super.display();
      
      }
      else{
        //This command will remove the object from world
        World.remove(world,this.body);
        push();
        this.Visiblity=this.Visiblity-5;
        tint(255,this.Visiblity);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
    }
    score(){
      if (this.Visiblity < 0 && this.visiblity > -105){
        score++;
        block1=new Box(330,235,30,40);
        block2=new Box(360,235,30,40);
        block3=new Box(390,235,30,40);
        block4=new Box(420,235,30,40);
        block5=new Box(450,235,30,40);
        block6=new Box(390,195,30,40);
        block7=new Box(360,195,30,40);
        block8=new Box(420,195,30,40);
        block9=new Box(390,155,30,40);
      }
    }
}
    