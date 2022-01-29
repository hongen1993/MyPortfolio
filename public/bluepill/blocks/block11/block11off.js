$(".dobleC").click(function(){
    var $close = $('.dobleA');
    var $closeB = $('.dobleB');

// Doble
    if ($close.is('#noneDisplay')) {
    }
    else {
        var delay = 100; //ms
        setTimeout(function(){
            $close.attr('id', 'noneDisplay');
        },delay );
    }
    if ($closeB.is('#noneDisplay')) {
    }
    else {
        var delay = 100; //ms
        setTimeout(function(){
             $closeB.attr('id', 'noneDisplay');
        },delay );
    }
    // Blocks Back
    if($('block-4').hasClass('block-4B')){
    }else{
        var delayB = 3000;
        setTimeout(function(){
            $('.block-4').addClass('block-4Back');
            $('.block-4').removeClass('block-4B');
        },delayB);
    }
    if($('block-17').hasClass('block-17B')){
    }else{
        var delayB = 3000;
        setTimeout(function(){
            $('.block-17').addClass('block-17Back');
        $('.block-17').removeClass('block-17B');
        },delayB);
    }
    if($('block-24').hasClass('block-24B')){
    }else{
        var delayB = 3000;
        setTimeout(function(){
        $('.block-24').addClass('block-24Back');
        $('.block-24').removeClass('block-24B');
        },delayB);
    }
    /* matrix letters on */
    if($('.open').attr('id', 'noneDisplay')){
        var delayC = 5000;
        setTimeout(function(){
        $('.open').removeAttr('id', 'noneDisplay');
        },delayC);
    }else{
    }
    if($('.block11matrix').hasClass('noneDisplay')){
        var delayC = 5000;
        setTimeout(function(){
        $('.block11matrix').removeClass('noneDisplay');
        },delayC);
    }else{
    }
    if($('.west11').hasClass('noneDisplay')){
        var delayC = 5000;
        setTimeout(function(){
        $('.west11').removeClass('noneDisplay');
        },delayC);
    }else{
    }
 });