if($(window).width() >= 1024){
  $('.open').click(function() {

  $('#world').addClass('worldC');
  $('#world').removeClass('worldBack');
  $('#world').removeClass('worldCBack');
  $('#world').removeClass('worldGarageBack');
  $('#world').removeClass('worldOfficeBack');    

    $('#w11').addClass('west-11');
    $('#w11').removeClass('west-11back');
    $('#e11').addClass('east-11');
    $('#e11').removeClass('east-11back');
    $('#n11').addClass('north-11');
    $('#n11').removeClass('north-11back');
    $('#s11').addClass('south-11');
    $('#s11').removeClass('south-11back');
    $('#t11').addClass('top-11');
    $('#t11').removeClass('top-11back');

    $('.block-4').addClass('block-4B');
    $('.block-4').removeClass('block-4Back');
    $('.block-4').removeClass('block-4BackB')
    
    $('.block-17').addClass('block-17B');
    $('.block-17').removeClass('block-17Back');
    $('.block-24').addClass('block-24B');
    $('.block-24').removeClass('block-24Back');

    $('.open').attr('id','noneDisplay');
    $('.block11matrix').addClass('noneDisplay');

    $('.west11').addClass('noneDisplay');
  });
}else{
  $('.open').click(function() {
    $('.bodyAdd').delay(1000).animate({ 'left': '-250px' },7000);

    $('#world').addClass('worldC');
    $('#world').removeClass('worldCBack');
    $('#world').removeClass('worldOfficeBack');


    $('#w11').addClass('west-11');
    $('#w11').removeClass('west-11back');
    $('#e11').addClass('east-11');
    $('#e11').removeClass('east-11back');
    $('#n11').addClass('north-11');
    $('#n11').removeClass('north-11back');
    $('#s11').addClass('south-11');
    $('#s11').removeClass('south-11back');
    $('#t11').addClass('top-11');
    $('#t11').removeClass('top-11back');

    $('.block-4').addClass('block-4B');
    $('.block-4').removeClass('block-4Back');
    $('.block-17').addClass('block-17B');
    $('.block-17').removeClass('block-17Back');
    $('.block-24').addClass('block-24B');
    $('.block-24').removeClass('block-24Back');

    $('.open').attr('id','noneDisplay');
    $('.block11matrix').addClass('noneDisplay');

    $('.west11').addClass('noneDisplay');
  });
}