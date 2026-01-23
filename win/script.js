const gameWindow = document.getElementById("gameWindow");

const mobile = document.getElementById("mobileButton");
mobile.onclick = useMobile;

const mobileWindow = document.getElementById("mobile");

const cam1 = document.getElementById("cam1");
cam1.onclick = () => viewCam("cam1"); 

const cam2 = document.getElementById("cam2");
cam2.onclick = () => viewCam("cam2");

const cam3 = document.getElementById("cam3");
cam3.onclick = () => viewCam("cam3");

const cam4 = document.getElementById("cam4");
cam4.onclick = () => viewCam("cam4");

const cam5 = document.getElementById("cam5");
cam5.onclick = () => viewCam("cam5");

const coinButton = document.getElementById("coin");
coinButton.onclick = collectCoin;

const leftDoorButton = document.getElementById("leftDoorButton");
leftDoorButton.onclick = () => kristianDoor("left");
const rightDoorButton = document.getElementById("rightDoorButton");
rightDoorButton.onclick = () => kristianDoor("right");

const computer = document.getElementById("computer");

const kistanDisplay = document.getElementById("kistan");
let kistanCounter = 0;
const matyDisplay = document.getElementById("maty");
const danAdamDisplay = document.getElementById("danAdam");
let danAdamCounter = 0;

let kristian = false;
let kristianPosition = "none";
let kristianCounter = 0;
let leftDoor = false;
let rightDoor = false;

const cams = [cam1, cam2, cam3, cam4, cam5];
const pathKistan = ["cam4", "cam3", "cam1", "cam2", "cam3", "attack"];
const pathDanAdam = ["cam4", "cam3", "attack"];
let deathCounter = 0;
let enemy = "none";
let matyCounter = 0;
let matyKiller = 0;
let maty = false;
let kistanLocation = "cam4";
let danAdamLocation = "cam4";
let mobileActive = false;
let activeCamera = "cam1";
mobileWindow.style.display = "none";
document.getElementById("maty").style.display = "none";
document.getElementById("kistan").style.display = "none";
document.getElementById("danAdam").style.display = "none";
computer.style.display = "none";
let timer = 20000;
let reset = 0;
let gameTime = 10;
document.getElementById("timer").textContent = gameTime + ":00"
let doorProgress = 100;
document.getElementById("doorProgressBar").style.width = doorProgress + "%";
let doorOpen = true;
let coin = false;
let coinLocation = "none";

if(localStorage.getItem("hasWon") == "false" || localStorage.getItem("hasWon") == "true"){
    console.log("je zapsano");
}
else{
    localStorage.setItem("hasWon", "false");
}

if(localStorage.getItem("hasWon") == "false"){ //kontrola jestli nezmenil URL
    window.alert("tady nemas co delat!!!");
    window.location.href="/game/";
}
else{
    window.alert("welcome");
}
coinButton.style.display = "none";

function viewCam(cam){
    document.getElementById(activeCamera).style.backgroundColor = "";
    computer.style.display = "none";

    activeCamera = cam;
    console.log("active cam: " + activeCamera);
    switch(activeCamera){
        case "cam1":
            document.getElementById("activeCamera").style.backgroundImage = "url(images/rooms/koupelna.jpg)";
    
            break;
    
        case "cam2":
            document.getElementById("activeCamera").style.backgroundImage = "url(images/rooms/loznice.jpg)";
    
            break;
    
        case "cam3":
            document.getElementById("activeCamera").style.backgroundImage = "url(images/rooms/chodba.jpg)";
    
            break;
    
        case "cam4":
            document.getElementById("activeCamera").style.backgroundImage = "url(images/rooms/pokoj.png)";
    
            break;
    
        case "cam5":
            document.getElementById("activeCamera").style.backgroundImage = "url(images/rooms/kumbal.jpg)";
            computer.style.display = "";
    
            break;
    }
    
    document.getElementById(activeCamera).style.backgroundColor = "red";
    spawnEnemy();
}

function kristianDoor(activeDoor){
    switch(activeDoor){
        case "left":
            leftDoor = true;
            rightDoor = false;
            computer.style.backgroundImage = "url(images/kristian/kDoorsLeft.png";
            rightDoorButton.disabled = true;
            break;
        
        case "right":
            leftDoor = false;
            rightDoor = true;
            computer.style.backgroundImage = "url(images/kristian/kDoorsRight.png";
            leftDoorButton.disabled = true;
            break;
    }
}

function useMobile(){
    if(mobileActive == false){
        mobileActive = true;
        console.log("mobile is out");

        mobileWindow.style.display = "";
        document.getElementById("doorButton").disabled = true;
        spawnEnemy();
    }
    else{
        mobileActive = false;
        console.log("mobile is hidden");

        mobileWindow.style.display = "none";
        document.getElementById("doorButton").disabled = false;
    }
}

