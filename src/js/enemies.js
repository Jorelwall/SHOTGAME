export let enemiesARR = [];

export default class Enemies { 
    constructor(x, y, size, speed){
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
    };

    draw(ctx){
        ctx.shadowColor = "red";
        ctx.shadowBlur = 20;

        ctx.fillStyle = "black";
        ctx.strokeStyle = "red";

        ctx.strokeRect(this.x, this.y, this.size, this.size);
        ctx.fillRect(this.x, this.y, this.size, this.size);

        this.move();

        enemiesARR.forEach((value, index) => {
            if(value.y >= innerHeight){
                enemiesARR.splice(index, 1);
            };
        });
    };

    move(){
        this.y += this.speed;
    }
};