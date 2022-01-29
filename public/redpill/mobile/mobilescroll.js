window.onresize = function(){
    toggle();

    var current = $(window).scrollTop();
    var total = $(window).height() - current;
    var div = $("#showFadeOut");
    var div1 = $("#divToShowHide");
    var div2 = $("#divToShowHideUp");
    var div3 = $("#divToShowHideOne");
    var div4 = $("#divToShowHideTwo");
    var div5 = $("#divToShowHideThree");
    var div6 = $("#backSlide");
    var div7 = $("#scrll");
    
    var currPosition = 0 ;
    var trackLength = 100;
    var trackLengthT = 1;

function toggle(){
    if(window.innerWidth > 800){
        
        $(window).scroll(function () {
            current = $(window).scrollTop()
            var newPosition = trackLength * (current/total)
            console.log(newPosition)
            console.log(currPosition)
           if (newPosition > (currPosition)) {
             div.addClass("fadeOut");
             div.removeClass("fadeOutB");
             div1.addClass("fadeInUp");
             div1.removeClass("fadeInUpB");
             div2.addClass("fadeInDown");
             div2.removeClass("fadeInDownB");
             div3.addClass("fadeInOne");
             div3.removeClass("fadeInOneB");
             div4.addClass("fadeInTwo");
             div5.addClass("fadeInThree");
             div6.addClass("moveBW");
             div6.removeClass("moveBWT");
             div7.addClass("scroll");
             div7.removeClass("scrollB");
             $('#msg').html("Width: Less than 700");

           }
           else {
             div.removeClass("fadeOut");
             div.addClass("fadeOutB");
             div1.removeClass("fadeInUp");
             div1.addClass("fadeInUpB");
             div2.removeClass("fadeInDown");
             div2.addClass("fadeInDownB");
             div3.removeClass("fadeInOne");
             div3.addClass("fadeInOneB");
             div4.removeClass("fadeInTwo");
             div5.removeClass("fadeInThree");
             div6.removeClass("moveBW");
             div6.addClass("moveBWT");
             div7.removeClass("scroll");
             div7.addClass("scrollB");
           }
         });
    }else{
        $(window).scroll(function () {
            current = $(window).scrollTop()
            var newPosition = trackLengthT * (current/total)
            console.log(newPosition)
            console.log(currPosition)
           if (newPosition > (currPosition)) {
            $("#backSlide").addClass("moveBW")
            $("#backSlide").removeClass("moveBWT")
      
            $(".xarrow").removeClass("noneDisplayX")
            $(".xarrow").addClass("noneDisplayXB")
            $("#firstxarrow").addClass("xarrow-first")
            $("#secondxarrow").addClass("xarrow-second")
      
            $(".arrow").addClass("noneDisplay")
            $(".arrow").removeClass("noneDisplayB")
            $("#firstarrow").removeClass("arrow-first")
            $("#secondarrow").removeClass("arrow-second")
      
            $(".hiddB").addClass("hiddBfade")
            $(".hiddU").addClass("hiddUfade")
            $(".hiddB").removeClass("hiddBfadeB")
            $(".hiddU").removeClass("hiddUfadeB")
      
            $("#showFadeOut").addClass("fadeOut")
            $("#showFadeOut").removeClass("fadeOutB")
      
            $("#divToShowHide").addClass("fadeInUp")
            $("#divToShowHide").removeClass("fadeInUpB")
      
            $("#divToShowHideUp").addClass("fadeInDown")
            $("#divToShowHideUp").removeClass("fadeInDownB")
      
            $("#divToShowHideOne").addClass("fadeInOne")
            $("#divToShowHideOne").removeClass("fadeInOneB")
           
            $("#divToShowHideTwo").addClass("fadeInTwo")
            $('#msg').html("Width: More than 700");

           }
           else {
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
           }
         });
    }
}
}