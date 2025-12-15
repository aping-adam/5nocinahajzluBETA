const gameWindow = document.getElementById("gameWindow");

const mobile = document.getElementById("mobileButton");
mobile.onclick = useMobile;

const mobileWindow = document.getElementById("mobile");

const cam1 = document.getElementById("cam1");
cam1.onclick = () => test("cam1");

const cam2 = document.getElementById("cam2");
cam2.onclick = () => test("cam2");

const cam3 = document.getElementById("cam3");
cam3.onclick = () => test("cam3");

const cam4 = document.getElementById("cam4");
cam4.onclick = () => test("cam4");

const cam5 = document.getElementById("cam5");
cam5.onclick = () => test("cam5");

const kistanDisplay = document.getElementById("kistan");
const matyDisplay = document.getElementById("maty");
const danAdamDisplay = document.getElementById("danAdam");

const cams = [cam1, cam2, cam3, cam4, cam5];

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
    //window.alert("welcome");
}

let maty = false;

let kistanLocation = "cam4";

let danAdamLocation = "cam4";

let mobileActive = false;
let activeCamera = "cam1";
mobileWindow.style.display = "none";
document.getElementById("maty").style.display = "none";
document.getElementById("kistan").style.display = "none";
document.getElementById("danAdam").style.display = "none";

function test(cam){
    document.getElementById(activeCamera).style.backgroundColor = "";

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

            break;
    }

    document.getElementById(activeCamera).style.backgroundColor = "red";
    spawnEnemy();
}

function useMobile(){
    if(mobileActive == false){
        mobileActive = true;
        console.log("mobile is out");

        mobileWindow.style.display = "";
        spawnEnemy();
    }
    else{
        mobileActive = false;
        console.log("mobile is hidden");

        mobileWindow.style.display = "none";
    }
}

function spawnEnemy(){
    console.log("enemy spawn test");
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
}