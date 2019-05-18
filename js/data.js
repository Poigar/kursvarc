var optionKeys = ["arrows","sound","music","time"]

var gameData = {
    "options": {
        "arrows": true,
        "sound": true,
        "music": true,
        "time": false
    }
}

var storageKey = "kursvarc_data";

function setData(){
    localStorage.setItem(storageKey, JSON.stringify(gameData));
}

function loadData(){
    var tmp_data = localStorage.getItem(storageKey);

    if(tmp_data!==null){
        gameData = JSON.parse(tmp_data);
    }
}

function getOption(name){
    return gameData["options"][name];
}

function setOption(name, v){
    gameData["options"][name]=v;
}