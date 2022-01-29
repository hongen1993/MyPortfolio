$(document).ready(function(){
    $(".hiddS").click(function(){
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

     
    });
  });