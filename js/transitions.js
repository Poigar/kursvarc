function fadeTo(page, from){


    $("#transition").removeClass("transition--hidden");

    setTimeout(function(){

        if(page=="menu" || page=="options"){
            $("#navbar").show();
            $("#game_over").addClass("hidden");
            $(".pyro").addClass("hidden");
        }else{
            $("#navbar").hide();
        }

        if(page=="game"){
            if(getOption("arrows")==false){
                $(".arrow-buttons").hide();
            }else{
                $(".arrow-buttons").show();
            }
        }

        $("#"+from).addClass("hidden");
        $("#"+page).removeClass("hidden");
        $("#transition").addClass("transition--hidden");
    },500);

    currentSection = page;
}