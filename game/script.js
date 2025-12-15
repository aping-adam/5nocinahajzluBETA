const gameWindow = document.getElementById("gameWindow");

const drinkButton = document.getElementById("drinkButton");
drinkButton.onclick = drinkWater;

const lookRight = document.getElementById("rotateRight");
lookRight.onclick = rotateRight;

const lookLeft = document.getElementById("rotateLeft");
lookLeft.onclick = rotateLeft;

const door = document.getElementById("openDoor");
door.onclick = openDoor;

const petRiki = document.getElementById("pet");
petRiki.onclick = pohlad;
petRiki.style.display = "none";

const drink = document.getElementById("drink");
drink.onclick = drinkBabi;
drink.style.display = "none";

const attack = document.getElementById("attack");
attack.onclick = throwShit;

const attackBabicka = document.getElementById("babickaAttack");
attackBabicka.onclick = chodDoPice;

const boombox = document.getElementById("boombox");
const boomboxButton = document.getElementById("boomboxButton");
boomboxButton.onclick = muteMaty;

const matyScream = document.getElementById("matySebral");

const mobile = document.getElementById("mobile");
mobile.onclick = pullMobile;

const gameplayVideo = document.getElementById("gameplayVideo");

let lookDirection = "middle";
let water = 100;
let shit = 99;
let enemy = "none";
let deathCounter = 0;
let gameStarted = false;
let rikiCounter = 0;
let waterCounter = 0;
let ADHD = 100;
let mobileOut = false;
let matySpawned = true;
let matyCounter = 0;
let matyRandom;

boomboxButton.style.display = "none";
gameplayVideo.style.display = "none";
mobile.style.display = "none";


function rotateRight(){
    console.log("rotating right");
    door.textContent = "open door";
    
    if(lookDirection == "middle"){
        gameWindow.style.backgroundImage = "url('/images/imagesForGame/riki.jpg')";
        door.classList.add("hideElement");
        lookRight.style.display = "none";
        petRiki.style.display = "";
        lookDirection = "right";
        mobile.style.display = "";
    }
    else if(lookDirection == "left"){
        gameWindow.style.backgroundImage = "url('/images/imagesForGame/toiletDoor.jpeg')";
        lookDirection = "middle";
        lookLeft.style.display = "";
        door.classList.remove("hideElement");
        drinkButton.style.display = "none";
        boomboxButton.style.display = "none";
        boombox.pause();
    }

    if(lookDirection != "middle"){
        attack.style.display = "none";
        attackBabicka.style.display = "none";
    }
    else{
        attack.style.display = "";
        attackBabicka.style.display = "";
    }

}
function rotateLeft(){
    console.log("rotating left");
    door.textContent = "open door";
    
    if(lookDirection == "middle"){
        door.classList.add("hideElement");
        lookLeft.style.display = "none";
        lookDirection = "left";

        if(matySpawned == true){
            boomboxButton.style.display = "";
            gameWindow.style.backgroundImage = "url('/images/imagesForGame/matyBoombox.png')";
            boombox.play();
        }
        else{
            gameWindow.style.backgroundImage = "url('/images/imagesForGame/zachod.jpg')";
            drinkButton.style.display = "";
        }
    }
    else if(lookDirection == "right"){
        gameWindow.style.backgroundImage = "url('/images/imagesForGame/toiletDoor.jpeg')";
        lookDirection = "middle";
        petRiki.style.display = "none";
        lookRight.style.display = "";
        door.classList.remove("hideElement");

        pullMobile.content = "MOBILE";
        mobileOut = false;
        gameplayVideo.style.display = "none";
        document.getElementById("gameplayVideo").pause();
        document.getElementById("subwayAudio").pause();
        console.log("subway stopped");

        mobile.style.display = "none";
    }

    if(lookDirection != "middle"){
        attack.style.display = "none";
        attackBabicka.style.display = "none";
    }
    else{
        attack.style.display = "";
        attackBabicka.style.display = "";
    }
}

function pohlad(){
    console.log("pohladil si rikiho");
    window.alert("pohladil si rikiho ;]");
    petRiki.disabled = true;
    rikiCounter = 0;
    shit = 99;
}

function throwShit(){
    console.log("activated throw");

    if(shit == 100){
        shit = 0;
        document.getElementById("progressBar").style.width = String(shit) + "%";
        if(door.textContent == "close door"){ //checks if doors are oppened
            switch(enemy){ //checks the enemy standing in the doors
                case "kistan":
                    enemy = "none";
                    deathCounter = 0;
                    openDoor();
                    break;
                case "babicka":
                    drinkBabi();
                    break;
            }
        }
        else{
            gameWindow.style.backgroundImage = "url('/images/imagesForGame/toiletDoorPoop.png')";
        }
    }
}

