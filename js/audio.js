var backgroundMusic = new Audio("audio/bg_music.mp3");
backgroundMusic.volume = 0.3;
backgroundMusic.loop = true;

var clickSound = new Audio("audio/click.wav");
clickSound.volume = 0.4;

var correctSound = new Audio("audio/correct.mp3");
correctSound.volume = 0.4;

var wrongSound = new Audio("audio/wrong.wav");
wrongSound.volume = 0.7;

var levelupSound = new Audio("audio/levelup.wav");
levelupSound.volume = 0.7;

function playMusic(){
    backgroundMusic.play();
}

function stopMusic(){
    backgroundMusic.pause();
}

function isPlaying(){
    return backgroundMusic.duration > 0 && !backgroundMusic.paused;
}

function playClick(){
    clickSound.play();
}

function playCorrect(){
    correctSound.play();
}

function playWrong(){
    wrongSound.play();
}

function playLevelup(){
    levelupSound.play();
}

function muteSound(){
    clickSound.volume = 0;
}

function unmuteSound(){
    clickSound.volume = 1;
}