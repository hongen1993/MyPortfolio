$("#buttonBack").click(function(){

    // applications icons 

    var $phone = $('.phone');
    var $chrome = $('.chrome');
    var $messages = $('.messages');
    var $wechat = $('.wechat');
    var $instagram = $('.instagram');
    var $calculator = $('.calculator');
    var $whatsapp = $('.whatsappBP');
    var $music = $('.music');

    // applications 

    var $calculatorO = $('.calculatorO');
    var $whatsappO = $('.whatsappO');
    var $musicO = $('.musicO');
    var $callO = $('.callO');
    var $wechatO = $('.wechatO');
    var $chromeO = $('.chromeO');


    // do
    $('.smartphoneTop').css('background', 'transparent'); 
	$('.menuButtons').removeClass('menuButtonsDark');


    // applications icons display 

    $phone.removeAttr('id');
    $chrome.removeAttr('id');
    $messages.removeAttr('id');
    $wechat.removeAttr('id');
    $instagram.removeAttr('id');
    $calculator.removeAttr('id');
    $whatsapp.removeAttr('id');
    $music.removeAttr('id');

    // application on screen display 

    $calculatorO.attr('id', 'noneDisplay');
    $whatsappO.attr('id', 'noneDisplay');
    $musicO.attr('id', 'noneDisplay');
    $musicO.removeClass('musicPlay');
    $callO.attr('id', 'noneDisplay');
    $wechatO.attr('id', 'noneDisplay');
    $chromeO.attr('id', 'noneDisplay');

    
});