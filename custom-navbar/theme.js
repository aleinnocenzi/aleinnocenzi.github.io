$(document).ready(function(){
    $("input[name=theme]").change(function(){
        var theme = $(this).val();
        if(theme == 0){ //light
            $(".custom-navbar").navbar({
                color: "#000",
                nav_background: "#c0ff8c" 
            });
            $("body").css("background", "#fff");
            $("body").css("color", "#000");
        } 
        else if(theme == 1){ //dark
            $(".custom-navbar").navbar({
                color: "#fff",
                nav_background: "#333" 
            });
            $("body").css("background", "#464646");
            $("body").css("color", "#fff");
        }
    });
});