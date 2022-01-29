$('.dobleC').click(function() {
    $('#world').removeClass('worldDBack');

    $('#world').removeClass('worldC');
    $('#world').addClass('worldCBack');


    $('#w11').addClass('west-11back');
    $('#w11').removeClass('west-11');
    $('#e11').addClass('east-11back');
    $('#e11').removeClass('east-11');
    $('#n11').addClass('north-11back');
    $('#n11').removeClass('north-11');
    $('#s11').addClass('south-11back');
    $('#s11').removeClass('south-11');
    $('#t11').addClass('top-11back');
    $('#t11').removeClass('top-11');

    $('.officeA').attr('id', 'noneDisplay')
    $('.officeB').attr('id', 'noneDisplay')

  });