function spawnEnemy(){
//    console.log("enemy spawn test");
    kistanDisplay.style.height = "250px";
    danAdamDisplay.style.height = "300px";

    if(activeCamera == "cam1" && maty == true){ 
        matyDisplay.style.display = "";
        document.getElementById("maty").style.display = "";

        console.log("maty is spawned");
    }
    else{
        matyDisplay.style.display = "none";
    }
    
    if(kistanLocation == activeCamera){
        switch(kistanLocation){ 

            case "cam1":
                kistanDisplay.style.right = "40px";
                kistanDisplay.style.top = "85px";
                kistanDisplay.style.display = "";
                break;

            case "cam2":
                kistanDisplay.style.right = "140px";
                kistanDisplay.style.top = "75px";
                kistanDisplay.style.display = "";
                break;

            case "cam3":
                kistanDisplay.style.right = "100px";
                kistanDisplay.style.top = "40px";
                kistanDisplay.style.height = "150px";
                kistanDisplay.style.display = "";
                break;

            case "cam4":
                kistanDisplay.style.right = "10px";
                kistanDisplay.style.top = "85px";
                kistanDisplay.style.display = "";
                break;
            case "cam5":
                kistanDisplay.style.display = "none";
                break;
        }
    }
    else{
        kistanDisplay.style.display = "none";
    }

    if(danAdamLocation == activeCamera){
        danAdamDisplay.style.display = "";
        switch(danAdamLocation){ 

            case "cam1":
                danAdamDisplay.style.right = "40px";
                danAdamDisplay.style.top = "85px";
                danAdamDisplay.style.display = "";
                break;

            case "cam2":
                danAdamDisplay.style.right = "70px";
                danAdamDisplay.style.top = "90px";
                danAdamDisplay.style.height = "200px";
                danAdamDisplay.style.display = "";
                break;

            case "cam3":
                danAdamDisplay.style.right = "10px";
                danAdamDisplay.style.top = "280px";
                danAdamDisplay.style.height = "300px";
                danAdamDisplay.style.display = "";
                break;

            case "cam4":
                danAdamDisplay.style.right = "120px";
                danAdamDisplay.style.top = "85px";
                danAdamDisplay.style.height = "250px";
                danAdamDisplay.style.display = "";
                break;
            case "cam5":
                danAdamDisplay.style.display = "none";
                break;
        }
    }
    else{
        danAdamDisplay.style.display = "none";
    }

    if(coinLocation == activeCamera){
        coinButton.style.display = "";
    }
    else{
        coinButton.style.display = "none";
    }
}

const holdButton = document.getElementById('doorButton');
let intervalId = null;
holdButton.addEventListener('mousedown', function() {
    gameWindow.style.backgroundImage = "url(images/toiletDoor.jpeg)";

    doorOpen = false;

    if (intervalId === null) {  // Spustí pouze jednou
        intervalId = setInterval(function() {
            console.log('button is active');
            doorProgress = doorProgress - 1;
            document.getElementById("doorProgressBar").style.width = doorProgress + "%";
        }, 100);
    }
});

holdButton.addEventListener('mouseup', function() {
    gameWindow.style.backgroundImage = "url(images/toiletDoorOpen.png)";

    doorOpen = true;

    clearInterval(intervalId);  // Zastavi interval
    intervalId = null;  // Resetuje variable
    console.log('button is deactivated');
    if(enemy != "none" && doorProgress > 40){
        if(reset < 3){
            reset++;
            deathCounter = 0;
        }
    }
    else{
        switch(enemy){
            case "kistan":
                kistanCounter = 0;
                kistanLocation = pathKistan[kistanCounter];
                break;
            case "danAdam":
                danAdamCounter = 0;
                danAdamLocation = pathDanAdam[danAdamCounter];
                break;
            default:
                console.log("nobody was at the door");
                break;
        }
        enemy = "none";
        console.log("je pryc");
    }
    doorProgress = 100;
    document.getElementById("doorProgressBar").style.width = doorProgress + "%";
});

function collectCoin(){
    coinButton.style.display = "none";
    coin = false;
}

setInterval(()=>{ //maty killer and more xddd
    if(maty == true && activeCamera == "cam1" && mobileActive == true){
        if(matyKiller < 2){
            matyKiller++;
            //console.log("maty updated" + matyKiller)
        }
        else{
            window.location.href="/died";
        }
    }
    else{
        matyKiller = 0;
    }

}, 500);

