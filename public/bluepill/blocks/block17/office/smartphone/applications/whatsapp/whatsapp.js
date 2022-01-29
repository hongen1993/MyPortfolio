$('.whatsappBP').click(function(){

	// display whatsapp 

    $('.whatsappO').removeAttr('id', 'noneDisplay');

    $('.smartphoneTop').css('background', 'rgba(10,75,70,1)'); 

    // dont display applications icons 

    $('.phone').attr('id','noneDisplay');
    $('.messages').attr('id','noneDisplay');
    $('.chrome').attr('id','noneDisplay');
    $('.whatsappBP').attr('id','noneDisplay');
    $('.wechat').attr('id','noneDisplay');
    $('.instagram').attr('id','noneDisplay');
    $('.calculator').attr('id','noneDisplay');
    $('.music').attr('id','noneDisplay');

	// menu buttons color

	$('.menuButtons').addClass('menuButtonsDark');
	$('#buttonBack').addClass('backWhatsapp');

})