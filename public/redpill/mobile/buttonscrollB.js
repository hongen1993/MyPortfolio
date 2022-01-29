$(document).ready(function(){
    $(".hiddU").click(function(){
        $("#backSlide").removeClass("moveBW")
        $("#backSlide").addClass("moveBWT")

        $(".xarrow").removeClass("noneDisplayXB")
        $(".xarrow").addClass("noneDisplayX")
        $("#firstxarrow").removeClass("xarrow-first")
        $("#secondxarrow").removeClass("xarrow-second")

        $(".arrow").removeClass("noneDisplay")
        $(".arrow").addClass("noneDisplayB")
        $("#firstarrow").addClass("arrow-first")
        $("#secondarrow").addClass("arrow-second")

        $(".hiddB").removeClass("hiddBfade")
        $(".hiddU").removeClass("hiddUfade")
        $(".hiddB").addClass("hiddBfadeB")
        $(".hiddU").addClass("hiddUfadeB")

        $("#showFadeOut").removeClass("fadeOut")
        $("#showFadeOut").addClass("fadeOutB")

        $("#divToShowHide").removeClass("fadeInUp")
        $("#divToShowHide").addClass("fadeInUpB")

        $("#divToShowHideUp").removeClass("fadeInDown")
        $("#divToShowHideUp").addClass("fadeInDownB")

        $("#divToShowHideOne").removeClass("fadeInOne")
        $("#divToShowHideOne").addClass("fadeInOneB")
       
        $("#divToShowHideTwo").removeClass("fadeInTwo")
    });
});