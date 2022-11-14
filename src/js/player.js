import Bullets from "./bullets.js";

let stamina = 100;

let _ctx ;

export default class Player {
    constructor(x, y, size, speed, borderColor){
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.borderColor = borderColor;

        this.runSpeed = 8;

        this.events();
    };

    draw(ctx){
        _ctx = ctx;
        ctx.shadowColor = this.borderColor;
        ctx.shadowBlur = 20;
        ctx.lineWidth = 5;

        ctx.StrokeStyle = this.borderColor;
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.size, this.size);
    };

    move(side, run){ 
        if(side === true){
            this.x += this.speed;
            console.log(this.y)
        }else if(side === false){
            this.x -= this.speed;
        };

        if(run === true){
            this.speed += this.runSpeed
            stamina--;
        }else if(run === false){
            this.speed -= this.runSpeed;
        }
    };

    newBullets(){
        console.log(this.y, this.x)
        let bullets = new Bullets(
            this.x+this.size/2, // x
            this.y-this.size, // y
            3
        );

        bullets.draw(_ctx);
    };

    events(){
        document.addEventListener("click", () => {
            this.newBullets();
        });

        document.addEventListener("keydown", (event) => {
            if((event.code === "KeyD" || event.code === "ArrowRight") && this.x+this.speed+this.size <= innerWidth){
                this.move(true, undefined);
            } else if((event.code === "KeyA" || event.code === "ArrowLeft") && this.x-this.speed >= 0){
                this.move(false, undefined);
            };

            if(event.code === "ShiftLeft" && stamina >= 1){
                this.move(undefined, true);
            };
        });

        document.addEventListener("keyup", (event) => {
            if(event.code === "ShiftLeft"){
                this.move(undefined, false)
            }
        });
    };
};