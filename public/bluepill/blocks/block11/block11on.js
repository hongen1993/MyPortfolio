$(".open").click(function(){
    var $open = $('.dobleA');
    var $openB = $('.dobleB');
 
    // Doble 
    if ($open.is('#noneDisplay')) {
      var delay = 5900;
      setTimeout(function(){
          $open.removeAttr('id');
      },delay );
    }
    else {
    }

    if ($openB.is('#noneDisplay')) {
        var delay = 5900;
        setTimeout(function(){
            $openB.removeAttr('id');
        },delay );
      }
      else {
      }
 });