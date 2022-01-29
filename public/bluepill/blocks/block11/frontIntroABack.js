$('.hjBack').click(function() {
    $('#introA').css({
        'opacity': '1',
        'z-index': '2',
    });
    $('#dscriptionA').css({
        'opacity': '0',
        'z-index': '0',
    });
    $('#dscriptionA2').css({
        'opacity': '0',
        'z-index': '0',
    });
    $('.hjBack').css({
        'opacity': '0',
        'z-index': '1',
    });
    
    $('.classAEnter').css({
        'opacity': '0',
    });
});