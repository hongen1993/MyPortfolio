if($(window).width() >= 1024){
  $('#enter').click(function() {
    $('.bodyAdd').delay(7000).animate({ 'left': '150' },4000);
    $('#world').addClass('worldB');
    $('#world').removeClass('worldBack');
    $('#world').removeClass('worldBBack');
    $('#world').removeClass('worldCBack');
    $('#world').removeClass('worldGarageBack');


    $('.block-4').addClass('block-4B');
    $('.block-4').removeClass('block-4Back');
    $('.block-4').removeClass('block-4BackB');
    $('.block-11').addClass('block-11B');
    $('.block-11').removeClass('block-11Back');
    $('.block-17').addClass('block-17B');
    $('.block-17').removeClass('block-17Back');
    $('.block-24').addClass('block-24B');
    $('.block-24').removeClass('block-24Back');
    $('.block-27').addClass('block-27B');
    $('.block-27').removeClass('block-27Back');


    $('.top-27').addClass('top-27B');
    $('.top-27').removeClass('top-27Back');
    $('.west-27').addClass('west-27B');
    $('.west-27').removeClass('west-27Back');
    $('.east-27').addClass('east-27B');
    $('.east-27').removeClass('east-27Back');
    $('.north-27').addClass('north-27B');
    $('.north-27').removeClass('north-27Back');
    $('.south-27').addClass('south-27B');
    $('.south-27').removeClass('south-27Back');

    $('.block-27').removeClass('block-27Expanded');
    $('.top-27').removeClass('top-27Expanded');
    $('.west-27').removeClass('west-27Expanded');
    $('.north-27').removeClass('north-27Expanded');
    $('.east-27').removeClass('east-27Expanded');
    $('.south-27').removeClass('south-27Expanded');

 
    $('.water').removeClass('introNone');
    $('.waterB').removeClass('introNone');
    $('.waterC').removeClass('introNone');  

    var $element = $('.back');
    var $card = $('.card');
    var $aboutMeText = $('.aboutMeText');
    var $bPme = $('.bPme');
 
    //check if element has green class --> remove green class with a delay
    if ($element.hasClass('introNone')) {
      var delay = 10500; //ms
      setTimeout(function(){
          $element.removeClass('introNone');
      },delay );
    }
    // element doesn't have green class --> add it
    else {
    }
    if ($card.hasClass('introNone')) {
      var delay = 10500; //ms
      setTimeout(function(){
          $card.removeClass('introNone');
      },delay );
    }
    // element doesn't have green class --> add it
    else {
    }
    if ($aboutMeText.hasClass('introNone')) {
      var delay = 10500; //ms
      setTimeout(function(){
          $aboutMeText.removeClass('introNone');
      },delay );
    }
    // element doesn't have green class --> add it
    else {
    }
    if ($bPme.hasClass('introNone')) {
      var delay = 10500; //ms
        setTimeout(function(){
            $bPme.removeClass('introNone');
        },delay );
    }
    // element doesn't have green class --> add it
    else {
    }

  });
}else{ 
  $('#enter').click(function() {
    $('.bodyAdd').delay(7000).animate({ 'left': '0' },4000);
    $('#world').addClass('worldB');
    $('#world').removeClass('worldBack');
    $('#world').removeClass('worldCBack');
    $('#world').removeClass('worldGarageBack');
    $('#world').removeClass('worldOfficeBack');    


    $('.block-4').addClass('block-4B');
    $('.block-4').removeClass('block-4Back');
    $('.block-11').addClass('block-11B');
    $('.block-11').removeClass('block-11Back');
    $('.block-17').addClass('block-17B');
    $('.block-17').removeClass('block-17Back');
    $('.block-24').addClass('block-24B');
    $('.block-24').removeClass('block-24Back');
    $('.block-27').addClass('block-27B');
    $('.block-27').removeClass('block-27Back');


    $('.top-27').addClass('top-27B');
    $('.top-27').removeClass('top-27Back');
    $('.west-27').addClass('west-27B');
    $('.west-27').removeClass('west-27Back');
    $('.east-27').addClass('east-27B');
    $('.east-27').removeClass('east-27Back');
    $('.north-27').addClass('north-27B');
    $('.north-27').removeClass('north-27Back');
    $('.south-27').addClass('south-27B');
    $('.south-27').removeClass('south-27Back');


    $('.water').removeClass('introNone');
    $('.waterB').removeClass('introNone');
    $('.waterC').removeClass('introNone');

    $('.water').addClass('octopusOn');

    var $element = $('.back');
    var $card = $('.card');
    var $aboutMeText = $('.aboutMeText');
    var $bPme = $('.bPme');
 
    //check if element has green class --> remove green class with a delay
    if ($element.hasClass('introNone')) {
      var delay = 10500; //ms
      setTimeout(function(){
          $element.removeClass('introNone');
      },delay );
    }
    // element doesn't have green class --> add it
    else {
    }
    if ($card.hasClass('introNone')) {
      var delay = 10500; //ms
      setTimeout(function(){
          $card.removeClass('introNone');
      },delay );
    }
    // element doesn't have green class --> add it
    else {
    }
    if ($aboutMeText.hasClass('introNone')) {
      var delay = 10500; //ms
      setTimeout(function(){
          $aboutMeText.removeClass('introNone');
      },delay );
    }
    // element doesn't have green class --> add it
    else {
    }
    if ($bPme.hasClass('introNone')) {
      var delay = 10500; //ms
        setTimeout(function(){
            $bPme.removeClass('introNone');
        },delay );
    }
    // element doesn't have green class --> add it
    else {
    }

  });
}