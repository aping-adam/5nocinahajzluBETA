//max image position X -2350px
const ball = document.getElementById("ball");
const gameWindow = document.getElementById("gameWindow");
const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");
let bcPosition = 0;

let intervalID = null;
buttonLeft.addEventListener("mousedown", function(event) {
    console.log("going left");
    ball.style.backgroundImage = "url(images/ballSprites/ballLeft_sprite.png)";
    
    if(intervalID === null){
        intervalID = setInterval(function(){
            if(bcPosition < 0){
                bcPosition = bcPosition + 100;
                gameWindow.style.backgroundPositionX = bcPosition + "px";
            }
            else{
                clearInterval(intervalID);
            }
        }, 500);
    }
});

buttonRight.addEventListener("mousedown", function(event) {
    console.log("going right");
    ball.style.backgroundImage = "url(images/ballSprites/ballRight_sprite.png)";
    
    if(intervalID === null){
        intervalID = setInterval(function(){
            if(bcPosition > -2350){
                bcPosition = bcPosition - 100;
                gameWindow.style.backgroundPositionX = bcPosition + "px";
                console.log(bcPosition);
            }
            else{
                clearInterval(intervalID);
                
                window.alert("ou shit mann");
                document.getElementById("gameAudio").pause();
                document.getElementById("kistan").play();
                setTimeout(()=>{
                    window.location.href="/";
                }, 20000)
            }
        }, 500);
    }
});

document.addEventListener("mouseup", function(event) {
    console.log("interval closed");
    ball.style.backgroundImage = "url(images/ballSprites/ball_sprite.png)";

    clearInterval(intervalID);
    intervalID = null;
});