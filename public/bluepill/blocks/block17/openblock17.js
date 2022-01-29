if($(window).width() >= 1024){
    $('.openO').click(function() {
        $('.bodyAdd').delay(5000)
        .queue(function(height){
            $(this).css('height', '100vh');
        height();
        });

        $('.bodyAdd').animate({ 'left': '1%' });

        $('#world').addClass('worldOffice');
        $('#world').removeClass('worldBack');
        $('#world').removeClass('worldCBack');
        $('#world').removeClass('worldGarageBack');
        $('#world').removeClass('worldOfficeBack');    
 
        $('#world')
        .delay(5000)
        .queue(function(none){
        $(this).addClass('noneDisplay');
        none();
        });

        $('.cubicle')
        .delay(5000)
        .queue(function(block){
        $(this).removeAttr('id', 'noneDisplay');
        $(this).attr('id', 'cubicle');
        block();
        });

        $('.water').addClass('introNone');
        $('.waterB').addClass('introNone');
        $('.waterC').addClass('introNone');

    $('.block-17 .north').addClass('northEnter')
    }); 
};