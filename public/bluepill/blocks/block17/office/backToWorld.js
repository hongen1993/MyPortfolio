$(".floor").click(function(){

  $('.bodyAdd').css('height', '150vh');

    $('#world').addClass('worldOfficeBack');
    $('#world').removeClass('worldOffice');

    $('#world').removeClass('noneDisplay');

    $('.cubicle').removeAttr('id', 'cubicle');
    $('.cubicle').attr('id', 'noneDisplay');

    $('.block-17 .north').removeClass('northEnter');
    $('.block-27').addClass('block-27Expanded');
    $('.top-27').addClass('top-27Expanded');
    $('.west-27').addClass('west-27Expanded');
    $('.north-27').addClass('north-27Expanded');
    $('.east-27').addClass('east-27Expanded');
    $('.south-27').addClass('south-27Expanded');

    $('.smartphone').removeClass('smartphoneOff');
  if($('.water').hasClass('octopusOn')){
    $('.water').removeClass('introNone');
    $('.waterB').removeClass('introNone');
    $('.waterC').removeClass('introNone');
  }else{}
});