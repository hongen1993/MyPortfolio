$('.smartphoneBack').click(function(){
    
    $('.smartphone').addClass('smartphoneOff');
    $('.smartphone').removeClass('smartphoneOn');
    $('.smartphoneBack').attr('id', 'noneDisplay');

    $('.face').removeClass('faceOn');

    $('.calculatorO').attr('id', 'noneDisplay');
    $('.whatsappO').attr('id', 'noneDisplay');
    $('.smartphoneTop').removeClass('smartphoneTopWhatsapp'); 

    $('.clockOff').removeAttr('id', 'noneDisplay');
    $('.wifi').attr('id', 'noneDisplay');
    $('.fa-stack').attr('id', 'noneDisplay');
    $('.batery').attr('id', 'noneDisplay');
    $('.phone').attr('id', 'noneDisplay');
    $('.messages').attr('id', 'noneDisplay');
    $('.chrome').attr('id', 'noneDisplay');
    $('.whatsappBP').attr('id', 'noneDisplay');
    $('.wechat').attr('id', 'noneDisplay');   
    $('.calculator').attr('id', 'noneDisplay');
    $('.instagram').attr('id', 'noneDisplay');
    $('.music').attr('id', 'noneDisplay');

    if($('.musicO').hasClass('musicPlay')){
    }else{
        $('.menuButtons').attr('id', 'noneDisplay');
    };
     
    var delayB = 2200 ;
    setTimeout(function(){
        $('.test').removeClass('testRotate');
    },delayB );
});