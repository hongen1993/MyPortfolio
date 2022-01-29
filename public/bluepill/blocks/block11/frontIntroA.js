$('#introA').click(function() {
    $('#introA').css({
        'opacity': '0',
        'z-index': '0',
    });
    $('#dscriptionA').css({
        'opacity': '1',
        'z-index': '1',
    });
    $('#dscriptionA2').css({
        'opacity': '1',
        'z-index': '1',
    });
    $('.hjBack').css({
        'opacity': '1',
        'z-index': '2',
    });
    
    $('.classAEnter').css({
        'opacity': '1',
    });
});