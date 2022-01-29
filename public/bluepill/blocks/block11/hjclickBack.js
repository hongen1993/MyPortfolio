$(".hjBack").click(function(){
    $('#gypimg').removeClass('dobleAImg');
    $('#gypimg').addClass('dobleAImgBack');

    $('#gyptext').removeClass('dobleAText');
    $('#gyptext').addClass('dobleATextBack');

    $('.officeB').attr('id', 'noneDisplay');

})