var lvl = -1;
var task = -1;
var correctSide = -1;

var flag = [];
var tasksUsed = 0;
var score = 0;

var canAnswer = false;

var currentSection = "menu";

function generateNextTask(){
    
    do{
        task = Math.floor(Math.random() * T[lvl].length );
    } while( flag[task]==1+Math.floor(tasksUsed/T[lvl].length) );
    console.log("> " + task);
    tasksUsed++;
    flag[task]++;

    document.getElementById("descr").innerHTML = T[lvl][task][2];

    correctSide = Math.floor(Math.random() * 2 );
    document.getElementById("choice" + correctSide).innerHTML = T[lvl][task][0];
    document.getElementById("choice" + (correctSide+1)%2 ).innerHTML = T[lvl][task][1];

    canAnswer = true;
}

function updateBar(){
    document.getElementById("level-bar").style.width = (score*100.0/scoreNeeded[lvl]) + "%";
    document.getElementById("level-bar").style.boxShadow = "0px 0px " + score*20.0/scoreNeeded[lvl] +  "px " + levelColors[lvl];
}

function nextLevel(){
    lvl++;
    tasksUsed = 0;
    score = 0;
    document.getElementById("level-bar").style.backgroundColor = levelColors[lvl];
    document.getElementById("level-bar").style.boxShadow = "0px 0px 0px " + levelColors[lvl];
    for(var i = 0; i<T[lvl].length; i++){
        flag[i] = 0;
    }
    updateBar();

    if(lvl>0){
        playLevelup();
    }
}

function startGame(){

    fadeTo("game","menu");
    currentSection = "game";

    playClick();

    nextLevel();
    generateNextTask();
}

function toggleOptions(){
    playClick();

    if(currentSection=="menu"){
        fadeTo("options","menu");
    }
    else if(currentSection=="options"){
        fadeTo("menu","options");
    }
    // $("#options").toggleClass("hidden");
}

function choose(x){
    if( !currentSection=="game" ) return;
    if( !canAnswer ) return;

    canAnswer = false;

    if( correctSide == x ){
        score++;
        console.log("correct");
        document.getElementById("choose" + x).style.backgroundColor = "#48E543";
        setTimeout(function(){
            document.getElementById("choose" + x).style.backgroundColor = "#fafafa";
        }, 300);
        playCorrect();
    } else {
        score = 0;
        console.log("wrong");
        //document.getElementById("level-bar-container").style.backgroundColor = "#E54343";
        document.getElementById("choose" + x).style.backgroundColor = "#E54343";
        setTimeout(function(){
            //document.getElementById("level-bar-container").style.backgroundColor = "#fafafa";
            document.getElementById("choose" + x).style.backgroundColor = "#fafafa";
        }, 300);
        playWrong();
    }

    console.log(flag);

    updateBar();
    
    setTimeout(function(){
        if( score==scoreNeeded[lvl] ) nextLevel();
        generateNextTask();
    }, 500);
}

function init(){
    
    loadData();

    if(getOption("arrows")) $(".arrows-option").addClass("checkbox--enabled");
    if(getOption("sound")) $(".sound-option").addClass("checkbox--enabled");
    if(getOption("music")) $(".music-option").addClass("checkbox--enabled");
}

$(document).ready(function(){

    init();

    if(getOption("music")!==false){
        playMusic();
    }

    $(".checkbox").click(function(){


        playClick();

        $(this).toggleClass("checkbox--enabled");
        var optionData = $(this).data("option");


        if($(this).hasClass("checkbox--enabled")){
            gameData["options"][optionData] = true;
        }else{
            gameData["options"][optionData] = false;
        }

        if(getOption("music")==false){
            stopMusic();
        }else{
            playMusic();
        }

        if(getOption("sound")==false){
            muteSound();
        }else{
            unmuteSound();
        }

        setData();
    });

    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            if(currentSection=="game"){
                fadeTo("menu","game");
                playClick();
            }
            if(currentSection=="options"){
                fadeTo("menu","options");
                playClick();
            }
        }
    });

    $(window).keyup(function(event) {
        switch(event.which) {
            case 37:
                event.preventDefault();
                choose(0);
                break;
            case 39:
                event.preventDefault();
                choose(1);
                break;
            default:
                break;
        }
    });

});