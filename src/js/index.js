import Player from "./player.js"
import Enemies, {enemiesARR} from "./enemies.js";
import UserInterface from "./userinterface.js";
import { score } from "./bullets.js";

const canvas = document.querySelector("#game");
const context = canvas.getContext('2d');

let maxEnemies = Math.floor(Math.random()*3+1);

let userInterface = new UserInterface();
let player = new Player(
    innerWidth/2, // x
    innerHeight-100, // y
    50, // size
    6, // speed
    "yellow" // borderColor
);

let round = 1;
let startRound = true;

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener("resize", () => { 
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    player.x = innerWidth-player.x;
    player.y = innerHeight-100;
});

function gameLoop(){
    context.fillStyle = "black";
    context.fillRect(0, 0, innerWidth, innerHeight);

    if(enemiesARR.length < maxEnemies && startRound === true){
        let enemies = new Enemies(
            Math.floor(Math.random()*innerWidth), // x
            0, // y
            30, // size
            3 // speed
        );
        
        enemiesARR.push(enemies);
    }else {
        startRound = false;
    };

    enemiesARR.forEach((value) => { 
        value.draw(context);
    });

    if(enemiesARR.length === 0 && startRound === false){
        startRound = true;
        round += 1;

        maxEnemies = Math.floor(Math.random()*3+1);
    };

    userInterface.score(context, score, 25);
    userInterface.transitionRound(context, round, 25);
    player.draw(context);

    requestAnimationFrame(gameLoop);
};

gameLoop();