function openDoor(){
    if(door.textContent == "open door"){
        door.textContent = "close door";

        switch(enemy){
            case "none":
                gameWindow.style.backgroundImage = "url('/images/imagesForGame/toiletDoorOpen.png')";
                break;
            case "kistan":
                gameWindow.style.backgroundImage = "url('/images/imagesForGame/toiletDoorKistan.png')";
                document.getElementById("kistanKill").play();
                break;
            case "babicka":
                gameWindow.style.backgroundImage = "url('/images/imagesForGame/toiletDoorBabicka.png')";
                drink.style.display = "";
                lookLeft.disabled = true;
                lookRight.disabled = true;
                door.disabled = true;
                break;
        }
    }
    else{
        door.textContent = "open door";
        gameWindow.style.backgroundImage = "url('/images/imagesForGame/toiletDoor.jpeg')";
    }
}

function drinkBabi(){
    window.location.href="/died/";
}

function chodDoPice(){
    if(lookDirection != "middle" || enemy != "babicka" || door.textContent == "close door"){
        window.location.href="/died/";
    }
    else{
        document.getElementById("babickaCounter").play();
        deathCounter = 0;
        enemy = "none";
    }
}

function drinkWater(){
    water = 100;
    rikiCounter = 29;
    waterCounter = 0;
    document.getElementById("waterBar").style.width = String(water) + "%";
    drinkButton.disabled = true;
}

function muteMaty(){
    boombox.pause();
    boombox.currentTime = 0;
    gameWindow.style.backgroundImage = "url(/images/imagesForGame/matyBoomboxStolen.png)";
    boomboxButton.style.display = "none";
    lookRight.disabled = true;

    setTimeout(()=>{
        matySpawned = false;
        drinkButton.style.display = "";
        gameWindow.style.backgroundImage = "url(/images/imagesForGame/zachod.jpg)";
        lookRight.disabled = false;
    }, 5000);

    matyScream.play();
    matyCounter = 0;
    matyRandom = Math.floor(Math.random()*31+30);
    console.log(matyRandom);
}
function pullMobile(){
    console.log("mobile button activated");
    if(mobileOut == false){
        pullMobile.content = "HIDE";

        mobileOut = true;

        gameplayVideo.style.display = "";

        document.getElementById("gameplayVideo").play();
        document.getElementById("subwayAudio").play();
        console.log("subway playing")
    }
    else if(mobileOut == true){
        pullMobile.content = "MOBILE";

        mobileOut = false;

        gameplayVideo.style.display = "none";

        document.getElementById("gameplayVideo").pause();
        document.getElementById("subwayAudio").pause();
        console.log("subway stopped");
    }
}

setInterval(()=>{ //ADHD interval
    if(mobileOut == true){
        if(ADHD < 100){
            ADHD++;
            document.getElementById("mobileBar").style.width = String(ADHD)+"%";
        }
    }
}, 200);
setInterval(()=>{ //shit progress bar
    if(shit != 100){
        shit++;
        
        document.getElementById("progressBar").style.width = String(shit) + "%";
    }
}, 500);
setInterval(()=>{ //just counter for things
    if(petRiki.disabled == true){
        if(rikiCounter < 30){
            rikiCounter++;
        }
        else{
            petRiki.disabled = false;
        }
    }
    if(drinkButton.disabled == true){
        if(waterCounter < 10){
            waterCounter++;
        }
        else{
            drinkButton.disabled = false;
        }
    }
    if(matySpawned == false){
        if(matyCounter < matyRandom){
            matyCounter++;
        }
        else{
            matySpawned = true;
            //console.log("maty is spawned");
        }
    }

    if(mobileOut == false){
        ADHD = ADHD - 1;
        document.getElementById("mobileBar").style.width = String(ADHD)+"%";

        if(ADHD == 0){
            if(lookDirection == "left"){
                rotateRight();
            }
            else if(lookDirection == "right"){
                rotateLeft();
            }
            
            gameWindow.style.backgroundImage = "url(/images/imagesForGame/toiletDoorDaniel.png)";
            document.getElementById("danielKill").play();
            
            setTimeout(()=>{
                window.location.href="/died/";
            }, 6000); //dle hlasovky
        }
    }
}, 1000);
setInterval(()=>{ //water progress bar
    if(water != 0){
        water = water - 1;
        
        document.getElementById("waterBar").style.width = String(water) + "%";
    }
    else{
        window.location.href="/died/";
    }
}, 500);
setInterval(()=>{ //enemy spawner
    if(enemy != "none"){
        if(deathCounter < 10){
            deathCounter++;
            //console.log(deathCounter);
        }
        else if(deathCounter == 10){
            window.location.href="/died/";
        }
    }
    else{
        if(Math.floor(Math.random()*11) > 9){
            switch(Math.floor(Math.random()*2+1)){
                case 1:
                    enemy = "kistan";
                    document.getElementById("kistanKnock").play();
                    break;
                case 2:
                    enemy = "babicka";
                    document.getElementById("babickaKnock").play();
                    break;
            }
            //console.log("enemy spawned: " + enemy)
        }
        //else{console.log("nothing spawned")}
    }

}, 2000);

drinkButton.style.display = "none";
window.alert("potrebuji aby jsi udelal interakci se strankou, jinak nebude audio fungovat. Takze treba se koukni doprava doleva");