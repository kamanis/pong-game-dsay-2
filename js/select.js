class Select{
    constructor(first,second){
        this.first={
            x:first.x,
            y:first.y,
            w:first.width,
            h:first.height
        };
        this.second={
            x:second.x,
            y:second.y,
            w:second.width,
            h:second.height
        };
        this.pos=this.first;
    }
    display(){
        push();
        noFill();
        rect(this.pos.x,this.pos.y,this.pos.w,this.pos.h);
        pop();
    }
    move(){
       
    }
}