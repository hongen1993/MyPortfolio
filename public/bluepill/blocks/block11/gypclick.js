$("#gypimg").click(function(){
    $('#hjimg').removeClass('dobleBImgBack');
    $('#hjimg').addClass('dobleBImg');

    $('#hjtext').removeClass('dobleBTextBack');
    $('#hjtext').addClass('dobleBText');

    $('.dobleA').addClass('zIndex1');

    $('.officeA').removeAttr('id', 'noneDisplay');
})