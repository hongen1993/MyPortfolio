$('.gypBack').click(function() {
    $('#introB').css({
        'opacity': '1',
        'z-index': '2',
    });
    $('#dscriptionB').css({
        'opacity': '0',
        'z-index': '0',
    });
    $('#dscriptionB2').css({
        'opacity': '0',
        'z-index': '0',
    });
    $('.gypBack').css({
        'opacity': '0',
        'z-index': '1',
    });
    
    $('.classBEnter').css({
        'opacity': '0',
    });
});