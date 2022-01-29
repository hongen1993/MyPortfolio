 if($(window).width() >= 1024){
    $('#exit').click(function() {

      //building

        $('#world').addClass('worldGarageBack');
        $('#world').removeClass('worldGarage'); 

/*         $('.ground').delay(2000).queue(function(ground){$(this).css('height', '175%');ground();});
 */
        $('.block-4').delay(1000).queue(function(blockBack){$(this).addClass('block-4BackB');blockBack();});
        $('.block-4').delay(1000).queue(function(blockBackB){$(this).removeClass('block-4Expand');blockBackB();});

        $('#top4').delay(1000).queue(function(topBack){$(this).addClass('top-4Back');topBack();});
        $('#top4').delay(1000).queue(function(topBackB){$(this).removeClass('top-4Expand');topBackB();});

        $('#west4').delay(1000).queue(function(westBack){$(this).addClass('west-4Back');westBack();});
        $('#west4').delay(1000).queue(function(westBackB){$(this).removeClass('west-4Expand');westBackB();});
        $('#west4').delay(500).queue(function(west){
         $(this).css('border-left', '1px solid #01FF00');
         $(this).css('border-top', '1px solid #01FF00');
         west(); });

        $('#east4').delay(1000).queue(function(eastBack){$(this).addClass('east-4Back');eastBack();});
        $('#east4').delay(1000).queue(function(eastBackB){$(this).removeClass('east-4Expand');eastBackB();});
        $('#east4').delay(500).queue(function(east){
          $(this).css('border-right', '1px solid #01FF00');
          $(this).css('border-top', '1px solid #01FF00');
          east(); });

        $('#north4').delay(1000).queue(function(northBack){$(this).addClass('north-4Back');northBack();});
        $('#north4').delay(1100).queue(function(northBackB){$(this).removeClass('north-4Expand');northBackB();});
        $('#north4').delay(500).queue(function(north){$(this).css('border', '1px solid #01FF00');north(); });
        
        $('#garage').addClass('closeGarage');
        $('#garage').removeClass('south-4Expand');
        $('#garage')
        .delay(5000)
        .queue( function(garage){ 
        $(this).css('background', 'linear-gradient(-45deg,rgba(1,178,0,0.6), rgba(0,0,0,1))');
        garage(); 
        });

      //blocks matrix letters

      $('pre').css('display', 'block');
        
      //car exit

         $('#showcase').css('top','-73vh'); 
         $('#showcase')
        .delay(5000)
        .queue(function(drive){ 
        $(this).css('top', '-122vh');
        $(this).css('left', '13.8vw');
        drive(); 
        });

        $('.car')
        .delay(5000)
        .queue(function(rotate){
        $(this).css('transform', 'translate(-50px, -50px) translateZ(90px) rotateX(0deg)rotateY(0deg)');
      rotate()  
      });

      $('.shadow')
        .delay(5000)
        .queue(function(rotate){
        $(this).css('transform', 'translate(-59px, -25px) translateZ(-100px) rotateX(90deg)rotateY(0deg)');
      rotate()  
      });
        
        // rotate car and exit

        $('#turnLeft').css('opacity', '0');
        $('#turnRight').css('opacity', '0');
        
        $('#exit')
        .delay(5000)
        .queue(function(exit){
          $(this).css('opacity', '0');
          exit();
        });

        // inputs 

        $('.action')
        .delay(1500)
        .queue(function(inputs){
          $(this).css('opacity', '0');
          inputs(); 
        });

    }
    )}else{

    };

 