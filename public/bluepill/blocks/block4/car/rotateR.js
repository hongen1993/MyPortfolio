if($(window).width() >= 1024){
    rotate = 180;
    
    $('#turnRight').click(function() {
        rotate -= 90;
        $('.car').css('transform', 'translate(-50px, -50px) translateZ(90px) rotateX(0deg)rotateY('+rotate+'deg)');
        });
}else{

}

