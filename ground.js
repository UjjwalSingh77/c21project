class Ground{
constructor(x,y,w,h){
var options = {
    isStatic:true

}
this.x = x;
this.y = y;
this.h = h;
this.w = w;
this.body = Bodies.rectangle(x,y,w,h,options)
World.add(world,this.body)



}

display(){

var pos = this.body.postion
push();
rectMode(CENTER)
strokeWeight(3)
fill ("white")
rect(pos.x,pos.y,this.w,this.y)
pop();
}










}