$('.chrome').click(function(){
    $('.chromeO').removeAttr('id', 'noneDisplay');

    $('.phone').attr('id','noneDisplay');
    $('.messages').attr('id','noneDisplay');
    $('.chrome').attr('id','noneDisplay');
    $('.whatsappBP').attr('id','noneDisplay');
    $('.wechat').attr('id','noneDisplay');
    $('.instagram').attr('id','noneDisplay');
    $('.calculator').attr('id','noneDisplay');
    $('.music').attr('id','noneDisplay');

    $(".smartphoneTop").css('background', 'black');
    $('.menuButtons').addClass('menuButtonsDark');

})