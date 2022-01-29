$("#hjimg").click(function(){
    $('#gypimg').removeClass('dobleAImgBack');
    $('#gypimg').addClass('dobleAImg');

    $('#gyptext').removeClass('dobleATextBack');
    $('#gyptext').addClass('dobleAText');

    $('.dobleA').removeClass('zIndex1');

    $('.officeB').removeAttr('id', 'noneDisplay');
})