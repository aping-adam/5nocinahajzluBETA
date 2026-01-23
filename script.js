// Seznam obrázků k načtení
const imagesToLoad = [
    'images/danPrisel.png',
    'images/matyMainPage.png',
    'images/matyMainPage1.jpg',
    'images/imagesForGame/matyBoombox.png',
    'images/imagesForGame/matyBoomboxStolen.png',
    'images/imagesForGame/riki.jpg',
    'images/imagesForGame/Snímek obrazovky 2025-12-07 152203.png',
    'images/imagesForGame/toiletDoor.jpeg',
    'images/imagesForGame/toiletDoorBabicka.png',
    'images/imagesForGame/toiletDoorDaniel.png',
    'images/imagesForGame/toiletDoorKistan.png',
    'images/imagesForGame/toiletDoorOpen.png',
    'images/imagesForGame/toiletDoorPoop.png',
    'images/imagesForGame/zachod.jpg',
    'win/images/New project.png',
    'win/images/toiletDoor.jpeg',
    'win/images/toiletDoorOpen.png',
    'win/images/enemies/danAdam.png',
    'win/images/enemies/danAdamDoor.png',
    'win/images/enemies/kistanDoor.png',
    'win/images/enemies/kistanHatezidson.png',
    'win/images/enemies/maty.png',
    'win/images/rooms/chodba.jpg',
    'win/images/rooms/koupelna.jpg',
    'win/images/rooms/kumbal.jpg',
    'win/images/rooms/loznice.jpg',
    'win/images/rooms/pokoj.png',
    'win/images/coin.png',
    'win/images/kristian/kDoorsLeft.png',
    'win/images/kristian/kDoorsOpen.png',
    'win/images/kristian/kDoorsRight.png',
    'win/images/kristian/kSpawnLeft.png',
    'win/images/kristian/kSpawnRight.png'
];

let loadedImages = 0;
const totalImages = imagesToLoad.length;

function preloadImages() {
    imagesToLoad.forEach(src => {
        const img = new Image();
        img.onload = () => {
            loadedImages++;
            updateProgress();
            if (loadedImages === totalImages) {
                showMenu();
            }
        };
        img.onerror = () => {
            loadedImages++;
            updateProgress();
            if (loadedImages === totalImages) {
                showMenu();
            }
        };
        img.src = src;
    });
}

function updateProgress() {
    const progress = (loadedImages / totalImages) * 100;
    document.getElementById('loading-bar').style.width = progress + '%';
}

function showMenu() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('holder').style.display = 'flex';
}

// Spusť načítání po načtení stránky
window.addEventListener('load', preloadImages);