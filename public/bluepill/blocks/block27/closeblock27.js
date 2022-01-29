$('.back').click(function() {
    $('#world').addClass('worldBack');
    $('#world').removeClass('worldB');


    $('.block-4').addClass('block-4Back');
    $('.block-4').removeClass('block-4B');
    $('.block-11').addClass('block-11Back');
    $('.block-11').removeClass('block-11B');
    $('.block-17').addClass('block-17Back');
    $('.block-17').removeClass('block-17B');
    $('.block-24').addClass('block-24Back');
    $('.block-24').removeClass('block-24B');
    $('.block-27').addClass('block-27Back');
    $('.block-27').removeClass('block-27B');


    $('.top-27').addClass('top-27Back');
    $('.top-27').removeClass('top-27B');
    $('.west-27').addClass('west-27Back');
    $('.west-27').removeClass('west-27B');
    $('.east-27').addClass('east-27Back');
    $('.east-27').removeClass('east-27B');
    $('.north-27').addClass('north-27Back');
    $('.north-27').removeClass('north-27B');
    $('.south-27').addClass('south-27Back');
    $('.south-27').removeClass('south-27B');
      var $element = $('.back');
      var $card = $('.card');
      var $aboutMeText = $('.aboutMeText');
      var $bPme = $('.bPme');
   
      //check if element has green class --> remove green class with a delay
      if ($element.hasClass('introNone')) {
      }
      // element doesn't have green class --> add it
      else {
          var delay = 8000; //ms
          setTimeout(function(){
              $element.addClass('introNone');
          },delay );
      }
      if ($card.hasClass('introNone')) {
          
        }
        // element doesn't have green class --> add it
        else {
          var delay = 8000; //ms
          setTimeout(function(){
              $card.addClass('introNone');
          },delay );
        }
        if ($aboutMeText.hasClass('introNone')) {
          
        }
        // element doesn't have green class --> add it
        else {
          var delay = 8000; //ms
          setTimeout(function(){
              $aboutMeText.addClass('introNone');
          },delay );
        }
        if ($bPme.hasClass('introNone')) {
        }
        // element doesn't have green class --> add it
        else {
          var delay = 8000; //ms
            setTimeout(function(){
                $bPme.addClass('introNone');
            },delay );
        }
  });