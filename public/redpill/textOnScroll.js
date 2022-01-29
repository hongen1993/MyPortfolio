$(document).ready(function(){

  if($(window).width() >= 1024){
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
    var trackLength = 1;

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
            }else {
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
  }
});
