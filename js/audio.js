var backgroundMusic = new Audio("../audio/bg_music.mp3");
backgroundMusic.volume = 0.3;

function playMusic(){
    backgroundMusic.play();
}

function stopMusic(){
    backgroundMusic.stop();
}

function paused(){
    return backgroundMusic.paused;
}