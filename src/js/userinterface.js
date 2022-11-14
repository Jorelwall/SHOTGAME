export default class UserInterface { 
    transitionRound(ctx, round, fontSize){
        ctx.shadowBlur = 0;
        ctx.fillStyle = "white";
        ctx.font = fontSize + "px Arial";
        ctx.fillText(`ROUND: ${round}`, innerWidth/80, innerHeight/30)
    };

    score(ctx, score, fontSize){
        ctx.shadowBlur = 0;
        ctx.fillStyle = "white";
        ctx.font = fontSize + "px Arial";
        ctx.fillText(`SCORE: ${score}`, innerWidth/80, innerHeight/15);
    };
};