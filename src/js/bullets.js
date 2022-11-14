import Enemies, {enemiesARR} from "./enemies.js"

export let score = 0;

let isHit = false;

export default class Bullets {
    constructor(x, y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    draw(ctx){
        let update = () => {
            ctx.shadowColor = "yellow";
            ctx.shadowBlur = 30;
            ctx.fillStyle = "yellow";
    
            ctx.fillRect(this.x, this.y, 2, 25);

            this.move();
            this.hit(enemiesARR);
    
            cancelAnimationFrame(update);
            if(this.y <= 0 || isHit == true){
                cancelAnimationFrame(update);
                isHit = false;
                return;
            };

            requestAnimationFrame(update)
        };

        update();
        
    };

    hit(enemiesARR){
        enemiesARR.forEach((value, index) => {
            if(this.x-value.x < value.size && this.x-value.x > -value.size && this.y - value.y <= 1 && value.y < innerHeight-100){
                enemiesARR.splice(index, 1);
                score++;
                isHit = true;
            };
        });
    };

    move(){
        this.y -= this.speed
    };
};