enemyInterval = setInterval(()=>{ //enemy moves
    let skip = false;

    if(maty == true){
        if(matyCounter < 30){
            matyCounter++;
        }
        else{
            matyCounter = 0;
            maty = false;
            document.getElementById("matyBoombox").pause();
        }
    }

    if(enemy != "none"){
        if(doorOpen == true){
            if(deathCounter < 10){
                deathCounter++;
                //console.log(deathCounter);
            }
            else{
                window.location.href="/died/";
            }
        }
    }
    else{
        if(Math.floor(Math.random()*11) > 8){
            switch(Math.floor(Math.random()*3+1)){
                case 1: //kistan
                    if(activeCamera == kistanLocation){
                        kistanDisplay.style.display = "none";
                    }
                    kistanCounter = kistanCounter + 1;
                    kistanLocation = pathKistan[kistanCounter];
                    if(kistanLocation == "attack"){
                        enemy = "kistan";
                        gameWindow.style.backgroundImage = "url(images/enemies/kistanDoor.png)";
                        //console.log("kistan is attacking");
                    }
                    if(activeCamera == kistanLocation){
                        kistanDisplay.style.display = "none";
                    }
                    break;

                case 2: //danAdam
                    if(activeCamera == danAdamLocation){
                        danAdamDisplay.style.display = "none";
                    }
                    danAdamCounter = danAdamCounter + 1;
                    danAdamLocation = pathDanAdam[danAdamCounter];
                    if(danAdamLocation == "attack"){
                        enemy = "danAdam";
                        gameWindow.style.backgroundImage = "url(images/enemies/danAdamDoor.png)";
                        //console.log("danAdam is attacking");
                    }
                    if(activeCamera == danAdamLocation){
                        danAdamDisplay.style.display = "none";
                    }
                    break;

                case 3: //activate maty
                if(maty == false){
                    document.getElementById("matySpawned").play();
                    document.getElementById("matyBoombox").currentTime = 24;
                    document.getElementById("matyBoombox").play();
                    maty = true;
                    if(activeCamera == "cam1"){
                        useMobile();
                        useMobile();
                    }
                    break;
                }
            }
            //console.log("enemy spawned: " + enemy)
        }
        //else{console.log("nothing spawned")}
    }
}, timer);

let kIntervalId = null;

setInterval(()=>{
    if(kristian == true){
        if(kIntervalId === null){
            kIntervalId = setInterval(function(){
                switch(kristianPosition){
                    case "left":
                        if(leftDoor == false){
                            if(kristianCounter < 11){
                                kristianCounter++;
                                //console.log(kristianCounter);
                            }
                            else{
                                window.alert("kristian is here...");
                                window.location.href="/died/";
                            }
                        }
                        else{
                            kristianPosition = "none"
                            kristianCounter = 0;
                            kristian = false;
                            //console.log("k je pryc");
                            clearInterval(kIntervalId);
                        }
                        break;

                    case "right":
                        if(rightDoor == false){
                            if(kristianCounter < 11){
                                kristianCounter++;
                                //console.log(kristianCounter);
                            }
                            else{
                                window.alert("kristian is here...");
                                window.location.href="/died/";
                            }
                        }
                        else{
                            kristianPosition = "none"
                            kristianCounter = 0;
                            kristian = false;
                            console.log("k je pryc")
                            clearInterval(kIntervalId);
                        }
                        break;

                    default:
                        kristianPosition = "none"
                        kristianCounter = 0;
                        kristian = false;
                        clearInterval(kIntervalId);
                }
            }, 1000);
        }
    }

    else{
        if(Math.floor(Math.random()*11) > 5){
            switch(Math.floor(Math.random()*2)){
                case 0:
                    kristian = true;
                    kristianPosition = "left";

                    leftDoor = false;
                    rightDoor = false;
                    computer.style.backgroundImage = "url(images/kristian/kDoorsOpen.png)";

                    computer.style.backgroundImage = "url(images/kristian/kSpawnLeft.png)";
                    break;
                
                case 1:
                    kristian = true;
                    kristianPosition = "right";

                    leftDoor = false;
                    rightDoor = false;
                    computer.style.backgroundImage = "url(images/kristian/kDoorsOpen.png)";

                    computer.style.backgroundImage = "url(images/kristian/kSpawnRight.png)";
                    break;

                default:
                    console.error("error while updating kristian");
            }
            useMobile();
            useMobile();
        }
        //console.log("kristian position: " + kristianPosition);
    }
}, 5000); //5th camera game

setInterval(()=>{ //coins spawner
    if(coin == true){
        window.alert("ayo, penize tu mas vsude.. pozde");
        window.location.href="/died/";
    }
    else{
        coinLocation = "cam" + Math.floor(Math.random()*5+1);
        coin = true;
        useMobile();
        useMobile();
        console.log("coin is spawned at: " + coinLocation);
    }
}, 10000); 

setInterval(()=>{
    gameTime = gameTime + 1;
    if(gameTime == 13){
        gameTime = 0;
    }
    if(gameTime == 6){
        window.alert("vyhral jsi, gratuluji");
        window.location.href="/";
    }
    document.getElementById("timer").textContent = gameTime + ":00"
}, 30000);//time
