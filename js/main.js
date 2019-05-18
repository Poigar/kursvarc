
function startGame(){
    $("#game").removeClass("hidden");
    $("#menu").addClass("hidden");
}

function toggleOptions(){
    $("#options").toggleClass("hidden");
}

function init(){
    
    loadData();

    console.log(gameData);

    if(getOption("arrows")) $(".arrows-option").addClass("checkbox--enabled");
    if(getOption("sound")) $(".sound-option").addClass("checkbox--enabled");
    if(getOption("music")) $(".music-option").addClass("checkbox--enabled");
    if(getOption("time")) $(".time-option").addClass("checkbox--enabled");
}

$(document).ready(function(){

    init();

    $(".checkbox").click(function(){

        $(this).toggleClass("checkbox--enabled");
        var optionData = $(this).data("option");

        if($(this).hasClass("checkbox--enabled")){
            gameData["options"][optionData] = true;
        }else{
            gameData["options"][optionData] = false;
        }

        setData();
    });

});
