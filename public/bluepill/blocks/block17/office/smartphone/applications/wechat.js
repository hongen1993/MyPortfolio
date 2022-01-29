$('.wechat').click(function(){

    // display calculator 

    $('.wechatO').removeAttr('id', 'noneDisplay')

    // dont display applications icons 

    $('.phone').attr('id','noneDisplay');
    $('.messages').attr('id','noneDisplay');
    $('.chrome').attr('id','noneDisplay');
    $('.whatsappBP').attr('id','noneDisplay');
    $('.wechat').attr('id','noneDisplay');
    $('.instagram').attr('id','noneDisplay');
    $('.calculator').attr('id','noneDisplay');
    $('.music').attr('id','noneDisplay');

    $(".smartphoneTop").css('background', 'white');
	$('.menuButtons').addClass('menuButtonsDark');

})