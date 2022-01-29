$('.smartphone').click(function(){
    $('.smartphone').addClass('smartphoneOn');
    $('.smartphone').removeClass('smartphoneOff');
    $('.smartphoneBack').removeAttr('id');

    $('.test').addClass('testRotate');
    $('.face').addClass('faceOn');

    var delay = 2200 ;
    setTimeout(function(){

        $('.clockOff').attr('id', 'noneDisplay');
        $('.wifi').removeAttr('id', 'noneDisplay');
        $('.fa-stack').removeAttr('id', 'noneDisplay');
        $('.batery').removeAttr('id', 'noneDisplay');
        $('.phone').removeAttr('id', 'noneDisplay');
        $('.messages').removeAttr('id', 'noneDisplay');
        $('.chrome').removeAttr('id', 'noneDisplay');
        $('.whatsappBP').removeAttr('id', 'noneDisplay');
        $('.wechat').removeAttr('id', 'noneDisplay');   
        $('.calculator').removeAttr('id', 'noneDisplay');
        $('.instagram').removeAttr('id', 'noneDisplay');
        $('.music').removeAttr('id', 'noneDisplay');
        $('.menuButtons').removeAttr('id', 'noneDisplay');

    },delay );

});