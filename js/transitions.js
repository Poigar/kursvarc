function fadeTo(page, from){
    $("#transition").removeClass("transition--hidden");
    setTimeout(function(){
        $("#"+from).addClass("hidden");
        $("#"+page).removeClass("hidden");
        $("#transition").addClass("transition--hidden");
    },500);

    currentSection = page;
}